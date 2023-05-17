import React from 'react'
import * as S from './HomeLayout.style'
import MealType from '@/types/meal.type'
import axios from 'axios'
import { useQuery } from 'react-query'
import getDate from '@/utils/getDate'
import Left from 'assets/left.svg'
import Right from 'assets/right.svg'
import dateParser from '@/utils/dateParser'
import parseDate from '@/utils/parseDate'

const HomeLayout = () => {
	const [date, setDate] = React.useState(getDate())
	const [meal, setMeal] = React.useState<MealType[]>()

	const onAsyncGetMealInfo = async () => {
		return (
			await axios.get(
				`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=94761be062484942bf49541719b7d4ab&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=C10&SD_SCHUL_CODE=7150658&MLSV_YMD=${date}`
			)
		).data
	}

	const { refetch } = useQuery('meal', onAsyncGetMealInfo, {
		onSuccess: (data) => {
			try {
				setMeal(data.mealServiceDietInfo[1].row)
			} catch (err) {
				setMeal(undefined)
			}
		},
		onError: (err) => {
			console.log(err)
		},
	})

	const onClickPlusDate = () => {
		setDate(parseDate({ date, type: 'ADD' }))
	}

	const onClickMinusDate = () => {
		setDate(parseDate({ date, type: 'MINUS' }))
	}

	React.useEffect(() => {
		refetch()
	}, [date, refetch])

	return (
		<S.HomeLayouts>
			<S.ArrowImage onClick={onClickMinusDate} src={Left} alt="" width={32} />
			<S.HomeContainer>
				<S.HomeContainerTitle>{dateParser(date)}</S.HomeContainerTitle>
				{meal &&
					meal.map((m, index) => (
						<S.HomeContainerMealBox key={index}>
							<S.HomeContainerMealTitle>{m.MMEAL_SC_NM}</S.HomeContainerMealTitle>
							<S.HomeContainerMealInfoBox>{m.DDISH_NM.replace(/<br\/>/gi, '\n').replace(/\((.*)\)/gi, '')}</S.HomeContainerMealInfoBox>
						</S.HomeContainerMealBox>
					))}
			</S.HomeContainer>
			<S.ArrowImage onClick={onClickPlusDate} src={Right} alt="" width={32} />
		</S.HomeLayouts>
	)
}

export default HomeLayout
