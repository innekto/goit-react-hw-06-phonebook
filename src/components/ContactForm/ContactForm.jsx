import { Formik } from 'formik';

import {
  FormWrapp,
  Input,
  Error,
  Label,
  SubmitButton,
} from 'components/ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContactsValue } from 'redux/phonebookSlice';
import { nanoid } from 'nanoid';
import { submitSchema } from 'Utils/submitSchema';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContactsValue);

  const handleSubmit = (values, { resetForm }) => {
    resetForm();

    const { name, number } = values;

    const contact = {
      name,
      number,
    };

    const dublicateContact = findDublicateContact(contact, contacts);

    dublicateContact
      ? alert(`${contact.name} is already in contacts`)
      : dispatch(addContact({ ...values, id: nanoid() }));
  };

  const findDublicateContact = (contact, contactsList) => {
    return contactsList.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={submitSchema}
    >
      <FormWrapp autoComplete="off">
        <Label htmlFor="number">Number</Label>
        <Input
          type="tel"
          name="number"
          placeholder="Please enter Number"
          required
        />
        <Error name="number" component="p" />

        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Please enter Name"
          required
        />
        <Error name="name" component="p" />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormWrapp>
    </Formik>
  );
};
