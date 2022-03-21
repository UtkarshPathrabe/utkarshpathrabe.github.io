import { useState } from 'react';

import Footer from '../components/Footer/Footer';
import Toolbar from '../components/Toolbar/Toolbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import { Container, MainContainer } from './LayoutStyles';
import { ABOUT_URL, ACCOMPLISHMENTS_URL, PAINTINGS_URL, PROJECTS_URL, TECHNOLOGIES_URL } from "../constants/toolbarURLs.js";

const Layout = ({children}) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(current => !current);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;
  if (sideDrawerOpen) {
    backdrop = (<Backdrop onClickHandler={backdropClickHandler} />);
  }

  return (
    <Container>
      <Toolbar toggleButtonHandler={drawerToggleClickHandler} />
      <SideDrawer isOpen={sideDrawerOpen} itemClickHandler={backdropClickHandler} />
      {backdrop}
      <MainContainer>
        {children}
      </MainContainer>
      <Footer/>
      <ScrollButton />
    </Container>
  )
};

export default Layout;