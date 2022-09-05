import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";


export const SignInWrapper = styled.div`
    background-color: #000;
    height: 100vh;
    width: 100vw;
`

export const Icon = styled(LinkRouter)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: rgba(1, 147, 86, 1);
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const Container = styled.div`
    background: linear-gradient(
        180deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    );
    height: 500px;
    width: 400px;
    border-radius: 0.9rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.2rem 2.2rem 3.4rem 1.4rem;

    @media screen and (max-width: 560px) {
        width: 80vw;
        transform: translate(-50%, -56%);
        padding: 0.2rem 2.2rem 3.4rem 1.6rem;
    }
`;

export const FormHeader = styled.header`
    color: #fff;
    text-shadow: 2px 2px rgba(1, 147, 86, 1);
    font-weight: bolder;
    width: 80%;
    position: relative;
    left: 20px;
    top: 20px;
`;

export const HeaderIcon = styled.i`
    color: rgba(10, 201, 122, 1);
    text-shadow: none;
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
        font-size: 26px;
        font-weight: bolder;
        white-space: nowrap;
        color: rgba(10, 201, 122, 1);
        margin-bottom: 10px;
    }

    ::after {
        content: "Forgot Password?";
        text-align: center;
        color: #fff;
        opacity: 0.7;
    }
`;

export const FormLabel = styled.label`
    color: #fff;
    letter-spacing: 1.2px;
    text-emphasis-color: none;
    text-shadow: none;
    font-weight: bolder;
    float: left;
`;

export const FormInput = styled.input`
    height: 40px;
    width: 100%;
    border: 1px solid #3c415e;
    border-radius: 4px;
    margin-block-start: 6px;
    margin-block-end: 26px;
    font-family: "jost", sans-serif;
    padding-inline: 16px;
    letter-spacing: 0.8px;
    font-size: 18px;

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
    font-weight: bolder;
    font-size: 16px;
    color: #f3f9fb;
    border: none;
    outline: none;
    padding: 0.4rem 1.2rem;

    :hover {
        cursor: pointer;
    }
`;
