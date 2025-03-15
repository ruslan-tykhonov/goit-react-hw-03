import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contactsData, onDeleteContact }) {
  return (
    <div>
      <ul className={css.wrapper}>
        {contactsData.map(contact => (
          <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
        ))}
      </ul>
    </div>
  );
}
