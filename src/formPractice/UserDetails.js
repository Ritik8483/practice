import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import styles from '../moduleCss/MultiForm.module.css'
import Button from '../components/Button'

const UserDetails = () => {
  return (
    <div>
    {/* <Formik>
        <Form> */}
            <div className={styles.inputText}>
                <p>Name</p>
                <Field type='text' name='name' />
                <p><ErrorMessage name='name' /></p>
            </div>
            <div className={styles.inputText}>
                <p>Phone</p>
                <Field type='number' name='phone' />
                <p><ErrorMessage name='phone' /></p>
            </div>
            <div className={styles.inputText}>
                <p>Email</p>
                <Field type='text' name='email' />
            </div>
            <div className={styles.inputText}>
                <p>Password</p>
                <Field type='password' name='password' />
            </div>
        {/* </Form>
    </Formik> */}
    </div>
  )
}

export default UserDetails