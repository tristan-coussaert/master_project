import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [error, setError] = useState(null)
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
        } catch (err) {
            setError(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Connexion</h2>
                <input type="email" name="email" required
                placeholder="Adresse mail" value={user.email} onChange={onChangeInput} autoComplete="off" />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Mot de passe" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Connexion</button>
                    <Link to="/register">S'inscrire</Link>
                </div>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Login
