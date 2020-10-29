import React, { useState, useEffect } from 'react'
import './Feed.scss';
import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import db from '../../firebase';

const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy("timestamp", "desc")
      .onSnapshot(snp => {
      setPosts(snp.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map(post => (
        <Post 
          key={post.id}
          {...post.data}
      />
      ))}
      {/* <Post 
        profilPic={'https://www.popsci.com/resizer/CBn8MM5YQUTJ-vFDqOpsF2WS3VY=/2068x1378/cloudfront-us-east-1.images.arcpublishing.com/bonnier/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg'}
        message={'this is working'}
        timestamp={'this is a timestamp'}
        username={'sssssangha'}
        image={'https://images.unsplash.com/photo-1533204515132-035bc8d4128c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'}
      /> */}
    </div>
  )
}

export default Feed
