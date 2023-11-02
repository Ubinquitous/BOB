import React, { useState } from "react";
import * as S from "./SettingLayout.style";
import Storage from "@/util/Storage";
import ColorPicker from "@/components/ColorPicker";
import { useRouter } from "next/navigation";

const SettingLayout = () => {
  const [select, setSelect] = useState(
    Storage.getItem("align") === "vertical" ? "가로로 보기" : "세로로 보기"
  );
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [displayBoxColorPicker, setDisplayBoxColorPicker] = useState(false);
  const router = useRouter();
  const [customColor, setCustomColor] = useState({
    color: Storage.getItem("theme") || "#FFE5FB",
    alpha: 0,
  });
  const [customBoxColor, setCustomBoxColor] = useState({
    color: Storage.getItem("box_theme") || "#FFFFFF",
    alpha: 0,
  });
  const [colorssss, setColorssss] = useState("");
  const [colorboxssss, setColorboxssss] = useState("");

  const handleColorClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleBoxColorClick = () => {
    setDisplayBoxColorPicker(!displayBoxColorPicker);
  };

  React.useEffect(() => {
    Storage.setItem(
      "align",
      select === "세로로 보기" ? "horizontal" : "vertical"
    );
  }, [select]);

  React.useEffect(() => {
    setColorssss(Storage.getItem("theme") || "#ffe5fb");
  }, [colorssss, Storage]);

  React.useEffect(() => {
    setColorboxssss(Storage.getItem("box_theme") || "white");
  }, [colorboxssss, Storage]);

  React.useEffect(() => {
    setColorboxssss(customBoxColor.color);
    Storage.setItem("box_theme", customBoxColor.color);
  }, [customBoxColor]);

  React.useEffect(() => {
    setColorssss(customColor.color);
    Storage.setItem("theme", customColor.color);
  }, [customColor]);

  return (
    <S.SettingLayout color={colorssss}>
      <S.Container color={colorboxssss}>
        <S.Title>셋튕페이쥐</S.Title>
        <S.ButtonWrap>
          <S.Button
            onClick={() => setSelect("세로로 보기")}
            color={select === "세로로 보기" ? colorssss : "white"}
          >
            세로로 보기
          </S.Button>
          <S.Button
            onClick={() => setSelect("가로로 보기")}
            color={select === "가로로 보기" ? colorssss : "white"}
          >
            가로로 보기
          </S.Button>
        </S.ButtonWrap>
        <S.InputWrap>
          <S.InputTitle>메인 컬러 조정</S.InputTitle>
          <S.Input
            value={customColor.color.toUpperCase()}
            readOnly
            onClick={handleColorClick}
          />
          <ColorPicker
            ColorBox={setCustomColor}
            displayColorPicker={displayColorPicker}
            setDisplayColorPicker={setDisplayColorPicker}
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.InputTitle>박스 컬러 조정</S.InputTitle>
          <S.Input
            value={customBoxColor.color.toUpperCase()}
            readOnly
            onClick={handleBoxColorClick}
          />
          <ColorPicker
            ColorBox={setCustomBoxColor}
            displayColorPicker={displayBoxColorPicker}
            setDisplayColorPicker={setDisplayBoxColorPicker}
          />
        </S.InputWrap>
        <button onClick={() => router.push("/")}>돌아가깅</button>
      </S.Container>
    </S.SettingLayout>
  );
};

export default SettingLayout;
