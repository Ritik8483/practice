import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { object } from 'yup';
import styles from '../moduleCss/Modal.module.css';
import formik_style from '../moduleCss/Student.module.css';
import Button from './Button';
import * as yup from 'yup';
import { FaRegWindowClose } from "react-icons/fa";


const Modal = ({modal,setModal}) => {
    
    const initailFormikvalues={
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        confirm:''
    }
    const submitForm=()=>{
        console.log('Form Submitted');
    }
    const validate=yup.object().shape({
        first_name:yup.string().required('First name is required'),
        last_name:yup.string().required('Last name is required'),
        email:yup.string().required('E-mail is required'),
        password:yup.string().min(8,).required('Password is required'),
        confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password')
    })
  return (
      <>
    {modal && 
    <div className={styles.modal}>
        <div className={styles.modal_box}>
            <h2>Signup</h2>
            <FaRegWindowClose onClick={()=>setModal(false)} className={styles.icon}/>
            <Formik initialValues={initailFormikvalues} onSubmit={submitForm} validationSchema={validate}>
                <Form>
                    <div className={formik_style.input_box}>
                        <Field type='text' name='first_name' placeholder='Enter your first name'/>
                        <p className={formik_style.err_msg}><ErrorMessage name='first_name' /></p>
                    </div>
                    <div className={formik_style.input_box}>
                        <Field type='text' name='last_name' placeholder='Enter your last name'/>
                        <p className={formik_style.err_msg}><ErrorMessage name='last_name' /></p>
                    </div>
                    <div className={formik_style.input_box}>
                        <Field type='text' name='email' placeholder='Enter your email'/>
                        <p className={formik_style.err_msg}><ErrorMessage name='email' /></p>
                    </div>
                    <div className={formik_style.input_box}>
                        <Field type='password' name='password' placeholder='Enter your password'/>
                        <p className={formik_style.err_msg}><ErrorMessage name='password' /></p>
                    </div>
                    <div className={formik_style.input_box}>
                        <Field type='password' name='confirm' placeholder='Confirm password'/>
                        <p className={formik_style.err_msg}><ErrorMessage name='confirm' /></p>
                    </div>
                    <div className={styles.modalBtn}>
                        <Button variant='primary' type='submit'>Signup</Button>
                        <Button variant='secondary' type='button' onClick={()=>setModal(false)}>Cancel</Button>
                    </div>
                </Form>
            </Formik>

        </div>
        
    </div>
    }
    </>
  )
}

export default Modal