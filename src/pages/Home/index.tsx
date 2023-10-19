import './styles.css'

export const Home = () => {
  return (
    <div className='home'>
      <main>
        <header>
          <div className='info'>
            <img src="https://github.com/luisfernando656.png" alt="Foto de perfil" />
            
            <div>
              <h1>Luis Fernando de Oliveira</h1>
              <h2>Web Developer</h2>
            </div>
          </div>
          <nav>
            <ul className='nav-list'>
              <li><a href="/">Home</a></li>
              <li><a href="/">Projects</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>

        </main>
      </main>
    </div>
  )
}