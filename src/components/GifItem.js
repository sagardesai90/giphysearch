import React from 'react';

const GifItem = ({gif, onGifSelect}) => {
    return (
       <div className="gif-item" onClick={() => onGifSelect(gif)}>
           <img src={gif.images.downsized.url} alt="a gif"/>
       </div>
    )
};

export default GifItem;