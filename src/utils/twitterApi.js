export const getUserData = async (username) => { 
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${process.env.TWITTER_TOKEN}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(`https://api.twitter.com/2/users/by/username/${username}?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,url,username,verified,withheld`, requestOptions)
  return await response.json();
};

export const getTweets = async (userId) => { 

};