import React from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { login } from "../services";
import { useStore } from "../store";
import { Redirect } from "react-router-dom";

export const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  const { error, user } = useStore();

  return (
    <Wrapper>
      <Heading>Log In</Heading>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            inputRef={register({ required: true })}
            name="email"
            type="email"
            placeholder="Enter Email"
          />
          <Input
            name="password"
            inputRef={register({ required: true })}
            type="password"
            placeholder="Enter Password"
          />
          <Button type="submit">Log In</Button>
        </form>
        {error ? <Error>{error}</Error> : null}
        {user && user.name ? (
          <>
            <Success>Logged in successfully</Success>
            <Redirect to="/" />
          </>
        ) : null}
      </FormWrapper>
    </Wrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-family: ${(p) => p.theme.fonts.heading};
`;

const Error = styled.div`
  width: 100%;
  margin: 10px 0;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  background: #cd0a0a;
  color: #ffffff;
`;

const Success = styled.div`
  width: 100%;
  margin: 10px 0;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  background: #91d18b;
  color: #1a1a2e;
`;
