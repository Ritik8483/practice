import React from 'react'
import styles from '../moduleCss/Button.module.css';
import { getClasses } from '../utils/getClasses';

const Button = ({children,variant,type,onClick,disabled}) => {
  return (
    <div>
        <button
         className={getClasses([styles.button,styles[`button--${variant}`]])}
         type={type==='submit'?'submit':'button'}
         onClick={onClick}
         disabled={disabled}
        >
            {children}
        </button>
    </div>
  )
}

export default Button