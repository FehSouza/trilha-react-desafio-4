import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;
  border: 1px solid #81259d;
  border-radius: 21px;
  transition-duration: 350ms;
  cursor: pointer;

  &:disabled {
    background-color: #696969;
    border: 1px solid #696969;
    cursor: not-allowed;

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    opacity: 0.8;
  }
`
