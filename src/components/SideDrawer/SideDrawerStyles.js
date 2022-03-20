import styled from 'styled-components';

export const SideDrawerNavigation = styled.nav`
    height: 100%;
    background: #060d1c;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 300px;
    z-index: 105;
    transform: ${(props) => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.2s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SideDrawerNavigationItems = styled.ul`
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 64px 1rem 1rem;
    @media ${(props) => props.theme.breakpoints.md} {
        margin: 48px 1rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 32px 1rem;
    }
`;

export const SideDrawerNavigationItem = styled.li`
    text-decoration: none;
    margin: 0.75rem;
    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 0.5rem;
    }
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
`;

export const SocialIconsContainer = styled.div`
    display: flex;
    justify-content: center;
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