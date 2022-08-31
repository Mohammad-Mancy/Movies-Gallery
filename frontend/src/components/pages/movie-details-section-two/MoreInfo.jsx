import React from 'react'
import {MdAvTimer, MdLanguage, MdOutlineDoubleArrow} from 'react-icons/md'
import { BsCalendarDate } from 'react-icons/bs'
import HorizontalScrolling from '../scroll-bar/HorizontalScrolling'

function MoreInfo() {
  // MockServer
  const companies = [{
    id:12312312,
    name:'test',
    profile_path:''
  },{
    id:2323,
    name:'test22',
    profile_path:''
  },{
    id:2312,
    name:'test223',
    profile_path:''
  },{
    id:12345434312312,
    name:'test222323',
    profile_path:''
  }]
  // ______________
  return (
    <div style={{width:'700px'}}>
      <h5>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nostrum dolor iure."</h5>
      <h5><MdOutlineDoubleArrow /> Genres : Actions | Drama | Thriller</h5>
      <h5><BsCalendarDate /> Released Date : 2022-12-12</h5>
      <h5><MdLanguage /> Spoken Langauge : English</h5>
      <h5><MdAvTimer /> Runtime : 130 minute</h5>
      <h5><MdOutlineDoubleArrow /> Productions Companies :</h5>
      <HorizontalScrolling items={companies} company={true} />
    </div>
  )
}

export default MoreInfo