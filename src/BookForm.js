import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
      publicationDate: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      author: Yup.string().required('Author is required'),
      isbn: Yup.string().required('ISBN is required'),
      publicationDate: Yup.date().required('Publication Date is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" {...formik.getFieldProps('title')} />
        {formik.touched.title && formik.errors.title && (
          <div>{formik.errors.title}</div>
        )}
      </div>
      <div>
        <label>Author:</label>
        <input type="text" {...formik.getFieldProps('author')} />
        {formik.touched.author && formik.errors.author && (
          <div>{formik.errors.author}</div>
        )}
      </div>
      <div>
        <label>ISBN:</label>
        <input type="text" {...formik.getFieldProps('isbn')} />
        {formik.touched.isbn && formik.errors.isbn && (
          <div>{formik.errors.isbn}</div>
        )}
      </div>
      <div>
        <label>Publication Date:</label>
        <input type="date" {...formik.getFieldProps('publicationDate')} />
        {formik.touched.publicationDate && formik.errors.publicationDate && (
          <div>{formik.errors.publicationDate}</div>
        )}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BookForm;
