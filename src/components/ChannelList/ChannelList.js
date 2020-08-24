import React from 'react';
import ChannelCard from './ChannelCard';

const ChannelList = () => {
  // const channel = useSelector(getChannels)
  const fetchedChannels = channels.map(channel => <ChannelCard />)

  return(
    <div>
      {fetchedChannels}
    </div>
  )
}

export default ChannelList;