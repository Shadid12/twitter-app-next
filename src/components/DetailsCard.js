export const DetailsCard = ({ data }) => {
  
  const hastags = {};

  const mentions = {};

  data?.tweets?.map(tweet => {
    tweet.entities?.hashtags?.map(hashtag => {
      if(hastags[hashtag.tag]) {
        hastags[hashtag.tag] += 1;
      } else {
        hastags[hashtag.tag] = 1;
      }
    });

    tweet.entities?.mentions?.map(mention => {
      if(mentions[mentions.username]) {
        mentions[mention.username] += 1;
      } else {
        mentions[mention.username] = 1;
      }
    });

  });

  if(!data) {
    return null
  }

  console.log('hastags', hastags);

  return (
    <>
      <div className="bg-white rounded-xl p-4 shadow-2xl m-2">
        # Total hashtags:  {Object.keys(hastags).length}
      </div>

      <div className="bg-white rounded-xl p-4 shadow-2xl m-2">
        @ Total Mentions:  {Object.keys(mentions).length}
      </div>

      {/* hashtags details */}
      <div className="bg-white rounded-xl p-4 shadow-2xl m-2">
        <span className="ml-2 text-lg">#️ Top HashTags</span>
        <div className="flex flex-wrap">
          {Object.entries(hastags).map(([key, value]) => (
            <span key={key} className="p-3 bg-indigo-300 rounded-2xl shadow-2xl m-2">
              {key}  {value} 
            </span>
          ))}
        </div>
      </div>
      {/* mentions details */}
      <div className="bg-white rounded-xl p-4 shadow-2xl m-2">
        <span className="ml-2 text-lg">@ All Mentions</span>
        <div className="flex flex-wrap">
          {Object.entries(mentions).map(([key, value]) => (
            <span key={key} className="p-3 bg-indigo-300 rounded-2xl shadow-2xl m-2">
              {key}  {value} 
            </span>
          ))}
        </div>
      </div>
    </>
  )

}