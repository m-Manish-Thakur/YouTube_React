import React from "react";

const ChannelDetails = ({ details }) => {
  console.log(details);
  //   //   Subscribers ----------------------------------
  //   function formatSubscribersCount(subscribersCount) {
  //     if (subscribersCount >= 1e6) {
  //       // Convert to millions and round to one decimal place
  //       return (subscribersCount / 1e6).toFixed(1) + "M";
  //     } else if (subscribersCount >= 1e3) {
  //       // Convert to thousands and round to one decimal place
  //       return (subscribersCount / 1e3).toFixed(1) + "K";
  //     } else {
  //       return subscribersCount;
  //     }
  //   }

  //   const subscribersCount = details?.statistics?.subscriberCount;
  //   const formattedCount = formatSubscribersCount(subscribersCount);

  return (
    <div>
      <img
        src={details?.snippet?.thumbnails?.high?.url}
        alt="channel"
        style={{ height: "70px", borderRadius: "50%" }}
      />
      <h4>{details?.snippet?.title}</h4>
      {/* <h5>{formattedCount}</h5> */}
      <p>{details?.snippet?.description}</p>
    </div>
  );
};

export default ChannelDetails;
