import Navigation from "../Navigation"
import IndexSearchSection from '../IndexSearchSection'
import ListingIndexPage from "../ListingIndexPage"
import './splash.css'



const splash =() => {

    return (
        <div className="splash">
            <Navigation />
            <IndexSearchSection />
            <ListingIndexPage />
            
        </div>
    )
}

export default splash