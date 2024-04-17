"use client";

import {BsStars} from 'react-icons/bs'
import TweetBox from "./TweetBox"
import Post from "../Post"

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`
}

const tweets = [ 
  {
    displayName: 'Krishna sabat',
    userName: '0x8cd390f697ffDc176f1',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE91iQlO05YNyzwozvJiKEVt88cDOBelYzJtLoRNLvmA&s',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2024-04-01T12:00:00:000Z',
  },
  {
    displayName: 'Krishna sabat',
    userName: '0x8cd390f697ffDc176f1',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE91iQlO05YNyzwozvJiKEVt88cDOBelYzJtLoRNLvmA&s',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2024-04-01T12:00:00:000Z',
  },
  {
    displayName: 'Krishna sabat',
    userName: '0x8cd390f697ffDc176f1',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE91iQlO05YNyzwozvJiKEVt88cDOBelYzJtLoRNLvmA&s',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2024-04-01T12:00:00:000Z',
  },
  {
    displayName: 'Krishna sabat',
    userName: '0x8cd390f697ffDc176f1',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE91iQlO05YNyzwozvJiKEVt88cDOBelYzJtLoRNLvmA&s',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2024-04-01T12:00:00:000Z',
  },
]

const Feed = () => {
  return (
    <div className={`${style.wrapper}`}>
        <div className={style.header}>
            <div className={style.headerTitle}>Home</div>
            <BsStars />
        </div>
        <TweetBox />
        {
          tweets.map((tweet,index) => (
            <Post 
            key={index}
            displayName={tweet.displayName}
            userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(4,8)}`}
            avatar={tweet.avatar}
            text={tweet.text}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
            />
          ))
        }
    </div>
  )
}

export default Feed