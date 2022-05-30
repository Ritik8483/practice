import { Field } from 'formik'
import React from 'react'
import styles from '../moduleCss/MultiForm.module.css'


const CollegeDetails = () => {
  return (
    <div>
    {/* <Formik>
        <Form> */}
            <div className={styles.inputText}>
                <p>College Name</p>
                <Field type='text' name='collegeName' />
            </div>
            <div className={styles.inputText}>
                <p>College Roll no.</p>
                <Field type='number' name='collegeRoll' />
            </div>
            <div className={styles.inputText}>
                <p>College Percentage</p>
                <Field type='number' name='collegePercentage' />
            </div>
        {/* </Form>
    </Formik> */}
    </div>
  )
}

export default CollegeDetails