import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import '../app/globals.css'
import Services from './Components/Services/Services'
import Trust from './Trust/Trust'
import AdSection from './Components/AdSection/AdSection'
import Review from './Review/Review'
import CaseStudies from './Components/CaseStudies/CaseStudies'
import BuildingSoftware from './Components/BuildingSoftware/BuildingSoftware'
import Design from './Components/Design/Design'
import TechStark from './Components/TechStark/TechStark'
import Alcline from './Components/Alcline/Alcline'
import Resources from './Components/Resources/Resources'
import Hire from './Components/Hire/Hire'


export default function Home() {
  return (
    <main>
     <Navbar />
     <Banner />
     <Services />
     <Trust />
     <AdSection />
     <Review />
     <CaseStudies />
     <BuildingSoftware />
     <Design />
     <TechStark />
     <Alcline />
     <Resources />
     <Hire />
    </main>
  )
}
