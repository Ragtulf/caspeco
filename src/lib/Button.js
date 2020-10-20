import React from 'react'
import styled from 'styled-components/macro'

export const Button = ({ buttonName, buttonType, onClickFunction, isDisabled }) => {
  return (
    <StyledButton
      onClick={onClickFunction}
      type={buttonType}
      disabled={isDisabled}>
      {buttonName}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  width: 150px;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  margin: 10px 10px 20px 10px;
  padding: 8px;
  border: none;
  align-self: center;
  color: #fff;
  background: #8226de;

  &:hover {
    background-color: #fca103;
    cursor: pointer;
  }

  &:focus {
    outline: 3px solid #5b02b5;
  }

  &:disabled {
    cursor: not-allowed;
  }
`