import { useState } from "react";
import { Report } from "../src/components/Report";
import { ButtonStyle } from "../src/styles/Buttons.styles"
import { getReportData } from "../src/utils/db";

export default function ViewReport() {

  const [reportId, setReportId] = useState(null);
  const [data, setData] = useState(null);
  
  const submitForm = async e => {
    e.preventDefault();
    const response = await getReportData(reportId);
    console.log('success', response);
    setData(response);
  }

  return (
    <div className="container mx-auto px-4 center">
      <>
        <form onSubmit={submitForm} className="flex max-w-xs">
          <input 
            placeholder="Input your report no." 
            onChange={
              event => setReportId(event.target.value)
            }
            className="mt-3 rounded-md shadow-md px-4 py-3"
          />
          <button className={ButtonStyle('primary')}>Submit</button>
        </form>
      </>
      { data && <Report data={data}/> }
    </div>
  )
}