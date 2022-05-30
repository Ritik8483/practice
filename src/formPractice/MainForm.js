import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import Button from '../components/Button'
import styles from '../moduleCss/MultiForm.module.css'
import CollegeDetails from './CollegeDetails'
import SchoolDetails from './SchoolDetails'
import UserDetails from './UserDetails'
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom'

const MainForm = () => {
    const[pageNo,setPageNo]=useState(0);
    const formTitle=['User Details','School Details','College Details'];
const navigate = useNavigate()

    const formikInitialValues={
        name:'',
        phone:'',
        email:'',
        password:'',
        schoolName:'',
        schoolRoll:'',
        schoolPercentage:'',
        collegeName:'',
        collegeRoll:'',
        collegePercentage:'',
    }
    const handleSubmit=(values)=>{
        console.log('Form VAlues',values);
        if(pageNo===formTitle.length-1){
            navigate('/')
        }  
        else{
            setPageNo(pageNo+1)
        }
    }
    const formikValidateForm=yup.object().shape({
        name:yup.string().required('Name is required'),
        phone:yup.string().min(10,).required('Phone number is required')
    })
    
    const pageNumber=()=>{
        if(pageNo===0){
            return <UserDetails/>
        }
        else if(pageNo===1){
            return <SchoolDetails/>
        }
        else{
            return <CollegeDetails/>
        }
    }
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.card}>
                <Formik initialValues={formikInitialValues}
                        onSubmit={handleSubmit}
                        validationSchema={formikValidateForm} >
                            {props => {
                            const {
                                values,
                                touched,
                                errors,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                handleSubmit
                            } = props;
    return <Form>
    <h1 className={styles.headings}>{formTitle[pageNo]}</h1>    {/*Main Header Part*/}
    {pageNumber()}                                            {/*Form Bodies*/}
    <div className={styles.btn}>                         {/*Buttons*/}
        <Button
        disabled={pageNo===0}
        type='button' 
        onClick={()=>setPageNo(pageNo-1)}
        variant='secondary'>Previous</Button>

        <Button
        onClick={handleSubmit}
        type={pageNo===formTitle.length-1 ? 'submit' : 'button'} 
        variant='primary'>
        {pageNo===formTitle.length-1 ? 'Submit' : 'Next'}
        </Button>
    </div>
    </Form>
      }}
                 
                </Formik>        
            </div>
        </div>
    </div>
  )
}

export default MainForm