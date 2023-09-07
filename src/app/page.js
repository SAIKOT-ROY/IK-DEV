import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import '../app/globals.css'
import Services from './Components/Services/Services'

export default function Home() {
  return (
    <main>
     <Navbar />
     <Banner />
     <Services />
    </main>
  )
}
