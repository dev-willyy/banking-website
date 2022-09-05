import React from "react";
import {
    Container,
    Form,
    FormHeader,
    FormInput,
    FormLabel,
    FormSubmitInput,
    HeaderIcon,
    Icon,
    SignInWrapper,
} from "./SigninElements";
import { BsPiggyBank } from "react-icons/bs";

const SignIn = () => {
    return (
        <>
            <SignInWrapper>
                <Icon to="/">piggybanker</Icon>
                <Container>
                    <FormHeader>
                        <HeaderIcon>
                            {" "}
                            <BsPiggyBank />
                        </HeaderIcon>{" "}
                        piggy
                    </FormHeader>
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
