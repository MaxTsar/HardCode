import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/card.scss'

export default function Card({title, className, url}) {
    return (
        <div className='card'>
            <h3 className={`card-title text-upper ${className ? className : ''}`}>{title}</h3>
            <p className='card-desc'>Каждая компонентная система с мощными конструкциями абстракции и композиции сталкивается с проблемой, когда дело.</p>
            <Link to={url} className='card-link'>Подробнее</Link>
        </div>
    )
}