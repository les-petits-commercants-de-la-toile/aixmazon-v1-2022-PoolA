import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClickFunction: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const CTA = (props: Props) => {
  return (
    <StyledButton
      className={props.className}
      onClick={props.onClickFunction}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
};

export default CTA;

const StyledButton = styled.button`
  width: 50%;
  padding: 16px 20px;
  border: none;
  margin-left:25%;
  margin-right:25%;
  border-radius: 30px 30px 30px 30px;
  background: ${(props) => props.theme.colors.yellowBackground};
  color: ${(props) => props.theme.colors.darkText};
  &:disabled { 
    &:hover {
      opacity: 0.8; 
      background: lightgrey; 
    }
    opacity: 0.4; 
    background: lightgrey; 
  } 
  &:enabled { 
    &:hover{
      background: ${(props) => props.theme.colors.yellowBackgroundHover};
    }
  }
`;
