import React from "react";
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';

import { Img, ToolbarContainer, ToolbarNavigation, DrawerToggleButtonContainer, ToolbarLogo, ToolbarLogoNavLink, ToolbarNavigationItems, ToolbarNavigationItemsList, ToolbarNavigationItem, NavLink, Spacer, SocialIconsContainer, SocialIcons } from './ToolbarStyles.js';
import { toolbarItemsList } from '../../constants/toolbar';
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton.js";
import { AccordionContext } from '../../layout/Layout';

const Toolbar = ({ toggleButtonHandler, handleLinkClick }) => (
    <ToolbarContainer>
        <ToolbarNavigation>
            <DrawerToggleButtonContainer>
                <DrawerToggleButton onClickHandler={toggleButtonHandler} />
            </DrawerToggleButtonContainer>
            <ToolbarLogo>
                <Link href='#' passHref>
                    <ToolbarLogoNavLink>
                        <Img src={'/images/logo.png'} alt={'navigation-logo'} /> Utkarsh
                    </ToolbarLogoNavLink>
                </Link>
            </ToolbarLogo>
            <Spacer />
            <ToolbarNavigationItems>
                <ToolbarNavigationItemsList>
                    <AccordionContext.Consumer>
                        {(contextValue) => (
                            <>
                                {toolbarItemsList.map(({ label, url }) => (
                                    <ToolbarNavigationItem key={label}>
                                        <Link href={url} passHref>
                                            <NavLink onClick={() => handleLinkClick({ contextValue, url })}>
                                                {label}
                                            </NavLink>
                                        </Link>
                                    </ToolbarNavigationItem>
                                ))}
                            </>
                        )}
                    </AccordionContext.Consumer>
                </ToolbarNavigationItemsList>
            </ToolbarNavigationItems>
            <Spacer />
            <SocialIconsContainer>
                <SocialIcons href='https://github.com/UtkarshPathrabe' target='_blank' rel='noopener noreferrer' aria-label='github'>
                    <AiFillGithub size='3rem' />
                </SocialIcons>
                <SocialIcons href='https://www.linkedin.com/in/utkarshpathrabe/' target='_blank' rel='noopener noreferrer' aria-label='linkedin'>
                    <AiFillLinkedin size='3rem' />
                </SocialIcons>
                <SocialIcons href='https://www.instagram.com/utkarsh_pathrabe/' target='_blank' rel='noopener noreferrer' aria-label='instagram'>
                    <AiFillInstagram size='3rem' />
                </SocialIcons>
                <SocialIcons href='https://www.facebook.com/utkarshpathrabe/' target='_blank' rel='noopener noreferrer' aria-label='facebook'>
                    <AiFillFacebook size='3rem' />
                </SocialIcons>
                <SocialIcons href='https://twitter.com/UtkarshPathrabe' target='_blank' rel='noopener noreferrer' aria-label='twitter'>
                    <AiFillTwitterCircle size='3rem' />
                </SocialIcons>
            </SocialIconsContainer>
        </ToolbarNavigation>
    </ToolbarContainer>
);

export default Toolbar;