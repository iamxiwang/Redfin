import { useDispatch, useSelector } from 'react-redux'
import ListingList from './ListingList'
import {getListings, fetchListings} from '../../store/listings'
import { useEffect } from 'react'
import './ListingIndex.css'


const ListingIndexPage =() => {
    const dispatch = useDispatch()
    const listings = useSelector(getListings)


    useEffect( () => {
        dispatch(fetchListings())
    },[])

    return (
        <div className='listing-index'>
            <h2>index</h2>
            <ListingList listings = {listings} />
        </div>
    )
}

export default ListingIndexPage