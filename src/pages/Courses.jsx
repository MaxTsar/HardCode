import React from 'react'
import PageTitle from '../components/PageTitle'
import '../styles/main.scss'
import Container from '../components/Container'
import Card from '../components/Card'
// Mock data
import CoursesList from '../mockCourses'

export default class Courses extends React.Component {
	render() {
		return (
			<section>
				<PageTitle />
				<Container>
					<section className='cards-wrap'>
						{
							CoursesList.map((item, i) => {
								return <Card 
													key={i} 
													title={item.title} 
													className={item.color}
													url={item.url} />
							})	
						}
					</section>
				</Container>
			</section>
		)
	}
}