import { useDispatch, useSelector } from 'react-redux'
import ListingList from './ListingList'
import {getListings, fetchListings} from '../../store/listings'
import { useEffect } from 'react'
import './ListingIndex.css'


const ListingIndexPage =() => {
    const dispatch = useDispatch()
    const listings = useSelector(getListings)
    console.log(listings)

    useEffect( () => {
        dispatch(fetchListings())
    },[dispatch]) //[]

    return (
    <div className='userfeed'>
        <div className='FeedHomeSection'>
            <h1>Feed</h1>
            <div className='ItemPikerPill'>
                <div id='ItemPikerPill-left'>
                    <button id='v2-1'>All</button>
                    {/* <button id='v2'>New</button>
                    <button id='v2'>Favorites</button>
                    <button id='v2'>Price Change</button>
                    <button id='v2'>Open House</button>
                    <button id='v2'>Insights</button>
                    <button id='v2'>Sold</button>
                    <button id='v2'>Status Change</button> */}
                </div>
                <div id='ItemPikerPill-right'>
                    {/* <i className="fa-solid fa-cog fa-2x"></i> */}
                </div>
            </div>
            <div className='row-flex'>
            <ListingList listings = {listings} />
            </div>
        </div>
    </div>
    )
}

export default ListingIndexPage