import React  from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
    width: 280px:
    min-heigth: 550px:
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    backgound-color: #fff:
    box-shadow: 0 0 2px rgba(15, 15, 0 ,28);
    position: relative;
    overflow:hidden;
`;
const TopContainer = styled.div`
    width: 100%
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-buttom: 5em;
`;
   
const BackDdrop = styled.div`
    width: 160%;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    background: rgb(241,196,15);
    background: linear-gradient(
        90deg, 
        rgba(241,196,15,1) 0%, 
        rgba(243,172,18,1) 100%
        );

    `;

    export function AccountBox(props) {
        return <BoxContainer>
            <TopContainer>
            <BackDdrop/>


        </TopContainer>
        </BoxContainer>


    }