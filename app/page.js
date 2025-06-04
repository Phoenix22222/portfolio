'use client'
import VantaBg from "./components/VantaBg"
import About    from "./components/About"
import Contact  from "./components/Contact"
import Footer   from "./components/Footer"
import Header   from "./components/Header"
import Navbar   from "./components/Navbar"
import Skills   from "./components/Skills"
import Work     from "./components/Work"
import ResumeButton from './components/ResumeButton';


export default function Home () {
  return (
    <>
      <VantaBg />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}