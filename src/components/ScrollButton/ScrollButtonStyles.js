import styled from 'styled-components';
  
export const Button = styled.div`
    position: fixed;
    left: calc(100% - 60px);
    bottom: 20px;
    height: 4rem;
    font-size: 4rem;
    z-index: 1;
    cursor: pointer;
    outline: none;
    background: transparent;
    display: ${(props) => props.visible ? 'inline' : 'none'};
    transition: 0.3s ease;
    border-radius: 50%;
    &:hover {
        background-color: #212d45;
        transform: scale(1.1);
    }
`;