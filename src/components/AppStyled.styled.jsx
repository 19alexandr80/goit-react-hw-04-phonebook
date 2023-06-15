import styled from '@emotion/styled';

export const AppStyled = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    gap: 20px;
  }
  input {
    border: 3px outset #3ae2ce;
    padding: 10px;
    font-size: 24px;
    border-radius: 10px;
    margin-left: 20px;
    :focus-visible {
      border: 3px inset #3ae2ce;
      outline: none;
    }
  }
  button {
    border: 3px outset #3ae2ce;
    padding: 10px;
    font-size: 24px;
    border-radius: 10px;
    background-color: cadetblue;
    cursor: pointer;
    :hover {
      background-color: green;
      border: 3px inset #3ae2ce;
    }
    :active {
      background-color: red;
      border: 3px inset #3ae2ce;
    }
  }
  label {
    font-size: 24px;
  }
`;
