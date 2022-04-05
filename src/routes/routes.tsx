import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../templates/Home'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
