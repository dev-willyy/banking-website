import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const SignInWrapper = styled.div`
    background-color: #2c3333;
    height: 100vh;
    width: 100vw;
`;

export const SignInHeader = styled.div`
    max-height: 100px;
`;

export const HeaderSpan = styled.span`
    color: rgba(10, 201, 122, 1);
    text-shadow: none;
    font-size: 30px;
    display: inline-block;
    transform: translate(26px, 6px);
`;

export const Icon = styled(LinkRouter)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: rgba(1, 147, 86, 1);
    font-weight: 700;
    font-size: 24px;
`;

export const Container = styled.div`
    background: linear-gradient(
        180deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    );
    max-height: 460px;
    width: 400px;
    border-radius: 0.9rem;
    margin: 20px auto 0;
    padding: 0.2rem 2.2rem 3.4rem 1.4rem;

    @media screen and (max-width: 560px) {
        width: 80vw;
    }

    @media screen and (max-width: 330px) {
        width: 80vw;
        padding-left: 0.7rem;
    }
`;

export const Form = styled.form`
    margin: 0 auto;
    background-color: transparent;
    display: grid;
    grid-template-columns: 1fr;
    place-items: left;
    padding: 20px;

    ::before {
        content: "Log In to piggybanker";
        font-family: "Poppins", sans-serif !important;
        font-weight: bolder;
        white-space: nowrap;
        color: rgba(10, 201, 122, 1);
        margin-bottom: 7px;
    }

    ::after {
        content: "Forgot Password?";
        font-family: "Poppins", sans-serif !important;
        text-align: center;
        color: #fff;
        opacity: 0.7;
        position: relative;
        top: -40%;
    }
`;

export const FormLabel = styled.label`
    color: #fff;
    letter-spacing: 1.2px;
    text-emphasis-color: none;
    text-shadow: none;
    font-family: "Jost", sans-serif !important;
    font-weight: bolder;
    float: left;
    transform: translateY(14px);
`;

export const FormInput = styled.input`
    height: 40px;
    width: 100%;
    border: 1px solid #3c415e;
    border-radius: 4px;
    margin-block: 18px;
    font-family: "Jost", sans-serif !important;
    padding-inline: 16px;
    letter-spacing: 0.8px;
    font-size: 18px;

    @media screen and (max-width: 497px) {
        width: 60vw;
    }

    :active,
    :focus {
        outline: none;
        border: none;
        padding-left: 16px;
        font-family: "jost", sans-serif;
        letter-spacing: 0.8px;
        font-size: 18px;
    }
`;

export const FormSubmitInput = styled.input`
    height: 40px;
    width: 100%;
    border-radius: 4px;
    margin-top: 14px;
    margin-block-end: 26px;
    background-color: rgba(1, 147, 86, 1);
    letter-spacing: 2.2px;
    font-family: "Jost", sans-serif !important;
    font-weight: bolder;
    font-size: 16px;
    color: #f3f9fb;
    border: none;
    outline: none;
    padding: 0.4rem 1.2rem;
    transition: all 0.3s ease-in;

    @media screen and (max-width: 497px) {
        width: 60vw;
    }

    :hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;
