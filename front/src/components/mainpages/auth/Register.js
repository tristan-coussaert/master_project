import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Inscription</h2>
                <input type="text" name="name" required
                placeholder="Nom" value={user.name} onChange={onChangeInput} autoComplete="off" />

                <input type="email" name="email" required
                placeholder="Adresse mail" value={user.email} onChange={onChangeInput} autoComplete="off" />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Mot de passe" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">S'inscrire</button>
                    <Link to="/login">Connexion</Link>
                </div>
            </form>
        </div>
    )
}

export default Register