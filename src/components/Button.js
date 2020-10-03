import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background: ${(p) => p.theme.colors.primary};
  border-radius: 2px;
  color: ${(p) => p.theme.colors.text};
  margin: 10px 0;
  cursor: pointer;
  font-family: ${(p) => p.theme.fonts.text};

  ${(props) =>
    props.secondary &&
    css`
      background: ${(p) => p.theme.colors.secondary};
    `}

  ${(props) =>
    props.width &&
    css`
      width: ${(p) => p.width};
    `}
`;

export const StyledLink = styled(Link)`
  width: auto;
  padding: 10px;
  border: none;
  background: ${(p) => p.theme.colors.primary};
  border-radius: 2px;
  color: ${(p) => p.theme.colors.text};
  margin-right: 20px;
  cursor: pointer;
  font-family: ${(p) => p.theme.fonts.text};
  text-decoration: none;
  font-size: 14px;

  ${(props) =>
    props.secondary &&
    css`
      background: ${(p) => p.theme.colors.secondary};
    `}
`;
