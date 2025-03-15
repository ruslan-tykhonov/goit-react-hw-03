import css from './Contact.module.css';
import { ImUser } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';

export default function Contact({ contact, onDeleteContact }) {
  const { id, name, number } = contact;
  return (
    <li className={css.wrapper}>
      <div className={css.contactInfo}>
        <div className={css.wrapperInfo}>
          <ImUser />
          <p className={css.nameInfo}>{name}</p>
        </div>
        <div className={css.wrapperInfo}>
          <BsFillTelephoneFill />
          <p className={css.phoneInfo}>{number}</p>
        </div>
      </div>

      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}
