import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../moduleCss/AddToCart.module.css';
import { decreaseValue, increaseValue } from '../slices/IncDecSlice';
import Button from './Button';


const AddtoCart = () => {
    const dispatch=useDispatch();
    const valued=useSelector((state)=>state.addToCart.count);
  return (
    <div>
        <h1>Add to cart</h1>
        <div className={styles.cart}>
            <Button type='button' variant='secondary'
             onClick={()=>dispatch(decreaseValue(2))}>Decrease</Button>
            <input type='number' readOnly value={valued} 
            style={{textAlign:'center',marginTop:'20px'}}/>
            <Button type='button' variant='primary' 
            onClick={()=>dispatch(increaseValue())}>Increase</Button>
        </div>
    </div>
  )
}

export default AddtoCart