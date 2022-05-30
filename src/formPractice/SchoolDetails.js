import { Field } from 'formik'
import React from 'react'
import styles from '../moduleCss/MultiForm.module.css'


const SchoolDetails = () => {
  return (
    <div>
    {/* <Formik>
        <Form> */}
            <div className={styles.inputText}>
                <p>School Name</p>
                <Field type='text' name='schoolName' />
            </div>
            <div className={styles.inputText}>
                <p>School Roll no.</p>
                <Field type='number' name='schoolRoll' />
            </div>
            <div className={styles.inputText}>
                <p>School Percentage</p>
                <Field type='number' name='schoolPercentage' />
            </div>
        {/* </Form>
    </Formik> */}
    </div>
  )
}

export default SchoolDetails