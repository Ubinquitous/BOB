const getDate = () => {
	const date = new Date()
	const year = JSON.stringify(date.getFullYear())
	const month = JSON.stringify(date.getMonth() + 1).padStart(2, '0')
	const day = JSON.stringify(date.getDate()).padStart(2, '0')

	return `${year}${month}${day}`
}

export default getDate
