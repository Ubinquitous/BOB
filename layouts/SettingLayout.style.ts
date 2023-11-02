import styled from "styled-components";

export const SettingLayout = styled.div<{ color: string }>`
  width: 100%;
  height: 100vh;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div<{ color: string }>`
  width: 50%;
  height: 70%;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 22px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button<{ color: string }>`
  width: 100px;
  height: 32px;
  background-color: ${({ color }) => color};
  color: ${({ color }) => (color === "white" ? "black" : "#aaa")};
  border: none;
  border-radius: 4px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.05);
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputTitle = styled.span`
  font-size: 16px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 200px;
  height: 28px;
  padding-left: 16px;
`;
