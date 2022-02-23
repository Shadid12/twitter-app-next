import faunadb from 'faunadb'
const q = faunadb.query;

const dbClient = new faunadb.Client({ 
  domain: 'db.fauna.com',
  secret: process.env.NEXT_PUBLIC_FAUNA_KEY 
});

export const saveReportData = async payload => {
  // TODO: Implement this
}

export const getReportData = async id => { 
  // TODO: Implement this
}

export const getAllReports = async () => { 
  // TODO: Implement this
}