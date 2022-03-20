import styled from "styled-components";

export const TestScoresContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
  margin-bottom: 3rem;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const TestScoresCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  min-height: 100px;
  width: 100%;
  background-image: url(${(props) => props.backgroundSvg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

export const Title = styled.h4`
  font-size: 22px;
  line-height: 26px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  padding-bottom: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
    line-height: 22px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.6);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 18px;
  }
`;