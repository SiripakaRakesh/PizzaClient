import React from 'react'
import '../../Styles/Home.css';
import { Link } from 'react-router-dom';

const PizzaFlex = () => {
    const components = [
        {
            image:'https://images.unsplash.com/photo-1590133728822-cc311f9c280f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1NjQxNjV8&ixlib=rb-4.0.3&q=85',
            title:'Ordering Pizza Made Easy',
            description:'Follow these simple steps to order delicious pizza using our app or website.',
            link:'/user/pizza-list',
            linkText:'Go Get One'
        },
        {
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1NjQxNjV8&ixlib=rb-4.0.3&q=85',
            title: 'Customize Your Pizza',
            description:'Choose your favorite toppings, crust, and size to create your perfect pizza.',
            link:'/custom-pizza',
            linkText:'Customize Your Pizza'
        },
        {
            image:'https://images.unsplash.com/photo-1631005551863-8168afd249e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1NjQ5Mzh8&ixlib=rb-4.0.3&q=85',
            title:'Secure Online Payment',
            description:'Pay for your securely using our trusted payment options.',
            link:'/user/pizza-list',
            linkText:'Shop and Pay'
        }
    ];
  return (
    <div className='container'>
        <div className="flex-list">
            {components.map((component, index) => (
                <div className="box" key={index}>
                    <img src={component.image} alt="" />
                    <h3>{component.title}</h3>
                    <p>{component.description}</p>
                    <Link to={component.link}>{component.linkText}</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PizzaFlex