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

function getNormalizedRoute(hash) {
  if (!hash || hash === '#' || hash === '#/' || hash === '/' || hash === '#home') {
    return '#';
  }
  return hash;
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => getNormalizedRoute(window.location.hash));
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(
    () => window.location.hash === '#/owner' || window.location.hash === '#/admin'
  );

  useEffect(() => {
    // If initially landed on a home hash (#, #/, #home), strip it to provide a clean root URL
    const initialHash = window.location.hash;
    if (initialHash === '#' || initialHash === '#/' || initialHash === '#home') {
      if (window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }

    // Initial SEO update with normalized home metadata
    updateRouteSEO(getNormalizedRoute(window.location.hash));

    const handleLocationChange = () => {
      const hash = window.location.hash;
      const normalized = getNormalizedRoute(hash);

      setCurrentRoute(normalized);
      updateRouteSEO(normalized);

      // Keep address bar clean when on homepage
      if (normalized === '#' && window.location.hash) {
        if (window.history.replaceState) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }

      if (normalized === '#/owner' || normalized === '#/admin') {
        setIsOwnerModalOpen(true);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (route) => {
    const isHome = !route || route === '#' || route === '#/' || route === '/' || route === '' || route === '#home';
    if (isHome) {
      setCurrentRoute('#');
      updateRouteSEO('#');
      if (window.location.hash) {
        if (window.history.pushState) {
          window.history.pushState(null, '', window.location.pathname + window.location.search);
        } else {
          window.location.hash = '';
        }
      }
    } else {
      window.location.hash = route;
      setCurrentRoute(route);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openConsultationModal = () => setIsConsultationModalOpen(true);
  const closeConsultationModal = () => setIsConsultationModalOpen(false);

  const openOwnerModal = () => setIsOwnerModalOpen(true);
  const closeOwnerModal = () => setIsOwnerModalOpen(false);

  const renderContent = () => {
    const route = currentRoute;

    if (route === '#' || route === '#/' || route === '' || route === '/' || route === '#home') {
      return <HomePage navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route === '#/about') {
      return <AboutPage navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route === '#/services') {
      return <ServicesPage navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route.startsWith('#/services/')) {
      const slug = route.replace('#/services/', '');
      return <ServiceDetailPage slug={slug} navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route === '#/projects') {
      return <ProjectsPage navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route.startsWith('#/projects/')) {
      const id = route.replace('#/projects/', '');
      return <ProjectDetailPage projectId={id} navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route === '#/process') {
      return <ProcessPage navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route === '#/testimonials') {
      return <TestimonialsPage openConsultationModal={openConsultationModal} />;
    }
    if (route === '#/blog') {
      return <BlogPage navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route.startsWith('#/blog/')) {
      const slug = route.replace('#/blog/', '');
      return <BlogDetailPage slug={slug} navigateTo={navigateTo} openConsultationModal={openConsultationModal} />;
    }
    if (route === '#/contact') {
      return <ContactPage />;
    }
    if (route === '#/consultation') {
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
