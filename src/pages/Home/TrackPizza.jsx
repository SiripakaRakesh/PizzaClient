import React from 'react'
import '../../Styles/Home.css';
import { Link } from 'react-router-dom';
import {FaCaretRight} from 'react-icons/fa'

const TrackPizza = () => {
    return (
        <div className='track-pizza'>
            <div className="left">
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1NjkyNTd8&ixlib=rb-4.0.3&q=85" alt="" />
            </div>
            <div className="line"></div>
            <div className="right">
                <div className="right-item">
                    <h3>Custom Pizza Builder</h3>
                    <p>Create your own unique pizza with with custom pizza builder. Choose from a variety of toppings, sauces, and crust option to satisfy your cravings.</p>
                </div>
                <div className="right-item">
                    <h3>Real Time Tracking</h3>
                    <p>Track the progress of your pizza delivery in real-time. Know exactly when your pizza will arrive at your doorstep.</p>
                </div>
                <div className="right-item">
                    <h3>Fast Delivery Option</h3>
                    <p>We offer fast delivery options to ensure that your pizza reaches you hot and fresh. Enjoy the convenience of getting your favorite pizza delivered to your door.</p>
                </div>
                <div className="links">
                    <Link to='/user/pizza-list'>Go Book Now</Link>
                    <Link to='/custom-pizza'>More Services <FaCaretRight/></Link>
                </div>
            </div>
        </div>
    )
}

export default TrackPizza