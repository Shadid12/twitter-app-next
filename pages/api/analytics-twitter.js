import { getTweets, getUserData } from "../../src/utils/twitterApi";

export default async function handler(req, res) {
  const userData = await getUserData(req.query.username);
  const tweets = await getTweets(userData.data.id);
  res.status(200).json({
    msg: 'Sample Endpoint is working',
    userData,
    tweets
  });
}
