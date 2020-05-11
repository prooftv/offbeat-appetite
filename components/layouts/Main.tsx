import React from 'react';

import Nav from '../nav/Nav';

const MainLayout: React.FC = ({ children }) => (
  <>
    <Nav />

    <main
      data-testid="main-layout-main-content"
      id="content"
      tabIndex={-1}
      className="outline-none"
    >
      {children}
    </main>

    {/* <Footer /> */}
  </>
);

export default MainLayout;
