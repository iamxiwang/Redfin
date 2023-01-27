import Navigation from "../Navigation"
import IndexSearchPage from '../Search/HomeSearch'
import ListingIndexPage from "../ListingIndexPage"
import Footer from "../Footer"
import './splash.css'



const splash =() => {
   
    return (
        <>
        <div className="splash">
            <Navigation />
            <IndexSearchPage />
            <ListingIndexPage />    
            <Footer />
        </div>
        </>
    )
}

export default splash