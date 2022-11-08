import React from 'react'
import HeaderBanner from './HeaderBanner'
import HeaderBottonMenu from './HeaderBottonMenu'
import HeaderTopMenu from './HeaderTopMenu'

export default function Header () {
  return (
    <div className='header'>
      <nav>
        <HeaderTopMenu />
      </nav>
      <HeaderBanner />
      <nav>
        <HeaderBottonMenu />
      </nav>
    </div>
  )
}
