import React, {useState } from 'react'
import { Route, Routes, Link, BrowserRouter} from 'react-router-dom'
import Groups from '../groups/groups'
import Products from '../products/products'
import Members from '../members/members'
import Join from '../join/join'
import './header.scss'

export default function Header() {
  // useEffect(()=>{
    // setCurrentPage(0);
  //   return()=>{
  //     window.history.go(0)
  //   }
  // },[])
  const [currentPage,setCurrentPage] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <div className="header-wrap">
          <div className={currentPage===0?'header-primary header-active':'header-primary'}>
            <Link className="header-word" to="/groups" >组别介绍</Link>
          </div>
          <div className={currentPage===1?'header-primary header-active':'header-primary'}>
            <Link className="header-word" to="/products" >产品展示</Link>
          </div>
          <div className='header-center'>
            <div className="header-word team-name">木犀团队</div>
          </div>
          <div className={currentPage===3?'header-primary header-active':'header-primary'}>
            <Link className="header-word" to="/members" >成员介绍</Link>
          </div>
          <div className={currentPage===4?'header-primary header-active':'header-primary'}>
            <Link className="header-word" to="/join" >加入我们</Link>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Groups setcurrentpage={setCurrentPage}/>} exact></Route>
          <Route path='/groups' element={<Groups setcurrentpage={setCurrentPage}/>} />
          <Route path='/products' element={<Products setcurrentpage={setCurrentPage}/>} />
          <Route path='/members' element={<Members setcurrentpage={setCurrentPage}/>} />
          <Route path='/join' element={<Join setcurrentpage={setCurrentPage}/>} />
        </Routes>
        </BrowserRouter>
    </div>

  )
}
