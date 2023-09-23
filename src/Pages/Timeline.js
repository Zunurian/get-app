import React, { useState } from 'react';
import { Divider, Radio, Timeline } from 'antd';
const Timeinecomponent = () => {
  const [mode, setMode] = useState('left');
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <>
      
      
       
      <Timeline
        mode={mode}
        items={[
          {
            label:<div>
              
              <p>
                hackathon
              <br/>
              The getlinked tech hackathon 1.0 is formally announced <br/>
              to the general public and teams begin to get ready register
               
              </p>

            </div> ,
            children:'' 
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ]}
      />
    </>
  );
};
export default Timeinecomponent;