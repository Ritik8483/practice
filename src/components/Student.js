import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import styles from '../moduleCss/Student.module.css'
import Button from './Button'
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import toast from 'react-hot-toast';
import { FaEyeSlash,FaEye } from "react-icons/fa";

const Student = () => {
    const[modal,setModal]=useState(false);
    const[slashEye,setSlashEye]=useState(true);

    const eye=()=>{
        setSlashEye(!slashEye);
    }

    const navigate = useNavigate();
    const initialValues={
        name:'',
        email:'',
        password:'',
        phone:'',
    }
    const submitForm=()=>{
        toast.success('Form Submiited');
        navigate('/home');              
    }
    const ValidateForm=yup.object().shape({
        name:yup.string().required('Required'),
        email: yup.string().email('Invalid email').required('Required'),
        password: yup.string().min(8,).required('Required'),
        phone:yup.string().min(10,).required('Required')
    })
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 style={{textAlign:'center',color:'red'}}>Hi this is Student Component</h1>
                <Formik initialValues={initialValues}
                onSubmit={submitForm}
                validationSchema={ValidateForm}>
                    <Form>
                        <div className={styles.input_box}>
                            <p>Name</p>
                            <Field name='name' type='text' />
                            <p className={styles.err_msg}><ErrorMessage name='name' /></p>
                        </div>
                        <div className={styles.input_box}>
                            <p>Email</p>
                            <Field name='email' type='text' />
                            <p className={styles.err_msg}><ErrorMessage name='email' /></p>
                        </div>
                        <div className={styles.input_box}>
                            <p>Password</p>
                            <Field name='password' type={(slashEye===true?'password':'text')} />
                            <p className={styles.err_msg}><ErrorMessage name='password' /></p>
                            <div className={styles.eyeslash}>
                                {
                                    (slashEye===true) ? <FaEyeSlash onClick={eye}/> : <FaEye onClick={eye}/> 
                                }
                            </div>
                        </div>
                        <div className={styles.input_box}>
                            <p>Phone</p>
                            <Field name='phone' type='number' />
                            <p className={styles.err_msg}><ErrorMessage name='phone' /></p>
                        </div>
                        <div className={styles.btn_sep}>
                            <Button type='button' variant='secondary' onClick={()=>setModal(true)}>Signup</Button>
                            <Button type='submit' variant='primary'>Submit Form</Button>
                        </div>
                        
                    </Form>
                </Formik>
                
            </div>
        </div>
        <Modal modal={modal} setModal={setModal} />
    </div>
  )
}

export default Student