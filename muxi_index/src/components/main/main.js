import React ,{useEffect}from 'react'
import Header from './header/header'
import { BrowserRouter } from 'react-router-dom'

export default function Main() {
  // useEffect(()=>{
    // window.location='/main'
  // },[])
  return (
    <div>
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
    </div>
  )
}
