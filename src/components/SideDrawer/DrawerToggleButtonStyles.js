import styled from 'styled-components';

export const ToggleButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 2.5rem;
    width: 3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
`;

export const ToggleButtonLine = styled.div`
    width: 3rem;
    height: 2px;
    background: #ffffff;
`;