import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Report from './pages/Report'
import NoMatch from './pages/NoMatch'
import AppLayout from './components/layout/AppLayout'
import { theme } from './theme/theme'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout/>}>
              <Route index element={<Home/>}/>
              <Route path="/report" element={<Report/>}/>
              <Route path="*" element={<NoMatch/>}/>
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
  )
}

export default App
