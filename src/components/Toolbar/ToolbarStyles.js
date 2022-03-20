import styled from 'styled-components';

export const ToolbarContainer = styled.header`
    position: fixed;
    width: 100%;
    background: #01040a;
    height: 64px;
    top: 0;
    left: 0;
    z-index: 1;
    @media ${(props) => props.theme.breakpoints.sm} {
        height: 32px;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        height: 48px;
    }
`;

export const ToolbarNavigation = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 5rem;
    @media ${(props) => props.theme.breakpoints.md} {
        margin: 0 1.5rem;
    }
`;

export const DrawerToggleButtonContainer = styled.div`
    display: none;
    @media ${(props) => props.theme.breakpoints.lg} {
        display: block;
    }
`;

export const ToolbarLogo = styled.div`
    margin-left: 0;
    @media ${(props) => props.theme.breakpoints.lg} {
        margin-left: 1rem;
    }
`;

export const ToolbarLogoNavLink = styled.a`
    font-size: 2.5rem;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;
    display: flex;
    align-items: center;
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.5rem;
    }
`;

export const Img = styled.img`
    height: 50px;
    padding: 0 1rem 0 0;
    @media ${(props) => props.theme.breakpoints.md} {
        height: 40px !important;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        height: 30px !important;
    }
`;

export const ToolbarNavigationItems = styled.div`
    @media ${(props) => props.theme.breakpoints.lg} {
        display: none;
    }
`;

export const ToolbarNavigationItemsList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
`;

export const ToolbarNavigationItem = styled.li`
    padding: 0 1rem;
`;

export const NavLink = styled.a`
    font-size: 2rem;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.5rem;
    }
`;

export const Spacer = styled.div`
    flex: 1;
`;

export const SocialIconsContainer = styled.div`
    display: flex;
    @media ${(props) => props.theme.breakpoints.lg} {
        display: none;
    }
`;

export const SocialIcons = styled.a`
    transition: 0.3s ease;
    color: white;
    border-radius: 20px;
    padding: 8px;
    &:hover {
        background-color: #212d45;
        transform: scale(1.1);
        cursor: pointer;
    }
`;