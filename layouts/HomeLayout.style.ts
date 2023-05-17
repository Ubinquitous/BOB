import Image from 'next/image'
import styled from 'styled-components'

export const HomeLayouts = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #ffe5fb;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
`

export const ArrowImage = styled(Image)``

export const HomeContainer = styled.div`
	width: 70vw;
	height: 96vh;
	border-radius: 8px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`

export const HomeContainerTitle = styled.span`
	font-weight: 800;
	font-size: 18px;
	color: black;
`

export const HomeContainerMealBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 10px;
`

export const HomeContainerMealTitle = styled.div`
	font-size: 20px;
	font-weight: 800;
	color: pink;
	width: 58vw;
	padding-bottom: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid aliceblue;
`

export const HomeContainerMealInfoBox = styled.div`
	font-size: 16px;
	font-weight: 600;
	line-height: 160%;
	white-space: pre-line;
	text-align: center;
`
