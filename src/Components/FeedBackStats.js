import React,  {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats({ }) {
    const {feedback} = useContext(FeedbackContext);
    
    let avg = feedback.reduce((accum, curr) => {
        return (curr.rating+accum)}, 0) / feedback.length
    avg = avg.toFixed(1)

    return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4> Average Rating {isNaN(avg) ? 0:avg}</h4>
    </div>
  )
}


export default FeedbackStats