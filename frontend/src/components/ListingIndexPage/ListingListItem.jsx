import { useHistory } from "react-router-dom";


const ListingListItem = ({listing}) => {
    const history = useHistory();
    
    const handleClick =() => {
        history.push(`/listings/${listing.id}`)
    }

    return (
        <div onClick={handleClick}>
            <h2> {listing.streetAddress}</h2>
        </div>
    )
}

export default ListingListItem