import React, { useState } from 'react'
import styles from '../moduleCss/MultiForm.module.css'
import SignupInfo from '../multiform/SignupInfo';
import PersonalInfo from '../multiform/PersonalInfo';
import OtherInfo from '../multiform/OtherInfo'
const MultiForm = () => {

  const[page,setPage]=useState(0);
  const FormTitles=['Sign up','Personal Info','Other Details'];
  const[inputValue,setInputValue]=useState({
    name:'',
    email:'',
    password:'',
    fatherName:'',
    age:'',
    gender:'',
    schoolName:'',
    collegeName:''
  })

  const inputEvent=(e)=>{
    const name = e.target.name;
    const value=e.target.value;
    setInputValue((lastValue)=>{
      return{
        ...lastValue,
        [name]:value
      }
    })

  }

  const pageDisplay=()=>{
    if(page===0){
      return <SignupInfo inputValue={inputValue} inputEvent={inputEvent}/>
    }
    else if(page===1){
      return <PersonalInfo inputValue={inputValue} inputEvent={inputEvent}/>
    }
    else{
      return <OtherInfo inputValue={inputValue} inputEvent={inputEvent}/>
    }
  }

  return (
    <div>
        <div className={styles.container}>
            <div className={styles.header}></div>
            <div className={styles.body}>
              {pageDisplay()}
            </div>
            <div className={styles.footer}>
              <button
                disabled={page==0}
                onClick={()=>setPage((page)=>page-1)}>Previous
              </button>
              <button
                onClick={()=>{
                  if(page === FormTitles.length-1){
                    alert('Form Submitted')
                  }
                  else{
                    setPage((page)=>page+1)
                  }
                }}
                >
                  {page === FormTitles.length-1 ? 'Submit' : 'Next'}
              </button>
            </div>
        </div>
    </div>
  )
}

export default MultiForm