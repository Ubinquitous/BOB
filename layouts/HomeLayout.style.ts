import Image from "next/image";
import styled, { css } from "styled-components";

export const HomeLayouts = styled.div<{ color: string }>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ArrowImage = styled(Image)``;

export const HomeContainer = styled.div<{ color: string }>`
  width: 70vw;
  height: 96vh;
  border-radius: 8px;
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: space-evenly;
`;

export const HomeContainerTitle = styled.span`
  font-weight: 800;
  font-size: 18px;
  color: black;
`;

export const HomeContainerMealBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export const HomeContainerMealTitle = styled.div<{ color: string }>`
  font-size: 20px;
  font-weight: 800;
  width: 100%;
  color: ${({ color }) => color};
  padding-bottom: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid aliceblue;
`;

export const HomeContainerMealInfoBox = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 200%;
  tab-size: 100px;
  white-space: pre-line;
  text-align: center;
`;

export const MealBox = styled.div<{ align: string }>`
  display: flex;
  width: 100%;
  gap: 6vw;
  justify-content: space-between;
  ${({ align }) =>
    align === "horizontal"
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
        `}
`;

export const SettingButton = styled.button`
  position: absolute;
  top: 40px;
  left: 40px;
`;
