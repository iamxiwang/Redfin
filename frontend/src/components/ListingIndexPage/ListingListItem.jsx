import { useHistory } from "react-router-dom";


const ListingListItem = ({listing}) => {
    const history = useHistory();
    // console.log(listing)
    const handleClick =() => {
        history.push(`/listings/${listing.id}`)
    }
    const price = '$' + new Intl.NumberFormat().format(listing.listPrice)
    const bds = listing.beds.toString()+'beds' + ' ' +listing.baths.toString() +'baths' + ' '+new Intl.NumberFormat().format(listing.sqft) +'sqft'

    return (
        <div className='interactive' onClick={handleClick}>
            <img id='index-card'src={listing.photoUrl[0]} />
            <div className="details">
            <h3 id='dollor'>{price}</h3>
            <div id='sqft'>
                <p id='bedbath'>{listing.beds.toString()+' '+'beds'}</p>
                <p id='bedbath'>{listing.baths.toString()+' '+'baths'}</p>
                <p id='bedbath'>{new Intl.NumberFormat().format(listing.sqft) +' '+'Sq.ft'}</p>
            </div>
            
            <p id='homeaddress'> {listing.streetAddress +listing.city +' '+ listing.state +' '+listing.zip}</p>
            </div>
        </div>
    )
}

export default ListingListItem