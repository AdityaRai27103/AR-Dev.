import { Footer , HomeHeaderBar, HomeHeroSection, Sliders } from "../components"
import { Navbar } from "../components"

export default function Career() {
    return(
        <main className="main-page homepage">
          <HomeHeaderBar/>
          <Navbar/>
          <HomeHeroSection/>
          <Sliders/>
          <Footer/>
      </main> 
    )
}

{/*
        <Mainbanner />
        <Sliders />
        <Servicemodal />
        <Servicearea />
        <Newtabs />
        <About />
        <Testimonialslider />
        <Ourwork />
        <News />
        <Feature />
        <Countact />*/}