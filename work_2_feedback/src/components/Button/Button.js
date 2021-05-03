import React from 'react'
import PropTypes from "prop-types";
import styles from './Button.module.css'



const FeedbackOptions = ({ onIncrement }) => (
    <>
        <h2 className={styles.title}>Please leave feedback </h2>
        <div className={styles.click}>
        <button className={styles.good} type="button" onClick={onIncrement}name="good">
            Good</button>
        <button  className={styles.neutral} type="button" onClick={onIncrement}name="neutral">
            Neutral</button>
        <button  className={styles.bad}type="button" onClick={onIncrement}name="bad">
            Bad</button>
        </div>
    </>
)
export default FeedbackOptions


FeedbackOptions.prototype = {
    onIncrement: PropTypes.string.isRequired
}