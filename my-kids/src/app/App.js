import React from 'react'
import { Paper, ThemeProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import { darkTheme } from '../Theme'

import Banner from '../components/NewCopy/Sections/Banner'
import Footer from '../components/NewCopy/Sections/Footer'
import MainContent from '../components/NewCopy/Sections/MainContent'

import './main.css'
import Form from '../components/NewCopy/Sections/Form'

const App = () => (
  <Paper>
    <Banner />
    <Routes>
      <Route path='/' element={<MainContent />} />
      <Route path='/form' element={<Form />} />
    </Routes>
    <Footer />
  </Paper>
)

export default App
