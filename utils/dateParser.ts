const dateParser = (date: string) => {
	const newdate = new Date(`${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`)
	const weeks = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
	console.log(newdate.getDay())
	return `${date.substring(0, 4)}년 ${date.substring(4, 6)}월 ${date.substring(6, 8)}일 ${weeks[newdate.getDay()]}`
}

export default dateParser
