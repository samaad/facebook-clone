import React from 'react';
import './Widget.scss';
const Widget = () => {
  return (
    <div className="widgets">
        <iframe
          src="https://twitter.com/TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw"
          width="340"
          height="100%"
          style={{border: "none", overflow: "hidden"}}
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media" />
    </div>
  )
}

export default Widget
