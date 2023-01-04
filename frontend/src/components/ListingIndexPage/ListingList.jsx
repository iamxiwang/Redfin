import ListingListItem from './ListingListItem'


const ListingList = ({listings}) => {

    return (
        <> 
        {listings.map( (listing, i) => <ListingListItem key={i} listing ={listing}/>)}
        </>
    )
}


export default ListingList