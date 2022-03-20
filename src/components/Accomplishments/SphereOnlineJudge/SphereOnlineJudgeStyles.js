import styled from "styled-components";

export const TitleLink = styled.a`
    color: hsl(204,23.8%,95.9%);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
    @media ${props => props.theme.breakpoints.md}{
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`;