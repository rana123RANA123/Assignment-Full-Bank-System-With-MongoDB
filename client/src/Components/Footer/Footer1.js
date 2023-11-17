import React from 'react'
import '../../App.scss'
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer >
        <div className="container-fluid" style={{backgroundColor:"#0077b6"}} >
          <div className="row">
            <div className="col mt-3">
              <p className='text-center text-light'>&copy; {year} Bank.Made with  <span className='text-white'>❤</span> by <a className='text-white fw-bold' target="_blank" style={{textDecoration:"none"}} href="https://github.com/Ahmadjajja"><span>MR.LAZY_DEV</span></a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer