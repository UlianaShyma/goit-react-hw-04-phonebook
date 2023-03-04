import styled from 'styled-components';

export const List = styled.ul`
  font-size: 20px;
  margin-bottom: 20px;
  padding-left: 0px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 60px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
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
