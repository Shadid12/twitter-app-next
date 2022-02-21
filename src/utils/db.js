import faunadb from 'faunadb'
const q = faunadb.query;

const dbClient = new faunadb.Client({ 
  domain: 'db.fauna.com',
  secret: process.env.NEXT_PUBLIC_FAUNA_KEY 
});

export const saveReportData = async payload => {
  try {
    const response = await dbClient.query(
      q.Create(q.Collection('Report'), {
        data: {
          ...payload,
        }
      })
    )
    console.log('success', response);
    alert(`Report saved successfully ${response.ref.value.id}`);
  } catch (error) {
    console.log('error', error);
    alert('Something went wrong');
  }
}

export const getReportData = async id => { 
  try {
    const response = await dbClient.query(
      q.Get(q.Ref(q.Collection('Report'), id))
    )
    // return response;
    return response.data;
  } catch (error) {
    console.log('error', error);
    alert('Something went wrong');
  }
}

export const getAllReports = async () => { 
  try {
    const response = await dbClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('Report'))),
        q.Lambda(x => q.Get(x))
      )
    )
    // return response;
    return response;
  } catch (error) {
    console.log('error', error);
    alert('Something went wrong');
  }
}