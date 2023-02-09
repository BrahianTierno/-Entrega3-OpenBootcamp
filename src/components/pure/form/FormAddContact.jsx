import React, { useRef } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import '../../../style/style.css'
import { Contact } from '../../../models/contact.class';


const FormAddContact = ({ addContact }) => {

    const options = [
        {
            value: 'ture',
            label: 'True'
        },
        {
            value: 'false',
            label: 'False'
        }
    ]



    const nameRef = useRef('');
    const numberRef = useRef('');
    const conectedRef = useRef('');

    function sendData(e) {
        e.preventDefault()
        const newContact = new Contact(nameRef.current.value, numberRef.current.value, conectedRef.current.value);
        console.log(conectedRef.current.value);
        addContact(newContact)
    }


    return (
        <div className='div-form'>
            <h3> New Contact</h3>
            <form onSubmit={sendData} className='div-form'>
                <TextField id="outlined-basic" label="Name" variant="outlined" inputRef={nameRef} style={{ marginBottom: '10px' }} />
                <TextField id="outlined-basic" label="Number" variant="outlined" inputRef={numberRef} style={{ marginBottom: '20px' }} />
                <TextField
                    id="outlined-select-state"
                    select
                    label="Select state"
                    inputRef={conectedRef}
                    helperText="Please select your state"  
                    defaultValue={''}          >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Button type='submit' variant="contained" color="success" style={{ marginTop: '15px' }}>
                    Add
                </Button>
            </form>
        </div>
    )
}

export default FormAddContact