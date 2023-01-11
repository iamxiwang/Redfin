import { useSelector,useDispatch } from "react-redux"
import { getListings, searchListings } from "../../store/listings"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import SearchMap from "../GoolgeMap/SearchMap"
import Navigation from "../HeadBar"
import ListingList from "../ListingIndexPage/ListingList"



const SearchResult =() => { 

    const dispatch = useDispatch()
    const location = useLocation()
    const listings = useSelector(getListings)
    console.log(listings)
    const {searchValue} = location.state
    const zoom = 13

    useEffect( ()=>{
        dispatch(searchListings(searchValue))
    },[searchValue])

    if(Object.keys(listings).length === 0){
        return (
            <h1>No data find</h1>
        )
    }else{

        const firstReturedListing = listings[(Object.keys(listings)[0])]
        const center = {lat: firstReturedListing.lat,lng:firstReturedListing.lng}
        return (
        <>
        <Navigation />
        <div className="search-result-page">
            <div className="search-map">
                    {/* pass mutiple props to component */}
                    <SearchMap listings={listings} zoom={zoom} center={center} />
            </div>

            <div className="filtered-listings">
                <h1>{searchValue} Homes for sale</h1>    

                <div className="custom-filter-label">
                    <button id='v3'>For sale</button>
                    <button>Price</button>
                    <button>Home type</button>
                    <button>Beds/Baths</button>
                    <button>All filters</button>
                </div >
                <div className='row-flex'>
                <ListingList listings={listings} />
                </div>
            </div>
        </div>
        </>
        )
    }
}

export default SearchResult