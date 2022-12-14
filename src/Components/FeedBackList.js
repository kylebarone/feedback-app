import React, { useContext } from 'react'
import FeedBackItem from './FeedBackItem'
import Card from './shared/Card'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'


function FeedBackList({ }) {
    const { feedback, isLoading } = useContext(FeedbackContext);

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>Nothing to see here</p>
    }
    //     return ( This is without animation
    //     <div className='feedback-list'>
    //         {feedback.map((item) => (
    //             <FeedBackItem key={item.id} item={item} handleDelete={handleDelete}/>
    //         ))}
    //     </div>
    //   )
    return isLoading ? (<Spinner />) : (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <FeedBackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}


export default FeedBackList