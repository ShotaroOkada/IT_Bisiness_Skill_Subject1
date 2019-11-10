import React from 'react';

type Props = { imgPath: string };

const Image = (props: Props) => {
  return (
    <div>
      <img className='image' alt='' src={props.imgPath} />
    </div>
  )
}

export default Image