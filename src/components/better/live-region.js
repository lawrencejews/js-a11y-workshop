import React, {useState, useRef} from "react"

const LiveRegion = () => {
  const [message, setMessage] = useState('Nothing Here');
  const inputRef = useRef(null);
  const submitHandler = (event) => {
    event.preventDefault()

    setMessage(inputRef.current.value)
    
  }

  return (
    <div>
    <div role="status" >
        <p>{message}</p>
        <form onSubmit={submitHandler}>
          <label>
            Enter text<br/>
            <input type="text" ref={inputRef}/>
          </label>
          <button type="submit">Start</button>
        </form>
    </div>
    </div>

      
  )
}

export default LiveRegion