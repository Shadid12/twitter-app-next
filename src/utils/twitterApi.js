let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${process.env.TWITTER_TOKEN}`);

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


export const getUserData = async (username) => { 

  const response = await fetch(`https://api.twitter.com/2/users/by/username/${username}?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,url,username,verified,withheld`, requestOptions)
  return await response.json();
};

export const getTweets = async (userId) => { 
  const response = await fetch(`https://api.twitter.com/2/users/${userId}/tweets?tweet.fields=attachments,author_id,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source,text,withheld&max_results=100`, requestOptions)
  return await response.json(); 
};