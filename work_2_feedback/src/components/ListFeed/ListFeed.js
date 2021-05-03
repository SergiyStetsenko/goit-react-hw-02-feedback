import React from 'react'
import PropTypes from "prop-types";
import styles from './ListFeed.module.css';

const ListBack = ({good, neutral, bad,total,positivePercentage}) => (
  <div>
    <h2 className = {styles.title}>Statistics</h2>
    <ul className = {styles.list}>
    <li>Good:{good}</li>
    <li>Neutral:{neutral}</li>
    <li>Bad:{bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage}%</li>
    </ul>
    </div>
)
export default ListBack

ListBack.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  
}