import Equipment from "@/components/equipment/equipment";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import AdvantagesList from "@/components/items/items";
import Services from "@/components/services/services";
import Solutions from "@/components/solutions/solutions";
import About from "@/components/about/about";
import Map from "@/components/map/map";
import FeedbackForm from "@/components/form/form";
import Partners from "@/components/partners/partners";
import LatestNews from "@/components/news/news";

export default function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <Equipment/>
        <Solutions/>
        <Services/>
        <AdvantagesList/>
        <About/>
        <Map/>
        <Partners/>
        <FeedbackForm/>
        <LatestNews/>
        <Footer/>
    </>
  ) 
}