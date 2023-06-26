export default function ContactList({selectedContact, contacts, onselect}) {
    return(
        <section className="contact-list">
            <ul>
                {contacts.map(contact => 
                <li key={contact.id}>
                    <button onClick={() => {
                        onselect(contact);
                    }}>
                     {contact.name}
                    </button>
                </li>)}
            </ul>
        </section>
    );
}