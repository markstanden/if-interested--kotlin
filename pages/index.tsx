import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

function Home() {
  return (
    <>
      <Header language="python">
        <Hero />
      </Header>
      <NavBar />
    </>
  )
}

export default Home
