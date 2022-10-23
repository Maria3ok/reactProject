import React, { useState } from 'react'
import First from './components/first/first';
// import Main from './components/main/main';
import Header from './components/main/header/header'
import "./styles/base.scss";

export default function App() {
  const [page,setPage]=useState(0);
  return (
    <div className='App'>
      {
        page===0?<First setpage={setPage}/>:<Header/>
      }
        
      <div className="beian">
        <a href="http://www.beian.miit.gov.cn/">鄂ICP备19024133号</a>
      </div>
    </div>
  )
}
