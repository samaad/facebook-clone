import React from 'react'
import { Avatar } from '@material-ui/core'
import './Story.scss'
const Story = ({ image, profileSrc, title }) => {
  return (
    <div style={{ backgroundImage: `url(${image})`}} className="story">
      <Avatar src={profileSrc} className="story__avatar"/>
      <h4>{title}</h4>
    </div>
  )
}

export default Story
