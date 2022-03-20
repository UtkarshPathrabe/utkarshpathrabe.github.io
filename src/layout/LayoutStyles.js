import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: auto;
    height: 100%;
`;

export const MainContainer = styled.main`
    margin-top: 64px;
    @media ${(props) => props.theme.breakpoints.sm} {
        margin-top: 32px;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        margin-top: 48px;
    }
`;
