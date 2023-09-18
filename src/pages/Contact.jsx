import React from 'react';
import Instruction from '../components/Instruction'
import Email from '../components/Email'
import Button from '../components/Button'


export default function Contact() {
    // need to make a form here
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [valid, setValid] = React.useState('');
    const [instDisplay, setInstDisplay] = React.useState('');




    return (
        <div>
            <form action=""></form>
        </div>
    )
}