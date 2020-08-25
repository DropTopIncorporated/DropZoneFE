import React from 'react';
import StreamCard from './StreamCard';

const ChannelList = () => {
  // const channel = useSelector(getChannels)
  const fetchedChannels = channels.map(channel => <StreamCard />)

  return(
    <div>
      {fetchedChannels}
    </div>
  )
}

export default ChannelList;