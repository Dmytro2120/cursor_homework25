import { Component } from "react";
import { contacts } from "./Contacts";




export default class Contact extends Component {


    render() {
         return (
                <div>
                    {
                        contacts.map((contact) => (
                            <div key={contact.id} className="contact">
                            <h1>{contact.firstName}</h1>
                            <h2>{contact.lastName}</h2>
                            <h3>{contact.phone}</h3>
                        </div>
                        )
                           
                          )

                    }

               </div>  
            )
        }
    }

