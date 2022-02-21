import Link from "next/link";
import { useEffect, useState } from "react";
import { reportListItem } from "../../src/styles/Report.styles";
import { getAllReports } from "../../src/utils/db";

export default function Reports() { 

  const [reports, setReports] = useState(null);

  useEffect(() => {
    listReports();
  }, [])

  const listReports = async () => { 
    const response  = await getAllReports();
    console.log('success', response);
    setReports(response.data);
  }

  return (
    <div className="container mx-auto px-4 center">
      <h1>All Reports</h1>
      {
        reports && reports.map(report => (
          <a key={report.ref.value.id}>
            <div key={report.ref.value.id} className={reportListItem}>
              <Link href={`reports/${report.ref.value.id}`}>
                {report.ref.value.id}
              </Link>
            </div>
          </a>
        ))
      }
    </div>
  )
}