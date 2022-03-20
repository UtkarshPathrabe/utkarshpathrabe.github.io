import styled from "styled-components";

export const TitleLink = styled.a`
    color: hsl(204,23.8%,95.9%);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
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
    width: 100%;
    height: 400px;
    position: relative;
    margin: 2rem auto;
`;

export const ScoresContainer = styled.div`
    margin: 2rem auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ScoreParentContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8rem;
    row-gap: 1rem;
    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
        flex-direction: column;
    }
`;

export const ScoreContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 20px;
        line-height: 32px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
    }
`;

export const HelperText = styled.p`
    font-size: 18px;
    line-height: 22px;
    font-weight: 100;
    color: rgba(255, 255, 255, 0.5);

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 16px;
        line-height: 20px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 12px;
        line-height: 16px;
    }
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
    grid-template-columns: 1fr 1fr 1fr;
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
    width: 100%;
    height: 200px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 10px;
    padding: 30px;
    @media ${(props) => props.theme.breakpoints.sm} {
        height: 150px;
        padding: 20px;
    }
`;

export const StarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:Center;
    color: rgba(255, 255, 255, 0.5);
`;