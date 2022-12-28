import ListingListItem from './ListingListItem'


const ListingList = ({listings}) => {

    return (
        <> 
        {listings.map( listing => <ListingListItem listing ={listing}/>)}
        </>
    )
}


export default ListingList