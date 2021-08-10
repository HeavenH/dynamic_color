import styled from 'styled-components';

interface IChangeColor {
  changeColor: string;
}

export const Background = styled.div<IChangeColor>`
  background-color: ${(propsColor) => propsColor.changeColor };
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputChangeColor = styled.input`
  width: 420px;
  height: 60px;
  border-radius: 12px;
  border: 1px solid #6A5ACD;
`;
