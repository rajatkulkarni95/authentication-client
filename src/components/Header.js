import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, StyledLink } from "./Button";
import { useStore } from "../store";

export const Header = () => {
  const { user } = useStore();
  return (
    <Wrapper>
      <Logo to="/">Home</Logo>
      {user && user.name ? (
        <Button width="auto" onClick={() => useStore.setState({ user: {} })}>
          Logout
        </Button>
      ) : (
        <ButtonContainer>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink secondary="true" to="/register">
            Register
          </StyledLink>
        </ButtonContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  margin: 10px 30px 40px 30px;
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  :visited {
    color: inherit;
  }
  font-size: 24px;
  border-bottom: 4px solid ${(p) => p.theme.colors.accent};
`;
