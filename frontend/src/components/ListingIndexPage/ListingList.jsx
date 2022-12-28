import ListingListItem from './ListingListItem'


const ListingList = ({listings}) => {

    return (
        <> 
        <h2>listinglist2</h2>
        {listings.map( listing => <ListingListItem listing ={listing}/>)}
       
        </>
    )
}


export default ListingList