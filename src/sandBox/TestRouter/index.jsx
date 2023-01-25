import React from 'react'

import {Routes, Route, Link} from 'react-router-dom'

import { Home } from './pages/Home'
import { TestPages } from './pages/TestPages'
import { NotFound } from './pages/NotFound'

export default function TestRouter() {
  return (
    <>
      <div>Test Router</div>
      <div>
        <Link to='/'>Home</Link> <Link to='/test'>TestPages</Link> <Link to='/TestButton'>TestButton</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='test' element={<TestPages />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
