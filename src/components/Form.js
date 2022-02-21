import { useState } from "react";
import { ButtonStyle } from "../styles/Buttons.styles";
import { saveReportData } from "../utils/db";
import { Report } from "./Report";

export default function Form() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);

  const submitForm = async e => { 
    e.preventDefault();
    console.log('Form submitted', username);
    try {
      const response = 
        await fetch(`/api/analytics-twitter?username=${username}`);
      setData(await response.json());
    } catch (error) {
      alert('Something went wrong'); 
    }
  };

  const saveReport = async () => { 
    await saveReportData(data);
  }

  return (
    <>
    <form onSubmit={submitForm} className="flex max-w-xs">
      <input 
        placeholder="Twitter Username (without @)" 
        onChange={
          event => setUsername(event.target.value)
        }
        className="mt-3 rounded-md shadow-md px-4 py-3"
      />
      <button className={ButtonStyle('primary')}>Submit</button>
    </form>
    <button 
      className={ButtonStyle('primary')}
      disabled={!data}
      onClick={saveReport}
    >
      Save Report
    </button>
    <Report data={data}/>
    </>
  );
}