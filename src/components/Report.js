import { profileCard, reportContainer } from "../styles/Report.styles";
import { DetailsCard } from "./DetailsCard";

export function Report({ data }) {
  
  console.log('data', data);
  
  if(!data) { 
    return <div className="mt-4 text-purple-600">🍁 No Report Loadede</div>
  }
  return (
    <>
      <h3 className="mt-4">Viewing Report</h3>
      <div className={reportContainer}>
        <div className={profileCard}>
          <div className="flex mb-2">
            <img src={data.userData?.profile_image_url} className="rounded-xl" />
            <div className="ml-2">{data.userData.name}</div>
          </div>
          <div>{data.userData.description}</div>
          <div>{data.userData.location}</div>
        </div>
        <DetailsCard data={data}/>
      </div>
    </>
  )
}