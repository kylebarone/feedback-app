import React, { Fragment } from "react"
import { ReactDOM } from "react"
import Header from "./Components/Header";
import FeedBackList from "./Components/FeedBackList";
import FeedBackStats from "./Components/FeedBackStats";
import FeedBackForm from "./Components/FeedBackForm";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from "./Components/AboutIconLink";
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
    
    return (
       <FeedbackProvider>
            <Router>
                <Header text="FeedBack UI" />
                <div className="container">
                    <Routes>
                        <Route path='/' element={
                            <>
                                <FeedBackForm />
                                <FeedBackStats />
                                <FeedBackList />
                                <AboutIconLink />
                            </>
                        } />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>

                </div>
            </ Router>
            </FeedbackProvider>
 
    )
}

export default App;