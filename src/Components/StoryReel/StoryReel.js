import React from 'react';
import './StoryReel.scss';
import Story from './Story';

const StoryReel = () => {
  return (
    <div className="storyreel">
      <Story 
        profileSrc="https://image.shutterstock.com/z/stock-vector-person-gray-photo-placeholder-man-in-a-costume-on-gray-background-1389654833.jpg"
        image="https://i.pinimg.com/originals/c8/2a/f9/c82af9c8a818d8dba545fb896b8a6b2c.jpg"
        title="Shoaib Doulatabd"
      />
      <Story 
        profileSrc="https://image.shutterstock.com/z/stock-vector-person-gray-photo-placeholder-woman-silhouette-on-white-background-1396032086.jpg"
        image="https://i.pinimg.com/236x/36/0a/97/360a97be8e0afa21cc6d60e4d5de50f9.jpg"
        title="Heena Momin"
      />
      <Story 
        profileSrc="https://image.shutterstock.com/z/stock-vector-person-gray-photo-placeholder-man-in-a-costume-on-gray-background-1389654833.jpg"
        image="https://i.pinimg.com/236x/9e/61/3f/9e613f3f23891b4b83556929d686dc57.jpg"
        title="Item one"
      />
      <Story 
        profileSrc="https://image.shutterstock.com/z/stock-vector-person-gray-photo-placeholder-man-in-a-costume-on-gray-background-1389654833.jpg"
        image="https://i.pinimg.com/236x/ba/87/39/ba873916eca400913f42a972e8eaf193.jpg"
        title="Item two"
      />
      <Story 
        profileSrc="https://image.shutterstock.com/z/stock-vector-person-gray-photo-placeholder-man-in-a-costume-on-gray-background-1389654833.jpg"
        image="https://i.pinimg.com/236x/78/fc/f7/78fcf74e345ef03a070f0432dd32a7d9.jpg"
        title="Demo users"
      />
    </div>
  )
}

export default StoryReel
