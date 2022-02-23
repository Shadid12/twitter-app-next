import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Report } from "../../src/components/Report";
import { getReportData } from "../../src/utils/db";

export default function ShowReport() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  console.log('Router ID', id);

  return (
    <div>Report {id}</div>
  )
}