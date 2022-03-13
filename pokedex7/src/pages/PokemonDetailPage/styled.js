import styled from "styled-components";

export const Container= styled.div`
display:flex;
gap: 50px;
margin: 30px auto;
width: 100vw;

@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    align-items: center;

  }
`