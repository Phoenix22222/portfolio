'use client'
import VantaBg from "./components/VantaBg"
import About    from "./components/About"
import Contact  from "./components/Contact"
import Footer   from "./components/Footer"
import Header   from "./components/Header"
import Navbar   from "./components/Navbar"
import Services from "./components/Services"
import Work     from "./components/Work"

export default function Home () {
  return (
    <>
      {/* background first so it sits at the very bottom */}
      <VantaBg />

      {/* site content */}
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}