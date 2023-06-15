import styled from '@emotion/styled';

export const ContactsLitsStyled = styled.ul`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  gap: 20px;
`;
export const ContactStyled = styled.li`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  font-size: 32px;
  gap: 5px;
  p {
    margin: 0px;
  }
  button {
    padding: 3px;
    font-size: 12px;
    font-style: italic;
    border-radius: 5px;
    background-color: cadetblue;
    cursor: pointer;
    :hover {
      background-color: red;
    }
    :active {
      background-color: green;
    }
  }
`;
export const TelStyled = styled.span`
  background-color: #3a9a77;
  border-radius: 5px;
`;
