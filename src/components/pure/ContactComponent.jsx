import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import CachedIcon from '@mui/icons-material/Cached';
import '../../style/style.css'


const ContactComponent = ({ contact, remove, changeSata }) => {
    return (
        
            <TableRow                
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" align="center"> {contact.name}</TableCell>
                <TableCell align="center">{contact.number}</TableCell>
                <TableCell align="center">{contact.conected ? 'True' : 'False'} <i className='delete' onClick={() => {changeSata(contact)}}> <CachedIcon/> </i></TableCell>          
                <TableCell align="center"><i className='delete' onClick={() =>{remove(contact)}}><DeleteIcon/></i></TableCell>   
                   
            </TableRow>
        
    )
}

export default ContactComponent