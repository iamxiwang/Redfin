import Navigation from "../Navigation"
import IndexSearchSection from '../Search/HomeSearch'
import ListingIndexPage from "../ListingIndexPage"
import Footer from "../Footer"
import './splash.css'



const splash =() => {
   
    return (
        <>
        <div className="splash">
            <Navigation />
            <IndexSearchSection />
            <ListingIndexPage />    
            <Footer />
        </div>
        </>
    )
}

export default splash