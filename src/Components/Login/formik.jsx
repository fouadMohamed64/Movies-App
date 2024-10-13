
import React from 'react';
import { Formik } from 'formik';

export function FormikForm(){

    return (
        <div>
            <h1 className="w-50 mx-auto mt-5">Register Here</h1>
            <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit} className="w-50 mx-auto mt-5">
                    <label>first name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label>Last name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <label>email</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <label>password</label>
                    <input
                    className="form-control"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <label>your complain</label>
                    <input
                    className="form-control"
                        type="text"
                        name="complain"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting} className='btn btn-info'>
                        Submit
                    </button>
                </form>
            )}
            </Formik>
        </div>
    )
}