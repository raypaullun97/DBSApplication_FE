import { Container, Table } from "react-bootstrap"
import React from "react";
import { auth } from "../firebase-config";
import { Form, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://192.168.43.181:5000";

const AccountDetails = () => {
    const [details, setDetails] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        const fetchDetails = async () => {
            let response = await axios.get(BASE_URL + "/account/user_details/1")
            console.log(response.data)
            setAddress(response.data.address)
            setEmail(response.data.email)

            
        }
        fetchDetails()
    })

    const submitAddress = async () => {
        let response = await axios.post((BASE_URL + "/account/update_details") , {
            userID : 1,
            address : address,
            email : email
        })

        alert("Details submitted")
        console.log('submitted new details')
    }



    let handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    let handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    

    

    return (
        <React.Fragment>
            <div>

            </div>
            <Container>
                <h1>Account Details</h1>
            </Container>
              
            <Container>
            <input 
                type='text'
                placeholder="Address"
                value = {address}
                onChange = {handleAddressChange}
                className = "m-1"
                />
                <input 
                type='text'
                placeholder="Email"
                value = {email}
                onChange = {handleEmailChange}
                className = "m-1"
                />
                <button className = "m-1"
                onClick = {submitAddress}
                >
                    Submit
                </button>
            </Container>
        </React.Fragment>
    )
}

export default AccountDetails