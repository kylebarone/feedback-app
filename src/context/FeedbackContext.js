import React from 'react'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext =  createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback]  = useState([
        {
            id:1,
            text:"This is feedback item 1",
            rating: 5
        }, 
        {
            id:2,
            text:"This is feedback item 2",
            rating: 4
        }
    ])

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)))
    }

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter(feed => feed.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        console.log(uuidv4())
        newFeedback.id = uuidv4()
        setFeedback([...feedback, newFeedback])
    }

    const value = {
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback, 
        editFeedback,
        updateFeedback
    }

    return <FeedbackContext.Provider value={value}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
