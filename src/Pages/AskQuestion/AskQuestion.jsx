import React from 'react'
import './AskQuestion.css'
const AskQuestion = () => {
  return (
    <div className='ask-question'>
        <div className="ask-question-container">
            <h1>Ask a public question</h1>
            <form>
                <div className="ask-form-container">
            <label htmlFor='ask-ques-title'>
                 <h4>Title</h4>
                 <p>Be specific and imagine you are asking a question to another person </p>
                 <input type="text" name='ask-question-title' id='ask-question-title' placeholder='e.g. kuch likh mc'/>
            </label>
            <label htmlFor='ask-ques-body'>
                 <h4>Body</h4>
                 <p>Include all the information someone would need to answer your question</p>
                 <textarea  id='ask-question-body' cols="100" rows="10"  placeholder='question likhna bro...'/>
            </label>
            <label htmlFor='ask-ques-tags'>
                 <h4>Tags</h4>
                 <p>Add up to 5 tags to describe what your question is about </p>
                 <input type="text" name='ask-question-title' id='ask-question-tags' placeholder='e.g. (c++,react)'/>
            </label>
                </div>
                <input type="submit" value="Review your question" className='ask-btn'/>
            </form>
        </div>
    </div>
  )
}

export default AskQuestion