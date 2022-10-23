import React,{useEffect} from 'react'
import MembersAnim from '../members/membersAnim'
import './join.css'

export default function Join(props) {
  useEffect(
    ()=>{
      props.setcurrentpage(4)
    },[]
  )
  return (
    <div>
      <MembersAnim/>
    <div className='join-box'>
      
      <img className='join-picture' src={require('../../../assets/join/join2.png')}/>
      <a className='join-btn' href='http://fresh.muxixyz.com/login'/>
    </div>
    </div>
  )
}
