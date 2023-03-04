import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid #ccc;
  padding: 15px 150px 15px 15px;
  border-radius: 4px;
`;

export const Label = styled.label`
  font-size: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
`;

export const Input = styled.input`
  width: 220px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 4px 8px;
`;

export const Button = styled.button`
  font-size: 15px;
  width: 100px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: transparent;
  transition: 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;
