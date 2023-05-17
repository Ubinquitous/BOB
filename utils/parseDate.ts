const parseDate = ({ date, type }: { date: string; type: string }) => {
	// 문자열에서 년, 월, 일 정보 추출
	const year = date.slice(0, 4)
	const month = date.slice(4, 6)
	const day = date.slice(6, 8)

	// Date 객체 생성
	const dates = new Date(`${year}-${month}-${day}`)

	// 1일 추가
	if (type === 'ADD') dates.setDate(dates.getDate() + 1)
	else dates.setDate(dates.getDate() - 1)

	// 문자열로 변환하여 반환
	return dates.toISOString().slice(0, 10).replace(/-/g, '')
}

export default parseDate
