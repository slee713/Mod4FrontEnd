import React from 'react'
import './Account.css'
import {useState, useEffect} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import EditUser from './EditUser'

const Account = props => {

    const [username, setUsername] = React.useState('')
    const [first_name, setFirstName] = React.useState('')
    const [last_name, setLastName] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [email, setEmail] = React.useState('')

    useEffect(()=> {
        let configObj = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        }
        fetch(props.baseUrl+'users/user', configObj)
        .then(res => res.json())
        .then(user => {
            setUsername(user.username)
            setFirstName(user.first_name)
            setLastName(user.last_name)
            setAddress(user.address)
            setEmail(user.email)
        })
    }, [])

    const deleteAccount = () => {
        fetch(props.baseUrl+'users/user', {method: 'DELETE', headers: {Authorization: `Bearer ${localStorage.token}`}})
        .then( () => {
            localStorage.clear()
            alert('Account successfully deleted')
            props.history.push("/")
            props.status()
        })
    }

    return(
        <div className='account-div'>
            <h1>Account Page</h1>
            <h3>Username: {username}</h3>
            <h3>First Name: {first_name}</h3>
            <h3>Last Name: {last_name}</h3>
            <h3>Email: {email}</h3>
            <h3>Address: {address}</h3>
            <EditUser 
             username={username} setUsername={setUsername}
             first_name={first_name} setFirstName={setFirstName}
             last_name={last_name} setLastName={setLastName}
             address={address} setAddress={setAddress}
             email={email} setEmail={setEmail}
             />
             <Button onClick={() => deleteAccount()}>Delete Account</Button>
        </div>
    )
}

export default Account
