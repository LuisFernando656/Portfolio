import './styles.css'

import { useState, useEffect } from 'react'

interface AnchorElement extends HTMLAnchorElement {
}

export const Home = () => {
  const [menuLinks, setMenuLInks] = useState<AnchorElement[]>([])

  const getDistanceFromTheTop = (element: AnchorElement) => {
    const id = element.getAttribute("href")

    if (id) {
      const section = document.querySelector(id) as AnchorElement;
      if (section) {
        return section.offsetTop
      } else {
        return
      }
    }
  }

  const nativeScroll = (distanceFromTheTop: number) => {
    window.scroll({
      top: distanceFromTheTop,
      behavior: "smooth",
    })
  }

  const scrollToSection = (e: Event) => {
    e.preventDefault()
    if (e.target) {
      const distanceFromTheTop = getDistanceFromTheTop(e.target as AnchorElement)! -90
      console.log(distanceFromTheTop)
      nativeScroll(distanceFromTheTop)
    }
  }
  
  menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection)
  })
  
  useEffect(() => {
    const links = Array.from(document.querySelectorAll('.nav-list a[href^="#"]')) as HTMLAnchorElement[]

    setMenuLInks(links)
  },[])
  
  return (
    <div className='home'>
      <main>
        <header>
          <h1>&#10094; Luis /&#10095;</h1>
          <nav>
            <ul className='nav-list'>
              <li><a href="#Home">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section id='Home' className='info'>
            <div className='info-container'>
              <img src="https://github.com/luisfernando656.png" alt="Foto de perfil" />
              <div>
                <h2>Luis Fernando de Oliveira</h2>
                <h3>Web Developer</h3>
              </div>
            </div>
          </section>
          <section id='About' className='info'>
            <div className='info-container'>
              <img src="https://github.com/luisfernando656.png" alt="Foto de perfil" />
              <div>
                <h2>Luis Fernando de Oliveira</h2>
                <h3>Web Developer</h3>
              </div>
            </div>
          </section>
          <section id='Projects' className='info'>
            <div className='info-container'>
              <img src="https://github.com/luisfernando656.png" alt="Foto de perfil" />
              <div>
                <h2>Luis Fernando de Oliveira</h2>
                <h3>Web Developer</h3>
              </div>
            </div>
          </section>
          <section id='Contact' className='info'>
            <div className='info-container'>
              <img src="https://github.com/luisfernando656.png" alt="Foto de perfil" />
              <div>
                <h2>Luis Fernando de Oliveira</h2>
                <h3>Web Developer</h3>
              </div>
            </div>
          </section>
        </main>
      </main>
    </div>
  )
}