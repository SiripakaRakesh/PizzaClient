import React from 'react'
import '../../Styles/Home.css'

const PizzaDisplay = () => {
  return (
    <div className='pizza-container'>
        <div className="left">
            <h2>Experience the freshest and most delicious pizza delivered right to your doorstep.</h2>
            <p>Our pizza delivery services is known for using the highest quality ingredients and ensuring speedy delivery to guarantee tour satisfaction.</p>
        </div>
        <div className="right">
            <img src='https://images.unsplash.com/photo-1567349077939-101215abd8ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1Njc4MjR8&ixlib=rb-4.0.3&q=85' alt="" />
        </div>
    </div>
  )
}

export default PizzaDisplay