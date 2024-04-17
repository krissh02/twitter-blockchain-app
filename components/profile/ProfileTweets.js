import { useEffect, useContext, useState } from 'react'
// import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
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

const ProfileTweets = () => {
  // const { currentUser } = useContext(TwitterContext)
  // const [tweets, setTweets] = useState<Tweets>([
  //   {
  //     timestamp: '',
  //     tweet: '',
  //   },
  // ])
  // const [author, setAuthor] = useState<Author>({
  //   name: '',
  //   profileImage: '',
  //   walletAddress: '',
  //   isProfileImageNft: undefined,
  // })

  // useEffect(() => {
  //   if (!currentUser) return

  //   setTweets(currentUser.tweets)
  //   setAuthor({
  //     name: currentUser.name,
  //     profileImage: currentUser.profileImage,
  //     walletAddress: currentUser.walletAddress,
  //     isProfileImageNft: currentUser.isProfileImageNft,
  //   })
  // }, [currentUser])

  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName="krishna sabat"
          userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(4,8)}`}
          text={tweet.tweet}
          avatar={tweet.avatar}
          timestamp={tweet.timestamp}
          isProfileImageNft={tweet.isProfileImageNft}
        />
      ))}
    </div>
  )
}

export default ProfileTweets