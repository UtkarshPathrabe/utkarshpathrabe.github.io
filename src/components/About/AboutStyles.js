import styled from 'styled-components';

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: auto;
    grid-template-columns: auto;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: auto;
    gap: 10px;
    margin: auto;
  }
`;

export const ProfileImg = styled.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 25%;
  margin: auto auto;
`;