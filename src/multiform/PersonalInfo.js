import React from 'react'
import styles from '../moduleCss/MultiForm.module.css'


const PersonalInfo = ({inputEvent,inputValue}) => {
  return (
    <div>
        <div className={styles.inputText}> 
            <input type='text'name='fatherName' value={inputValue.fatherName} onChange={inputEvent} placeholder='Enter your Father Name' />
            <input type='number' name='age' value={inputValue.age} onChange={inputEvent} placeholder='Enter your Age' />
            <input type='text' name='gender' value={inputValue.gender} onChange={inputEvent} placeholder='Enter your gender' />
        </div>
    </div>
  )
}

export default PersonalInfo