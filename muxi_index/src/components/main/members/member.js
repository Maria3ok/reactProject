import React from 'react'

export default function Member(props) {
    const {member,group}=props;
  return (
    <div className='member-box'>
        <img className='member-photo' src={member.photo} alt='头像跑路啦！'></img>
        <div className='member-position' style={{background: member.position==='组员'?'rgb(170, 170, 170)':''}}>{member.position}</div>
        <div className='member-info'>姓名：{member.name}</div>
        <div className='member-info'>组别：{group}</div>
        <div className='member-intro'>
        <div className='member-intro-label'>介绍</div>{member.intro}
        </div>
    </div>
  )
}
