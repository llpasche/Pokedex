import styled from "styled-components";

export const BattleContainer = styled.div`
    width: 90%;
    margin: 10px auto;
    padding: 20px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    
    
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 73vw;
        }
`

export const ButtonContainer = styled.div`
    margin: 20px auto 0 auto;
    justify-self: center
`