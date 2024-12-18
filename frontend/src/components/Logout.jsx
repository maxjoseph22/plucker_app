// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

export function Logout() {
    // const navigate = useNavigate();
    localStorage.clear();
    // const timer = setTimeout(() => navigate('/login'), 2000);
    
    // useEffect(() => {return () => clearTimeout(timer);})

    return (
    <div>
    <h1>You have been logged out</h1>
    <a href="/login">Return to login</a>
    </div>
)
}