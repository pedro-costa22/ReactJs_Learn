import styled from "styled-components";

const Div = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1170px;
    height: 100%;

    img {
        width: 40%;
    }

    textarea {
        min-width: 40%;
        max-width: 40%;
        height: 150px;
        max-height: 150px;
        border-radius: 5px;
        margin-top: 20px;
        font-size: 1rem;
        padding: 5px;
    }

    @media (max-width: 992px){
        width: 100%;

        img {
            width: 80%;
        }

        textarea {
            min-width: 80%;
            max-width: 80%;
            min-height: 120px;
            max-height: 120px;
        }
    }

    

`;

const Button = styled.button`
    background: ${props => props.isOn != '' ? "#000" : "grey"};
    transition: all .2s;
    border-radius: 10px;
    width:  40%;
    height: 64px;
    color: #fff;
    border: none;
    margin: 10px 0;
    font-size: 1rem;
    cursor: pointer;

    @media (max-width: 992px){
        width: 80%;
    }

   
`;


const Comment = styled.span`

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    background: rgba(255, 255, 255, 0.14);
    border-radius: 4px;
    width:  40%;
    min-height: 64px;
    color: #fff;
    border: none;
    margin-top: 10px;
    font-size: 1rem;

    @media (max-width: 992px){
        width: 80%;
    }
`;

export {Div, Button, Comment}