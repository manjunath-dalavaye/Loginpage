import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState('');
  
  const handleSubmit = (e)=>{
    //to avoid the render we can use the preventDefault
    e.preventDefault();
   if(username==="user" && password==="password"){
    setErr("");
    setIsSubmitted(true);
   }
   else{
    setErr("Invalid username or password");
    setIsSubmitted(false);
   }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {
        isSubmitted ? (
          <div>
            <p>Welcome {username}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {err && <p className="err">{err}</p>}

            <div>
              <label htmlFor='username'>
                Username:
                <input 
                  type='text'
                  id='username'
                  placeholder='username'
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor='password'>
                Password:
                <input 
                  type='password'
                  id='password'
                  placeholder='password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </label>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        )
      }
    </div>
  );
}

export default App;
