import React, { useContext, useEffect } from 'react'
import Button from './shared/Button'
import {useState} from "react"
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({ setRating }) {

    const [selected, setSelected] = useState(4);

    const { feedbackEdit } = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setSelected(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value);
        setRating(+e.currentTarget.value)
    }

    return (
        <ul className='rating'>
                <li>
                    <input type='radio' id='num1' name='rating'
                    value='1' onChange={handleChange} checked={selected===1}></input>
                    <label htmlFor='num1'>1</label>
                </li>
                <li>
                    <input type='radio' id='num2' name='rating'
                    value='2' onChange={handleChange} checked={selected===2}></input>
                    <label htmlFor='num2'>2</label>
                </li>
                <li>
                    <input type='radio' id='num3' name='rating'
                    value='3' onChange={handleChange} checked={selected===3}></input>
                    <label htmlFor='num3'>3</label>
                </li>
                <li>
                    <input type='radio' id='num4' name='rating'
                    value='4' onChange={handleChange} checked={selected===4}></input>
                    <label htmlFor='num4'>4</label>
                </li>
                <li>
                    <input type='radio' id='num5' name='rating'
                    value='5' onChange={handleChange} checked={selected===5}></input>
                    <label htmlFor='num5'>5</label>
                </li>
        </ul>
    )
}

export default RatingSelect