import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 90%;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    align-items: center;

  }
`;
