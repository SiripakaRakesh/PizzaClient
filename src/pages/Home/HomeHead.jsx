import React from 'react'
import Typewriter from 'typewriter-effect';
import '../../Styles/Home.css';
import { Link } from 'react-router-dom';

const HomeHead = () => {
    return (
        <div className='container'>
            <div className="container-header">
                <div className="container-header-overlay">
                    <h1>
                        <Typewriter options={{
                            strings: [
                                "Delicious Pizza Delivered Right to Your Doorstep",
                                "This is a Pizza Delivery Application",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                        <Link to='/signup'>Sign Up</Link>
                    </h1>
                    <div className="images">
                        <img src="https://images.unsplash.com/photo-1626078262114-d7b36d3e5e4a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1NjIxOTF8&ixlib=rb-4.0.3&q=85" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHead