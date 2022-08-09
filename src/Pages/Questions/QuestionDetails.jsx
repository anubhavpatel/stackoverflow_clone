import React from 'react'
import { useParams , Link} from 'react-router-dom'
import DownVotes from '../../assets/sort-down.png'
import DisplayAnswers from './DisplayAnswers'
import './Questions.css'
import Avtar from '../../components/Avatar/Avatar'
const QuestionDetails = () => {
    const {id} = useParams()
    var questionList =[{
        _id: '1',
        upVotes : 9,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle : "what is funciton and array ?",
        questionBody: "it meant to be",
        questiontags: ["java", "c++","react js"],
        userPosted: "ra",
        time: "jan 1",
        userId:1 ,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            userId:2,
        }]

    },
       { _id: '2',
        upVotes : 5,
        downVotes: 2,
        noOfAnswers: 10,
        questionTitle : "What I'm trying to do: I'm trying to get my React Web-App NavBar to link to other pages inside my app.",
        questionBody: "it meant to be",
        questiontags: ["java", "c++","react js"],
        userPosted: "r",
        time: "jan 1",
        userId:1 ,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            userId:2,
        }]},
       { _id: '3',
        upVotes : 3,
        downVotes: 2,
        questionTitle : "wh a map",
        noOfAnswers: 10,
        questionBody: "it meant to be",
        questiontags: ["java", "c++","react js"],
        userPosted: "rraa",
        time: "jan 1",
        userId:1 ,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            userId:2,
        }] },
        { _id: '4',
        upVotes : 3,
        downVotes: 2,
        questionTitle : "wh ying to do: I'm trying to get my React Web-App NavBar to link to other pages insia map",
        questionBody: "it meant to be",
        noOfAnswers: 10,
        questiontags: ["java", "c++","react js"],
        userPosted: "rraa",
        time: "jan 1",
        userId:1 ,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            userId:2,
        }] }

    ]
   
  return (
    <div className='question-details-page'>
       {  questionList === null ?
       <h1>Loading</h1> :
       <>
       {
            questionList.filter(question => question._id === id).map(question => (
                <div key={question._id}>
                <section className='question-details-container'>
                    <h1>{question.questionTitle}</h1>
                    <div className='question-details-container-2'>
                        <div className='question-votes'>
                          <img src={DownVotes} width='18' alt=""/>
                          <p>{question.upVotes - question.downVotes}</p>
                          <img src={DownVotes}  width='18' style={{transform: "rotate(180deg)"}} alt=""/>  
                    </div>
                    <div style={{width: "100%"}}>
                     <p className='question-body'>{question.questionBody}</p>
                     <div className='question-details-body'>
                        {
                            question.questiontags.map((tag) =>(
                                <p key={tag}>{tag}</p>
                            ))
                        }
                     </div>
                     <div className="question-action-user">
                        <div>
                            <button type='button'>Share</button>
                            <button type='button'>Delete kr betichod</button>
                        </div>
                        <div>
                            <p>asked by {question.time}</p>
                            <Link to={`./User/$question.userId`} style={{color: "#FFA500"}}>
                                <Avtar backgroundColor="orange"  px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avtar>
                                <div>{question.userPosted}</div>
                            </Link>
                        </div>
                     </div>
                    </div>
                    </div>
                </section>
                {
                    question.noOfAnswers !== 0 && (
                        <section>
                            <h3>{question.noOfAnswers} answers</h3>
                            <DisplayAnswers key={question._id} question={question}/>
                        </section>
                    )
                }
                <section className='post-answer-container'>
                 <h3> Your answer </h3>
                 <form>
                    <textarea cols="30" rows='10'></textarea> <br/>
                    <input type='submit' className='post-ans-btn' value="post Your Answers"></input>
                 </form>
                 <p>Browse other tagged
                 {
                    question.questiontags.map((tag) =>(
                        <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                    ))
                 }
                 or
                 <Link to='/AskQuestion' style={{textDecoration : "none", color: "#009dff"}}>ask your Question</Link>
                 </p>
                </section>
                </div>
            ))
       }    
       </> }
    </div>
  )
}

export default QuestionDetails