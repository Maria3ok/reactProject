import React, { useEffect, useState } from 'react'
import groupsArr from './groupsInfo';
import './groups.css'

export default function Groups(props) {
  const {setcurrentpage}=props;
  useEffect(
    ()=>{
      setcurrentpage(0)
    },[]
  )
  const [groups]=useState(['前端','后端','产品','安卓','设计'])
  const [currentGroup, setCurrentGroup] = useState(0);
  
  let ro = 0;
  let rotate = -72 * currentGroup - 18;
  if (rotate < -306) {
    rotate = rotate + 360 + 'deg'
  } else {
    rotate = rotate + 'deg'
  }
  let roll = (currentGroup-ro)*360 + 'deg';
  ro=currentGroup;

   return (

    <div className='groups'>
      
      <br />
      
      <div className='groups-left'>
        <div className='groups-left-top'>
          <h1>{groupsArr[currentGroup].name}</h1>
          <p>{groupsArr[currentGroup].content}</p>
        </div>
        <div className='groups-left-bottom'>
          <p>学习技能：</p>
          <p>{groupsArr[currentGroup].skill}</p>
        </div>
        <div className='groups-controller'>
          <div className='circle-menu'>
            <div className='circle-menu-round' style={{ transitionDuration: '.8s', transform:`rotate(${rotate})` }} >
    
              <div className='circle-menu-dot' style={{ transitionDuration: '.8s', transform:`rotateX(${roll})`}} ></div>
            </div>
          </div>
          <ul className='groups-label'>
            {groups.map((v,i)=>{return<li key={i} className={currentGroup===i?`groups-label${i} onGroup`:`groups-label${i}`} onClick={() => { setCurrentGroup(i) }}>{v}</li>})}
          </ul>
        </div>

      </div>
      <div className='groups-right' >
        <img className='groups-picture' src={require(`../../../assets/groups/${groupsArr[currentGroup].picture}`)} alt='' />
      </div>

    </div>
   )
}
