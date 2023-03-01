import React from 'react'

import {Routes, Route} from 'react-router-dom'

import { Home } from './pages/Home'
import { TestPages } from './pages/TestPages'
import { NotFound } from './pages/NotFound'
import {Layout} from './../Layout'


export default function TestRouter() {
  return (
    <>
      <div>Test Router</div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='test' element={<TestPages />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
