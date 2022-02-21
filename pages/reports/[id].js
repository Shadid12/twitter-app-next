import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Report } from "../../src/components/Report";
import { getReportData } from "../../src/utils/db";

export default function ShowReport() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  console.log('id', id);

  useEffect(() => {
    if(id) {
      getCurrentReport();
    }
  }, [id]);

  const getCurrentReport = async () => { 
    const response = await getReportData(id);
    console.log('success', response);
    setData(response);
  };

  if(!data) { 
    return <div>Loading...</div>
  }

  return (
    <Report data={data}/>
  )
}