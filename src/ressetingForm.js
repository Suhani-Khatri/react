import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./contactList";

export default function Messengers() {
    const[to, setTo] = useState(contacts[0]);

    return(
        <div>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onselect={contact => setTo(contact)} 
            />
            <Chat key={to.id}  contact={to} />
        </div>
    );
}

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
  ];