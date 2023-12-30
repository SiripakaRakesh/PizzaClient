import React from "react";
import { Link } from "react-router-dom";


const UserWelcome = () => {
    const auth = localStorage.getItem('user');
    const user = JSON.parse(auth);

    return (
        <React.Fragment>
            <div className="greet" style={greet}>
                <div style={{ textAlign: 'center' }}>Welcome {user.name}</div>
                <img style={{ height: '270px', width: '270px' }}
                    src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1NzU5NzF8&ixlib=rb-4.0.3&q=85"
                    alt="logo"
                />
                <Link to='/' style={link}>Take me Home</Link>
            </div>
        </React.Fragment>
    )
}

export default UserWelcome;


const greet = {
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    gap:'20px'
}

const link = {
    backgroundColor:'#27ae60',
    color: '#fff',
    padding:'7px 15px',
    textDecoration: 'none'
}