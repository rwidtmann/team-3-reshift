import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {ADD_REACTION_END} from '../utils/mutations';
import { Link } from 'react-router-dom';

function EndShift() {

  const [reaction, setReaction] = useState(null)
  const [addReactionEnd] = useMutation(ADD_REACTION_END);


  const handleSubmit = async () => {
    try {
      const {data} = await addReactionEnd({
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
  // End shift same style box as homeLogin page except with 5 face survey and "End Shift" button. 
  // upon clicking "end shift" will need to return to homelogin page and make sure values are cleared in forms
  return (
    
    
    <div className="endBody">
    <div className="card">
      <div className="card-body text-center">
          <h5 className="card-title">Hows your mood after your shift?</h5>
          <div className="btn-group" role="group">
              <button type="button" className={`btn btn-lg btn-outline-primary ${reaction === "1" && "active"}`} value="1" onClick={(e) => handleReaction(e.target.value)}>😫</button>
              <button type="button" className={`btn btn-lg btn-outline-primary ${reaction === "2" && "active"}`} value="2" onClick={(e) => handleReaction(e.target.value)}>😔</button>
              <button type="button" className={`btn btn-lg btn-outline-primary ${reaction === "3" && "active"}`} value="3" onClick={(e) => handleReaction(e.target.value)}>😐</button>
              <button type="button" className={`btn btn-lg btn-outline-primary ${reaction === "4" && "active"}`} value="4" onClick={(e) => handleReaction(e.target.value)}>😊</button>
              <button type="button" className={`btn btn-lg btn-outline-primary ${reaction === "5" && "active"}`} value="5" onClick={(e) => handleReaction(e.target.value)}>😁</button>
          </div>
          <Link to='/'>
            <div>
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>End Shift!</button>
            </div>
          </Link>
      </div>
  </div>
  </div>

  );
}

export default EndShift;