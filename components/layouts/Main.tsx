import React from 'react';

import Nav from '../nav/Nav';
import NewsletterSubscribeForm from '../form/NewsletterSubscribe';
import Footer from '../footer/Footer';

const MainLayout: React.FC = ({ children }) => (
  <>
    <Nav />

    <main
      data-testid="main-layout-main-content"
      id="content"
      tabIndex={-1}
      className="outline-none relative bg-gray-lighter z-10"
    >
      {children}
    </main>

    <NewsletterSubscribeForm formInstance="pre-footer" />

    <Footer />
  </>
);

export default MainLayout;
