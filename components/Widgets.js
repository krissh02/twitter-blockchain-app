"use client";
import React from 'react'
import {news, whoToFollow} from '../lib/static'
import { BiSearch } from 'react-icons/bi'

const style = {
  wrapper: `flex-[1] p-4`,
  searchBar: `flex items-center bg-[#243340] p-2 rounded-3xl`,
  searchIcon: `text-[#8899a6] mr-2`,
  inputBox: `bg-transparent outline-none border-none`,
  section: `bg-[#192734] my-6 rounded-xl overflow-hidden`,
  title: `p-2 font-bold text-lg`,
  showMore: `p-2 text-[#1d9bf0] text-sm cursor-pointer hover:bg-[#22303c]`,
  item: `flex items-center p-3 my-2 hover:bg-[#22303c] cursor-pointer`,
  newsItemLeft: `flex-1`,
  newsItemCategory: `text-[#8899a6] text-xs font-semibold`,
  newsItemTitle: `text-sm font-bold`,
  newsItemRight: `w-1/5 ml-3`,
  newsItemImage: `rounded-xl h-14 w-14 object-cover`,
  followAvatarContainer: `w-1/6`,
  followAvatar: `rounded-full h-[40px] w-[40px]`,
  profileDetails: `flex-1`,
  name: `font-bold`,
  handle: `text-[#8899a6]`,
  followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-bold`,
}

const Widgets = () => {
  return (
    <div className={style.wrapper}>
        {/* Widgets Header */}
        <div className={style.searchBar}>
            <BiSearch className={style.searchIcon}/>
            <input placeholder='Search Twitter' type='text' classname={style.inputBox}></input>
        </div>
        {/* Widgets main section */}
        <div className={style.section}>
            <div className={style.title}>Whats happening?</div>
            {
                news.map((item,index) => (
                    <div className={style.item} key={index}>
                        {/* item left part */}
                        <div className={style.newsItemLeft}>
                            <div className={style.newsItemCategory}>{item.category}</div>
                            <div className={style.newsItemTitle}>{item.title}</div>
                        </div>
                        {/* item right part */}
                        <div classname={style.newsItemRight}>
                            <img src={item.image} alt={item.category}
                            className={style.newsItemImage}
                            ></img>
                        </div>
                    </div>
                ))
            }
            <div className={style.showMore}>Show More</div>
        </div>

                <div className={style.section}>
                    <div classname={style.title}>Who to follow</div>
                    {
                        whoToFollow.map((item,index) => (
                            <div className={style.item} key={index}>

                                <div className={style.followAvatarContainer}>
                                    <img src={item.avatar} alt={item.handle} className={item.followAvatar}></img>
                                </div>

                                <div classname={style.profileDetails}>
                                    <div className={style.name}>{item.handle}</div>
                                    <div className={style.handle}>{item.name}</div>
                                </div>

                                <div className={style.followButton}>Follow</div>

                            </div>
                        ))}
                        <div className={style.showMore}>Show More</div>
                </div>
            </div>
  )
}

export default Widgets