import React, { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext';


function FeedBackItem({ item }) {

    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

    return (
        <Card > 
            <div className='num-display'>{item.rating}</div>
            <button className='close'>
                <FaTimes color="purple" onClick={() => deleteFeedback(item.id)}/>
            </button>
            <button className='edit'>
                <FaEdit color='purple' onClick={() => editFeedback(item)}/>
            </button>
            <div className='text-display'>{item.text}</div> 
        </Card>
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedBackItem