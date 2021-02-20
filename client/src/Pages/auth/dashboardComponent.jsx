import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import userContext from '../../contexts/userContext';


function DashboardComponent(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { userData } = useContext(userContext);
    const history = useHistory();

    useEffect(() => {

        fetch('/users/')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

        // console.log(userData);

        // if(!userData.user) {
        //     history.push('/login');
        // }  else {
        //     setIsLoggedIn(true);
        // }

    }, []);

    return isLoggedIn ? 
        (
            <>
                <h1>Welcome Auth Dashboard</h1>
                <h4>{ userData.user.username }</h4>
                {/* { if(isLoggedIn) (
                    return <button>Logout</button>;
                 ) else (
                    return <button>Login</button>;
                 ) } */}
            </>        
        ) : ( <h1>Welcome Auth Dash</h1> )
}


export default DashboardComponent;