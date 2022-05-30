import React from 'react'
import styles from '../moduleCss/MultiForm.module.css'

const OtherInfo = ({inputEvent,inputValue}) => {
  return (
    <div>
        <div className={styles.inputText}>
            <input type='text' name='schoolName' value={inputValue.schoolName} onChange={inputEvent} placeholder='Enter your School Name' />
            <input type='text' name='collegeName' value={inputValue.collegeName} onChange={inputEvent} placeholder='Enter your College Name' />
        </div>
    </div>
  )
}

export default OtherInfo;