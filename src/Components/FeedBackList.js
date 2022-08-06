import React, {useContext} from 'react'
import FeedBackItem from './FeedBackItem'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'


function FeedBackList({ }) {
    const {feedback, handleDelete} = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return <p>Nothing to see here</p>
    }
    //     return ( This is without animation
    //     <div className='feedback-list'>
    //         {feedback.map((item) => (
    //             <FeedBackItem key={item.id} item={item} handleDelete={handleDelete}/>
    //         ))}
    //     </div>
    //   )

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div 
                    key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                        <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}


export default FeedBackList