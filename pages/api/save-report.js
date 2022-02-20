import faunadb from 'faunadb'

export default async function handler(req, res) {
  const data = req.body;
  const payload = data ? JSON.parse(data) : null;

  console.log('process.env.FAUNA_DOMAIN', process.env.FAUNA_DOMAIN);
  console.log('process.env.FAUNA_KEY', process.env.FAUNA_KEY);

  const dbClient = new faunadb.Client({ 
    domain: process.env.FAUNA_DOMAIN,
    secret: process.env.FAUNA_KEY 
  })
  const q = faunadb.query;


  try {
    const response = await dbClient.query(
      q.Create(q.Collection('Report'), {
        data: {
          ...payload,
        }
      })
    )
    console.log('success', response);
    res.status(200).json({
      data: response
    });
  } catch (error) {
    console.log('error', error);
  }
}
