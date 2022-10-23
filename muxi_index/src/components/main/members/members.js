import React,{useEffect, useState} from 'react'
import membersArr from './membersInfo'
import Member from './member'
import MembersAnim from './membersAnim'

export default function Members(props) {
const arr=['后端组','前端组','设计组','产品组','安卓组']
  const [currentGroup,setCurrentGroup]=useState(0);

  useEffect(
    ()=>{
      props.setcurrentpage(3)
    },[]
  )
  return (
    <div>
      <div >
        <MembersAnim/>
      </div>
      <div className='members-box'>
        {membersArr[currentGroup].people.map((member,i)=>{return <Member key={i} member={member} group={membersArr[currentGroup].tag}/>})}
      </div>
      <div className='members-controller'>
        <ul className='members-controller-text'>
        {arr.map((v,i)=>{return(
        <li key={i} className='members-controller-item'><a  className={currentGroup===i?'members-controller-active':''} onClick={()=>setCurrentGroup(i)}>{v}</a></li> 
        )})}
        </ul>
      </div>
    </div>
  )
}
