import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/ko";

dayjs.extend(customParseFormat).locale("ko");

const useDate = () => {
  const date = new Date();

  const getParseDate = (date: string) => {
    const newDate = dayjs(date, { format: "YYYYMMDD" });
    return `${newDate.format("YYYY년 MM월 DD일")} ${newDate.format("dddd")}`;
  };

  const getCurrentDate = (): string => {
    const date = dayjs();
    if (date.hour() >= 19) date.add(1, "day");

    return date.format("YYYYMMDD");
  };

  const getDayOfWeek = (date: string) => {
    return dayjs(date, "YYMMDD").locale("ko").format("dddd");
  };

  const setDay = (day: number, date: string) => {
    const dateObj = dayjs(date, { format: "YYYYMMDD" });
    return dateObj.add(day, "day").format("YYYYMMDD");
  };

  return {
    getParseDate,
    getCurrentDate,
    getDayOfWeek,
    setDay,
    ...date,
  };
};

export default useDate;
