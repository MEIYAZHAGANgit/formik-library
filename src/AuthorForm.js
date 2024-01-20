import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      birthDate: '',
      biography: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      birthDate: Yup.date().required('Birth Date is required'),
      biography: Yup.string().required('Biography is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" {...formik.getFieldProps('name')} />
        {formik.touched.name && formik.errors.name && (
          <div>{formik.errors.name}</div>
        )}
      </div>
      <div>
        <label>Birth Date:</label>
        <input type="date" {...formik.getFieldProps('birthDate')} />
        {formik.touched.birthDate && formik.errors.birthDate && (
          <div>{formik.errors.birthDate}</div>
        )}
      </div>
      <div>
        <label>Biography:</label>
        <textarea {...formik.getFieldProps('biography')} />
        {formik.touched.biography && formik.errors.biography && (
          <div>{formik.errors.biography}</div>
        )}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AuthorForm;
