import React from 'react'
import {NavLink} from 'react-router-dom'
import Container from './Container'

export default function Toolbar() {
	return (
		<Container>
			<nav>
				<h1>HARDCODE</h1>
				<menu>
					<NavLink to="/">Главная</NavLink>
					<NavLink to="/courses">Курсы</NavLink>
					<NavLink to="/courses/scala">Мотивация</NavLink>
				</menu>
			</nav>
		</Container>
	)
}