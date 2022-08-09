import React from 'react'
import { Link } from 'react-router-dom'
const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
     <div className="display-votes-ans">
      <p>{question.votes}</p>
      <p>votes</p>
     </div>
     <div className='display-votes-ans'>{question.noOfAnswers}
     <p>answers</p>
     </div>
      <div className='display-question-details'>
        <Link to={`/Questions/${question.id}`} className='question-title-links'>{question.questionTitle}</Link>
      <div className="display-tags-time">
             <div className="display-tags">
              {
                question.questiontags.map((tag) =>(
                  <p key={tag}>{tag}</p>
                ))
              }
             </div>
             <p className='display-time'>
              asked {question.time}   by  { question.userPosted}
             </p>
      </div>
      </div>
    </div>
  )
}

export default Questions