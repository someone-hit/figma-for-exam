import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Hero from './components/Hero'
import Sponsors from './components/Sponsors'
import Services from './components/Services'
import Footer from './components/Footer'
import BlogSection from './components/BlogSection'
import AchievementsSection from './components/AchievementsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Sponsors/>
    <Services/>
    <AchievementsSection/>
    <BlogSection/>
    <Footer/>
    </>
  )
}

export default App
