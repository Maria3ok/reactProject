import React from 'react'
import './first.scss'

export default function First(props) {
  const{setpage}=props;
  // useEffect(()=>{
    // window.location='/first'
  // },[])
  // const intoMuxi=()=>{
  //   window.location = '/main'
  // }
  // useEffect(
  //   ()=>{
  //     return unShown;
  //   },[]
  // )
  // const unShown=()=>{
    // return()=>{console.log('111')};
    // return()=>{document.getElementById('first').style.display='none'};
    // return()=>{console.log('...')}
  // }

  return (
    <div>
      <div className="first" id='first'>
      <div className="first-center-words"> </div>
      <div className="first-center-trees-containner">
        <div className="first-center-gray-trees"></div>
        <div className="first-center-green-trees"></div>
        <div className="first-bottom-prond"></div>
      </div>
      <div className="first-cloud-cantainner">
        <div className="first-left-cloud"></div>
        <div className="first-right-cloud"></div>
      </div>
      <div className="first-others">
        <div className="first-top-cloud"></div>
        <div className="first-top-stars"></div>
        <div className="first-border"></div>
      </div>
      <div className="first-button" >
        <div >
          <button className="blob-btn" onClick={()=>setpage(1)}>进&nbsp;入&nbsp;官&nbsp;网
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </button>
          </div>
        <br />
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="10"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                  result="goo"
                />
                <feBlend in2="goo" in="SourceGraphic" result="mix" />
              </filter>
            </defs>
          </svg>
      </div>
      {/* <Routes>
        <Route path='/' />
        <Route path='/main' element={<Main/>}/>

        </Routes> */}
    </div>
    </div>
  )
}
