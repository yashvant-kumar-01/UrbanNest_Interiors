import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import OwnerModal from './components/OwnerModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProcessPage from './pages/ProcessPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import ConsultationPage from './pages/ConsultationPage';
import { updateRouteSEO } from './utils/seoHelper';

export function normalizeRoute(pathOrHash) {
  if (!pathOrHash) return '/';
  let clean = pathOrHash;
  if (clean.startsWith('#')) {
    clean = clean.slice(1);
  }
  if (!clean.startsWith('/')) {
    clean = '/' + clean;
  }
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }
  if (clean === '/home' || clean === '') {
    return '/';
  }
  return clean;
}

function getInitialRoute() {
  if (typeof window === 'undefined') return '/';
  if (window.location.hash) {
    const clean = normalizeRoute(window.location.hash);
    if (window.history.replaceState) {
      window.history.replaceState(null, '', clean + window.location.search);
    }
    return clean;
  }
  return normalizeRoute(window.location.pathname);
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => getInitialRoute());
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(() => {
    const r = getInitialRoute();
    return r === '/owner' || r === '/admin';
  });

  useEffect(() => {
    // If initially landed on a hash (#, #/, #/about), normalize to clean path
    if (window.location.hash) {
      const clean = normalizeRoute(window.location.hash);
      if (window.history.replaceState) {
        window.history.replaceState(null, '', clean + window.location.search);
      }
    }

    const current = normalizeRoute(window.location.pathname);
    updateRouteSEO(current);

    const handleLocationChange = () => {
      let activePath = normalizeRoute(window.location.pathname);
      if (window.location.hash) {
        activePath = normalizeRoute(window.location.hash);
        if (window.history.replaceState) {
          window.history.replaceState(null, '', activePath + window.location.search);
        }
      }

      setCurrentRoute(activePath);
      updateRouteSEO(activePath);

      if (activePath === '/owner' || activePath === '/admin') {
        setIsOwnerModalOpen(true);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (route) => {
    const target = normalizeRoute(route);

    if (target === '/owner' || target === '/admin') {
      setIsOwnerModalOpen(true);
      return;
    }

    if (window.history.pushState) {
      window.history.pushState(null, '', target);
    }
    setCurrentRoute(target);
    updateRouteSEO(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openConsultationModal = () => setIsConsultationModalOpen(true);
  const closeConsultationModal = () => setIsConsultationModalOpen(false);

  const openOwnerModal = () => setIsOwnerModalOpen(true);
  const closeOwnerModal = () => setIsOwnerModalOpen(false);

  const renderContent = () => {
    const route = currentRoute;

    if (route === '/' || route === '') {
      return <HomePage navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route === '/about') {
      return <AboutPage navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route === '/services') {
      return <ServicesPage navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route.startsWith('/services/')) {
      const slug = route.replace('/services/', '');
      return <ServiceDetailPage slug={slug} navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route === '/projects') {
      return <ProjectsPage navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route.startsWith('/projects/')) {
      const id = route.replace('/projects/', '');
      return <ProjectDetailPage projectId={id} navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route === '/process') {
      return <ProcessPage navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route === '/testimonials') {
      return <TestimonialsPage openConsultationModal={openConsultationModal} />;
    }
    if (route === '/blog') {
      return <BlogPage navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route.startsWith('/blog/')) {
      const slug = route.replace('/blog/', '');
      return <BlogDetailPage slug={slug} navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route === '/contact') {
      return <ContactPage />;
    }
    if (route === '/consultation') {
      return <ConsultationPage />;
    }

    // Default Fallback
    return <HomePage navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        currentRoute={currentRoute}
        navigateTo={navigateTo}
        openConsultationModal={openConsultationModal}
      />

      <main style={{ flexGrow: 1 }}>
        {renderContent()}
      </main>

      <Footer
        navigateTo={navigateTo}
        openConsultationModal={openConsultationModal}
        openOwnerModal={openOwnerModal}
      />

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={closeConsultationModal}
      />

      <OwnerModal
        isOpen={isOwnerModalOpen}
        onClose={closeOwnerModal}
      />
    </div>
  );
}
