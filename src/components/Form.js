import { useState } from "react";
import { ButtonStyle } from "../styles/Buttons.styles";

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
    <form onSubmit={submitForm} className="flex flex-col max-w-xs">
      <input 
        placeholder="Twitter Username (without @)" 
        onChange={
          event => setUsername(event.target.value)
        }
        className="mt-3 rounded-md shadow-md px-4 py-3"
      />
      <button className={ButtonStyle('primary')}>Submit</button>
    </form>
  );
}