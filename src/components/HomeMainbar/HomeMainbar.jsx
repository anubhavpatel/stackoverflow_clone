import React from 'react'
import { Link , useLocation ,useNavigate} from 'react-router-dom'
import QuestionList from './QuestionList'
import './HomeMainbar.css'
const HomeMainbar = () => {
  const user=1;
  const navigate = useNavigate()
  const checkAuth =() =>{
       if(user===null){
        alert("login or signup to ask question")
        navigate('/Auth')
       } else{
        navigate('/AskQuestion')
       }
  }
    var questionList =[{
        id:1,
        votes : 3,
        noOfAnswers: 2,
        questionTitle : "what is a function",
        questionBody: "it meant to be",
        questiontags: ["java", "c++","react js"],
        userPosted: "randa",
        time: "jan 1"},
       { id:2,
        votes : 4,
        noOfAnswers: 0,
        questionTitle : "Explain why class methods should be bound to class instahy class methods should be bound to class instances.",
        questionBody: "it meant to be",
        questiontags: ["java", "c++","react js"],
        userPosted: "randa",
        time: "jan 1"},
       { id:3,
        votes : 8,
        noOfAnswers: 4,
        questionTitle : "what is a map",
        questionBody: "it meant to be",
        questiontags: ["java", "c++","react js"],
        userPosted: "randa",
        time: "jan 1"},
        { id:4,
          votes : 8,
          noOfAnswers: 4,
          questionTitle : "what is a map",
          questionBody: "it meant to be",
          questiontags: ["java", "c++","react js"],
          userPosted: "randa",
          time: "jan 1"}

    ]
   
    const location = useLocation()
  return (
   <div className='main-bar'>
    <div className="main-bar-header">
             { location.pathname === '/Home' ? <h1>Top Questions</h1> : <h1>All Questions</h1> }
   <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
    </div>
    <div>
      {
         questionList === null ?
        <h1>loading</h1> :
        <>
          <p>{questionList.length } question</p>
          <QuestionList questionList={questionList}/>
        </>
      }
    </div>
   </div>
  )
}

export default HomeMainbar