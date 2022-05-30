import React from 'react'
import styles from '../moduleCss/MultiForm.module.css'

const SignupInfo = ({inputEvent,inputValue}) => {
  return (
    <div>
        {/* <div className={styles.container}>
            <div className={styles.card}> */}
                <div className={styles.inputText}>
                    <input type='text' name='name' value={inputValue.name} onChange={inputEvent} placeholder='Enter your name' />
                    <input type='text' name='email' value={inputValue.email} onChange={inputEvent} placeholder='Enter your email' />
                    <input type='password' name='password' value={inputValue.password} onChange={inputEvent} placeholder='Enter your password' />
                </div>
            {/* </div>
        </div> */}
    </div>
  )
}

export default SignupInfo