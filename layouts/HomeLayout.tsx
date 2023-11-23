import React, { useState } from "react";
import * as S from "./HomeLayout.style";
import MealType from "@/types/meal.type";
import axios from "axios";
import { useQuery } from "react-query";
import Left from "assets/left.svg";
import Right from "assets/right.svg";
import useDate from "@/hooks/useDate";
import Storage from "@/util/Storage";
import { useRouter } from "next/navigation";

const HomeLayout = () => {
  const { getParseDate, getCurrentDate, getDayOfWeek, setDay } = useDate();
  const [currentDate, setCurrentDate] = React.useState(getCurrentDate());
  const [meal, setMeal] = React.useState<MealType[]>();
  const router = useRouter();

  const [color, setColor] = useState("");
  const [boxColor, setBoxColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [align, setAlign] = useState("");

  React.useEffect(() => {
    setAlign(Storage.getItem("align") || "horizontal");
    setColor(Storage.getItem("theme") || "#FFE5FB");
    setBoxColor(Storage.getItem("box_theme") || "#FFFFFF");
    setTextColor(Storage.getItem("text_theme") || "#000000");
  }, [Storage, color, boxColor, align, textColor]);

  const onAsyncGetMealInfo = async () => {
    return (
      await axios.get(
        `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=94761be062484942bf49541719b7d4ab&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&MLSV_YMD=${currentDate}`
      )
    ).data;
  };

  const { refetch } = useQuery("meal", onAsyncGetMealInfo, {
    onSuccess: (data) => {
      try {
        setMeal(data.mealServiceDietInfo[1].row);
      } catch (err) {
        setMeal(undefined);
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleIncreaseDay = () => {
    setCurrentDate((prev) => setDay(1, prev));
  };

  const handleDecreaseDay = () => {
    setCurrentDate((prev) => setDay(-1, prev));
  };

  React.useEffect(() => {
    refetch();
  }, [currentDate, refetch]);

  React.useEffect(() => {
    const handleSetDateKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handleDecreaseDay();
      if (e.key === "ArrowRight") handleIncreaseDay();
    };

    window.addEventListener("keydown", handleSetDateKeyDown);
    return () => {
      window.removeEventListener("keydown", handleSetDateKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <S.HomeLayouts color={color}>
      <S.ArrowImage onClick={handleDecreaseDay} src={Left} alt="" width={32} />
      <S.HomeContainer color={boxColor} textColor={textColor}>
        <S.SettingButton onClick={() => router.push("/setting")}>
          세팅하깅
        </S.SettingButton>
        <S.HomeContainerTitle>{getParseDate(currentDate)}</S.HomeContainerTitle>
        <S.MealBox align={align}>
          {meal &&
            meal.map((m, index) => (
              <S.HomeContainerMealBox key={index}>
                <S.HomeContainerMealTitle color={textColor}>
                  {m.MMEAL_SC_NM}
                </S.HomeContainerMealTitle>
                <S.HomeContainerMealInfoBox>
                  {align === "vertical"
                    ? m.DDISH_NM.replaceAll("<br/>", "\n").replace(
                        /\((.*)\)/gi,
                        ""
                      )
                    : m.DDISH_NM.replaceAll("<br/>", "\n")
                        .replace(/\((.*)\)/gi, "")
                        .replaceAll("\n", "\t")}
                </S.HomeContainerMealInfoBox>
              </S.HomeContainerMealBox>
            ))}
        </S.MealBox>
      </S.HomeContainer>
      <S.ArrowImage onClick={handleIncreaseDay} src={Right} alt="" width={32} />
    </S.HomeLayouts>
  );
};

export default HomeLayout;
