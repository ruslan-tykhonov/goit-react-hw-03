import css from './ContactForm.module.css';

import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function ContactForm({ contactValue, handleSubmit, FeedbackSchema }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  return (
    <Formik initialValues={contactValue} validationSchema={FeedbackSchema} onSubmit={handleSubmit} >
      <Form className={css.form}>
        <label className={css.inputName} htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
        />
        <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '12px' }} />

        <label className={css.inputName} htmlFor={phoneFieldId}>Number</label>
        <Field
          type="text"
          name="number"
          id={phoneFieldId}
        />
        <ErrorMessage name="number" component="div" style={{ color: 'red', fontSize: '12px' }} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
