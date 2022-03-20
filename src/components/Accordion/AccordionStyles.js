import styled from 'styled-components';

export const AccordionTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export const AccordionCollapseButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 8px;
`;

export const AccordionCollapseButton = styled.button`
    border: none;
    border-radius: 50px;
    color: #fff;
    display: flex;
    padding: 1rem;
    background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
    font-size: 24px;
    font-weight: 300;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: none;

    &:focus {
        outline: none;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 20px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
    }
`;