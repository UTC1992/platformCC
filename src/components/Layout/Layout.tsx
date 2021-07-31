import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Slider from './Slider/Slider';
import './Layout.css';

interface ILayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout: React.FC<ILayoutProps> = ( props ) => {
  const { children } = props;
  return (
    <div className="class-layout-container-root">
      <div>
        <Navbar />
      </div>
      <Slider />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
