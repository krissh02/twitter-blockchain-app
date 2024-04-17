"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import {FiMoreHorizontal} from "react-icons/fi"
import {VscTwitter} from "react-icons/vsc"
import SidebarOption from "./SidebarOption"
import {RiHome7Line, RiHome7Fill, RiFileList2Fill} from 'react-icons/ri'
import {BiHash} from 'react-icons/bi'
import {FiBell} from 'react-icons/fi'
import {HiOutlineMail, HiMail} from 'react-icons/hi'
import {FaHastag,FaRegListAlt, FaBell} from "react-icons/fa"
import { CgMoreO } from 'react-icons/cg';
import { BsBookmark,BsBookmarkFill, BsPerson, BsPersonFill } from 'react-icons/bs';

const style = {
    wrapper:`flex-[0.7] flex flex-col px-8`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainer: `flex-1`,
    profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
    profileLeft: `flex items-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
    moreContainer: `flex items-center mr-2`
}

const Sidebar = ({initialSelectedIcon = "Home"}) => {
    const [selected, setSelected] = useState(initialSelectedIcon)
  return (
    <div className={style.wrapper}>
        {/* Twitter Icon */}
        <div className={style.twitterIconContainer}>
            <VscTwitter />
        </div>
        {/* Menu Items */}
        <div className={style.navContainer}>
            <SidebarOption 
            text="Home" 
            Icon={selected === "Home" ? RiHome7Fill : RiHome7Line}
            isActive={Boolean(selected === "Home")}
            setSelected={setSelected}
            redirect={'/'}
            />
            <SidebarOption 
            text="Explore" 
            Icon={selected === "Explore" ? FaHastag : BiHash}
            isActive={Boolean(selected === "Explore")}
            setSelected={setSelected}
            />
            <SidebarOption 
            text="Notifications" 
            Icon={selected === "Notifications" ? FaBell : FiBell}
            isActive={Boolean(selected === "Notifications")}
            setSelected={setSelected}
            />
            <SidebarOption 
            text="Messages" 
            Icon={selected === "Messages" ? HiMail : HiOutlineMail}
            isActive={Boolean(selected === "Messages")}
            setSelected={setSelected}
            />
            <SidebarOption 
            text="Bookmarks" 
            Icon={selected === "Bookmarks" ? BsBookmarkFill : BsBookmark}
            isActive={Boolean(selected === "Bookmarks")}
            setSelected={setSelected}
            />
            <SidebarOption 
            text="Lists" 
            Icon={selected === "Lists" ? RiFileList2Fill : FaRegListAlt}
            isActive={Boolean(selected === "Lists")}
            setSelected={setSelected}
            />
            <SidebarOption 
            text="Profile" 
            Icon={selected === "Profile" ? BsPersonFill : BsPerson}
            isActive={Boolean(selected === "Profile")}
            setSelected={setSelected}
            redirect={'/profile'}
            />
            <SidebarOption 
            text="More" 
            Icon={CgMoreO}
            isActive={Boolean(selected === "More")}
            setSelected={setSelected}
            />
            <div className={style.tweetButton}>Mint</div>
        </div>
        {/* Others */}
        <div className={style.profileButton}>
            <div className={style.profileLeft}></div>
            <div className={style.profileRight}>

                <div className={style.details}>
                    <div className={style.name}>krishna sabat</div>
                    <div className={style.handle}>@0x22dF...5xf2dF</div>
                </div>

                <div className={style.moreContainer}>
                    <FiMoreHorizontal />
                </div>
            </div>

        </div>


    </div>
  )
}

export default Sidebar