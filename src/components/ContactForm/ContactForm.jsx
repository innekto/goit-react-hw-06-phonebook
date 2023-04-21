import { Formik } from 'formik';
import * as Yup from 'yup';
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

const submitSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'",
    })
    .required('Name is required'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(20, 'Too Long!')
    .matches(
      /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      }
    )
    .required('Phone number is required'),
});

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
        <Error name="number" component="div" />

        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Please enter Name"
          required
        />
        <Error name="name" component="div" />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormWrapp>
    </Formik>
  );
};
