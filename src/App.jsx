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

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#';
      setCurrentRoute(hash);
      if (hash === '#/owner' || hash === '#/admin') {
        setIsOwnerModalOpen(true);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (window.location.hash === '#/owner' || window.location.hash === '#/admin') {
      setIsOwnerModalOpen(true);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route) => {
    window.location.hash = route;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openConsultationModal = () => setIsConsultationModalOpen(true);
  const closeConsultationModal = () => setIsConsultationModalOpen(false);

  const openOwnerModal = () => setIsOwnerModalOpen(true);
  const closeOwnerModal = () => setIsOwnerModalOpen(false);

  const renderContent = () => {
    const route = currentRoute;

    if (route === '#' || route === '#/' || route === '') {
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

