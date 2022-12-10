import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClickFunction?: React.MouseEventHandler<HTMLButtonElement>;
  isClicked?: boolean;
}

const Button = (props: Props) => {
  return (
    <StyledButton
      className={props.className}
      onClick={props.onClickFunction}
      isClicked={props.isClicked}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<Props>`
  border: none;
  border-radius: 30px 30px 30px 30px;
  background-color: ${(props) =>
    props.isClicked
      ? props.theme.colors.secondary
      : props.theme.colors.yellowBackground};
      
  :hover{
    background-color : ${(props) => props.theme.colors.yellowBackgroundHover};
  }

  color: ${(props) => props.theme.colors.darkText};
  transition: background-color 0.2s ease;
  padding: 10px 20px;

`;
