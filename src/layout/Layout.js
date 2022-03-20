import { useState, createContext, useEffect } from 'react';

import Footer from '../components/Footer/Footer';
import Toolbar from '../components/Toolbar/Toolbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import { Container, MainContainer } from './LayoutStyles';
import { ABOUT_URL, ACCOMPLISHMENTS_URL, PAINTINGS_URL, PROJECTS_URL, TECHNOLOGIES_URL } from "../constants/toolbarURLs.js";

export const AccordionContext = createContext(null);

const Layout = ({children}) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [projectsIsOpen, setProjectsIsOpen] = useState(false);
  const [technologiesIsOpen, setTechnologiesIsOpen] = useState(false);
  const [accomplishmentsIsOpen, setAccomplishmentsIsOpen] = useState(false);
  const [paintingsIsOpen, setPaintingsIsOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === PROJECTS_URL) {
      setProjectsIsOpen(true);
    } else if (hash === TECHNOLOGIES_URL) {
      setTechnologiesIsOpen(true);
    } else if (hash === ACCOMPLISHMENTS_URL) {
      setAccomplishmentsIsOpen(true);
    } else if (hash === PAINTINGS_URL) {
      setPaintingsIsOpen(true);
    }
  }, []);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(current => !current);
  };

  const toggleProjectsIsOpen = () => {
    setProjectsIsOpen(current => !current);
  };

  const toggleTechnologiesIsOpen = () => {
    setTechnologiesIsOpen(current => !current);
  };

  const toggleAccomplishmentsIsOpen = () => {
    setAccomplishmentsIsOpen(current => !current);
  };

  const togglePaintingsIsOpen = () => {
    setPaintingsIsOpen(current => !current);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;
  if (sideDrawerOpen) {
    backdrop = (<Backdrop onClickHandler={backdropClickHandler} />);
  }

  const updateContextValue = (contextValue, { projectsOpen=false, technologiesOpen=false, accomplishmentsOpen=false, paintingsOpen=false }) => {
    contextValue.setProjectsIsOpen(projectsOpen);
    contextValue.setTechnologiesIsOpen(technologiesOpen);
    contextValue.setAccomplishmentsIsOpen(accomplishmentsOpen);
    contextValue.setPaintingsIsOpen(paintingsOpen);
    backdropClickHandler();
  };

  const handleLinkClick = ({ contextValue, url }) => {
    if (url === ABOUT_URL) {
      updateContextValue(contextValue, {});
    } else if (url === PROJECTS_URL) {
      updateContextValue(contextValue, { projectsOpen: true });
    } else if (url === TECHNOLOGIES_URL) {
      updateContextValue(contextValue, { technologiesOpen: true });
    } else if (url === ACCOMPLISHMENTS_URL) {
      updateContextValue(contextValue, { accomplishmentsOpen: true });
    } else if (url === PAINTINGS_URL) {
      updateContextValue(contextValue, { paintingsOpen: true });
    }
  };

  return (
    <AccordionContext.Provider value={{ 
      projectsIsOpen, toggleProjectsIsOpen, setProjectsIsOpen,
      technologiesIsOpen, toggleTechnologiesIsOpen, setTechnologiesIsOpen,
      accomplishmentsIsOpen, toggleAccomplishmentsIsOpen, setAccomplishmentsIsOpen,
      paintingsIsOpen, togglePaintingsIsOpen, setPaintingsIsOpen,
    }}>
      <Container>
        <Toolbar toggleButtonHandler={drawerToggleClickHandler} handleLinkClick={handleLinkClick} />
        <SideDrawer isOpen={sideDrawerOpen} itemClickHandler={backdropClickHandler} handleLinkClick={handleLinkClick} />
        {backdrop}
        <MainContainer>
          {children}
        </MainContainer>
        <Footer/>
        <ScrollButton />
      </Container>
    </AccordionContext.Provider>
  )
};

export default Layout;