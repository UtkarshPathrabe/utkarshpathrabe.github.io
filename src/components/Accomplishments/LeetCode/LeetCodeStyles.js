import styled from "styled-components";

export const TitleLink = styled.a`
    color: hsl(204,23.8%,95.9%);
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 15rem;
    margin: 24px 0 40px;
    @media ${props => props.theme.breakpoints.md}{
        margin: 20px 0 32px;
    }
    @media ${props => props.theme.breakpoints.sm}{
        margin: 24px auto;
    }
`;

export const ErrorContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ChartContainer = styled.div`
    width: 50%;
    height: 400px;
    position: relative;
    margin: 2rem auto;
    @media ${props => props.theme.breakpoints.lg}{
        width: 100%;
    }
`;

export const ChartParentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    @media ${props => props.theme.breakpoints.lg}{
        flex-direction: column;
    }
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

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const BadgesContainer = styled.div`
    margin: 2rem auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BadgeParentContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
    @media ${(props) => props.theme.breakpoints.lg} {
        grid-template-columns: 1fr 1fr;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Badge = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    padding: 10px;
`;

export const BadgeImage = styled.img`
    width: 75%;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 10px;
`;

export const Title = styled.h4`
    font-size: 26px;
    line-height: 40px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
    padding-bottom: 1rem;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 22px;
        line-height: 32px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 18px;
        line-height: 24px;
    }
`;

export const Text = styled.p`
    font-size: 24px;
    line-height: 40px;
    font-weight: 200;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 20px;
        line-height: 32px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
    }
`;