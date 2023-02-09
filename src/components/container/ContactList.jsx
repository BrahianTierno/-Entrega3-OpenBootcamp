import { useState } from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/ContactComponent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormAddContact from '../pure/form/FormAddContact';
import '../../style/style.css'

const ContactList = () => {

    //Instancio un par de contactos
    const defaultContact1 = new Contact('Brahian', '09186340', false);
    const defaultContact2 = new Contact('Pedro', '4324324', true);

    //Creo el estado
    const [contacts, setContacts] = useState([defaultContact1, defaultContact2])

    /**
     * Funcion de eliminar
     */
    
    function deleteContact(contact) {
    //Encontar en que indice del estado se encuentra la atera que quiero borrar
    const index = contacts.indexOf(contact);
    //Cargo todo el estado en una variable temporal
    const tempContact = Object.values(contacts);
    //Elimino el registro de la variable temporal
    tempContact.splice(index,1);    
    //Asigno la variable tempral al estado
    setContacts(tempContact);       
    }

    //Funcion agregar contacto
    function addContact(contact) {
    
     const tempContact = Object.values(contacts)
     tempContact.push(contact)
     setContacts(tempContact)
        
    }

    function changeState(contact) {
    
     const index = contacts.indexOf(contact);
     const tempContact = Object.values(contacts);        
     tempContact[index].conected = !  tempContact[index].conected;     
     setContacts(Object.values(tempContact));
    }


    return (
        <div>
            <h1> Your contacts </h1>            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" >Name</TableCell>
                            <TableCell align="center">Number</TableCell>
                            <TableCell align="center">State</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                       {contacts.map((contact,index) => {
                        return <ContactComponent key={index} contact={contact} remove={deleteContact} changeSata={changeState}></ContactComponent>
                       })}
                    </TableBody>
                </Table>
            </TableContainer>
            <FormAddContact addContact={addContact}></FormAddContact>            
        </div>
    )
}


export default ContactList