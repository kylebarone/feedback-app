import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'


function FeedBackItem({ item, handleDelete }) {

    const handleClick = (id) => {
        console.log(id)
    }

    return (
        <Card > 
            <div className='num-display'>{item.rating}</div>
            <button className='close'>
                <FaTimes color="purple" onClick={() => handleDelete(item.id)}/>
            </button>
            <div className='text-display'>{item.text}</div> 
        </Card>
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedBackItem