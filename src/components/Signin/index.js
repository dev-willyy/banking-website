import React from "react";
import {
    Container,
    Form,
    FormInput,
    FormLabel,
    FormSubmitInput,
    HeaderSpan,
    Icon,
    SignInHeader,
    SignInWrapper,
} from "./SigninElements";
import { GiPiggyBank } from "react-icons/gi";

const SignIn = () => {
    return (
        <>
            <SignInWrapper>
                <SignInHeader>
                    <HeaderSpan>
                        <GiPiggyBank />
                    </HeaderSpan>
                    <Icon to="/">piggybanker</Icon>
                </SignInHeader>

                <Container>
                    <Form action="#">
                        <FormLabel htmlFor="name" required>
                            Username
                        </FormLabel>
                        <FormInput type="text" />

                        <FormLabel htmlFor="email" required>
                            E-Mail
                        </FormLabel>
                        <FormInput type="text" />

                        <FormLabel htmlFor="password" required>
                            Password
                        </FormLabel>
                        <FormInput type="text" />

                        <FormSubmitInput
                            type="submit"
                            value="SIGN IN"
                            onClick="event.preventDefault()"
                        />
                    </Form>
                </Container>
            </SignInWrapper>
        </>
    );
};

export default SignIn;
