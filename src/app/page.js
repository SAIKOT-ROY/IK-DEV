import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import '../app/globals.css'
import Services from './Components/Services/Services'
import Trust from './Trust/Trust'
import AdSection from './Components/AdSection/AdSection'

export default function Home() {
  return (
    <main>
     <Navbar />
     <Banner />
     <Services />
     <Trust />
     <AdSection />
    </main>
  )
}
