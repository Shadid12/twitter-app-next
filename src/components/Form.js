import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState('');

  const submitForm = async e => { 
    e.preventDefault();
    console.log('Form submitted', username);
    try {
      const response = 
        await fetch(`/api/analytics-twitter?username=${username}`);
      console.log(await response.json());
    } catch (error) {
      alert('Something went wrong'); 
    }
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