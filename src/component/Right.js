import React from 'react';


function Right1() {
  const dt=new Date();
  let hour=dt.getHours();
  let min=dt.getMinutes();
  let prepend=hour>=12?"PM":"AM"
  return <div className='container right1'>
  <h4 className='order'>My Order<br></br><svg data-testid="AccessTimeIcon"></svg>{hour}:{min} {prepend}</h4>
      <span className='edit'>Edit</span>

     
  
  </div>;
}

export default Right1;
