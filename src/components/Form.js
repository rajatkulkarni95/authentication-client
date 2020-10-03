import React from "react";
import styled from "styled-components";

export const Form = ({ children }) => <StyledForm>{children}</StyledForm>;

const StyledForm = styled.form`
  padding: 20px;
`;
