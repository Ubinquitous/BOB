export const getParsedDate = (date: string) => {
  const newDate = new Date(
    `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`
  );
  const weeks = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const nowDate = `${date.substring(0, 4)}년 ${date.substring(
    4,
    6
  )}월 ${date.substring(6, 8)}일 ${weeks[newDate.getDay()]}`;
  return nowDate;
};

export const getNowDate = () => {
  const date = new Date();
  const hour = date.getHours();

  // 저녁까지 다 먹었을 경우, 내일 급식 표출
  if (hour >= 19) {
    date.setDate(date.getDate() + 1);
  }

  const year = JSON.stringify(date.getFullYear());
  const month = JSON.stringify(date.getMonth() + 1).padStart(2, "0");
  const day = JSON.stringify(date.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
};

export const getChangedDate = ({
  date,
  type,
}: {
  date: string;
  type: string;
}) => {
  // 문자열에서 년, 월, 일 정보 추출
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);

  // Date 객체 생성
  const dates = new Date(`${year}-${month}-${day}`);

  // 1일 추가
  if (type === "ADD") dates.setDate(dates.getDate() + 1);
  else dates.setDate(dates.getDate() - 1);

  // 문자열로 변환하여 반환
  return dates.toISOString().slice(0, 10).replace(/-/g, "");
};
