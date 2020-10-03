import React from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styled from "styled-components";
import { signup } from "../services";
import { useForm } from "react-hook-form";
import { useStore } from "../store";

export const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const { error, newUser } = useStore();

  const onSubmit = (data) => {
    signup(data);
  };

  return (
    <Wrapper>
      <Heading>Register with Us</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="firstName"
          type="text"
          placeholder="First Name"
          inputRef={register({ required: true })}
        />
        {errors.firstName && <Validation>First Name is required</Validation>}
        <Input
          name="lastName"
          type="text"
          placeholder="Last Name"
          inputRef={register}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          inputRef={register({ required: true })}
        />
        {errors.email && <Validation>Email is required</Validation>}
        <Input
          name="password"
          type="password"
          placeholder="Enter Password"
          inputRef={register({ required: true })}
        />
        {errors.password && <Validation>Password is required</Validation>}
        <Input
          name="password2"
          type="password"
          placeholder="Re-Enter Password"
          inputRef={register({ required: true })}
        />
        {errors.password2 && (
          <Validation>Password Confirmation required</Validation>
        )}
        <Button type="submit">Sign Up</Button>
        {error ? <Error>{error}</Error> : null}
        {newUser ? <Success>{newUser}</Success> : null}
      </form>
    </Wrapper>
  );
};

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

const Validation = styled.span`
  font-size: 12px;
  color: #cd0a0a;
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
