import React from "react";
import styled from "styled-components";
import { useStore } from "../store";

export const Home = () => {
  const { user } = useStore();

  return (
    <Wrapper>
      {user && user.name ? (
        <h1>Welcome {user.name} </h1>
      ) : (
        <h1>This is the Home Page</h1>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
