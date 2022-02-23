import { useEffect, useState } from "react";
import { getAllReports } from "../../src/utils/db";

export default function Reports() { 

  const [reports, setReports] = useState(null);

  return (
    <div className="container mx-auto px-4 center">
      <h1>All Reports</h1>
    </div>
  )
}