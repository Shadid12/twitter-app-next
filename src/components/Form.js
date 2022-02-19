import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState('');

  const submitForm = e => { 
    e.preventDefault();
    console.log('Form submitted', username);
  };

  return (
    <form onSubmit={submitForm}>
      <input 
        placeholder="Twitter Username" 
        onChange={
          event => setUsername(event.target.value)
        }
      />
      <button>Submit</button>
    </form>
  );
}