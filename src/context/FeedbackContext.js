import React from 'react'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext =  createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback]  = useState([
        {
            id:1,
            text:"this isfrom  content",
            rating:10
        }
    ])

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
        deleteFeedback,
        addFeedback
    }

    return <FeedbackContext.Provider value={value}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
