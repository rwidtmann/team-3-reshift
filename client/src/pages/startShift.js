import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {ADD_REACTION_START} from '../utils/mutations';
import { Link } from 'react-router-dom';



function StartShift() {

  // const [formState, setFormState] = useState({ email: '', password: '' });
  const [reaction, setReaction] = useState(null)
  const [addReactionStart] = useMutation(ADD_REACTION_START);

  // const submitReaction = (e) => {
  //   const {startTimeValue, value} = e.target;
  //   prompt("Deez")

  //   setFormState({
  //     ...formState,
  //     [startTimeValue]: value
  //   })

  // };

  const handleSubmit = async () => {
    try {
      const {data} = await addReactionStart({
        variables: {
          reaction: parseInt(reaction)
        }
      })
      console.log(data)
    }catch (e) {
        console.error(e)
      }
    }
  
  const handleReaction = (value) => {
    setReaction(value)
  }

  return (

    <div className="startBody adminLogin">
      <div className="card">
        <div className="card-body bg-dark text-center">
            <h5 className="card-title">Hows your mood today?</h5>
            <div className="btn-group" role="group">
                <button type="button" className={`btn btn-lg btn-outline-primary ${reaction === "1" && "active"}`} value="1" onClick={(e) => handleReaction(e.target.value)}>😫</button>
                <button type="button" className={`btn btn-lg btn-outline-primary ${reaction === "2" && "active"}`} value="2" onClick={(e) => handleReaction(e.target.value)}>😔</button>
                <button type="button" className={`btn btn-lg btn-outline-primary ${reaction === "3" && "active"}`} value="3" onClick={(e) => handleReaction(e.target.value)}>😐</button>
                <button type="button" className={`btn btn-lg btn-outline-primary ${reaction === "4" && "active"}`} value="4" onClick={(e) => handleReaction(e.target.value)}>😊</button>
                <button type="button" className={`btn btn-lg btn-outline-primary ${reaction === "5" && "active"}`} value="5" onClick={(e) => handleReaction(e.target.value)}>😁</button>
            </div>
            <Link to='/'>
              <div>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Start Shift!</button>
              </div>
            </Link>
        </div>
    </div>
    </div>
    
  );
}

export default StartShift;