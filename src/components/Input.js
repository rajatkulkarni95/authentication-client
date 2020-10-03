import React from "react";
import styled from "styled-components";

export const Input = ({ name, inputRef, placeholder, type }) => (
  <Label>
    <StyledInput
      name={name}
      ref={inputRef}
      placeholder={placeholder}
      type={type}
    />
  </Label>
);

const Label = styled.label`
  padding: 10px;
  width: 240px;
  display: flex;
  align-items: center;
  position: relative;
  border: none;
  outline: none;
  border-radius: 3px;
  background: ${(p) => p.theme.colors.elements};
  margin: 10px 0;
`;

const StyledInput = styled.input`
  margin: 0 10px;
  background: none;
  border: none;
  outline: none;
  color: ${(p) => p.theme.colors.text};
  font-family: ${(p) => p.theme.fonts.text};
`;
