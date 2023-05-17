import HomeLayout from '@/layouts/HomeLayout'
import MealType from '@/types/meal.type'
import React from 'react'

interface HomePropsType {
	meal: MealType[]
}

const Home = () => {
	return <HomeLayout />
}

export default Home
