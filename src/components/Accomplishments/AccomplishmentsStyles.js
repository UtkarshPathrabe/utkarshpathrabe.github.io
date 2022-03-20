import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: 1fr 1fr;
  }

  @media ${props => props.theme.breakpoints.sm}{
    grid-template-columns: 1fr;
    gap: 10px;
    margin: 18px auto;
  }
`;

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 100%;
  padding: 24px;

  @media ${props => props.theme.breakpoints.md} {
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 12px;
    &:nth-child(2n){
      grid-row:2;
    }
  }
`;

export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const GitHubStats = styled.img`
  height: 100%;
  width: 75%;
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    margin-bottom: 8px;
  }
`;

export const GitHubMostUsedLanguages = styled.img`
  height: 100%;
  width: 24%;
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const GitHubStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;