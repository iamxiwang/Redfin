import { useHistory } from "react-router-dom";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getLikes, fetchLikes, createLike,deleteLike, clearLikes } from "../../store/like";



const ListingListItem = ({listing}) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const user = useSelector((state) => (state.session.user))
    const alllikes = useSelector(getLikes)

    let userLikes = useSelector(getLikes).map((like) => like.listingId)
    
    const [isLiked, setLike] = useState(userLikes.includes((listing.id)))
    console.log(userLikes, isLiked)


    useEffect(
        () => {
            //dependency array is empty ([]), the effect will only run once, after the initial render. 
            //If the dependency array contains values ([user, dispatch] , the effect will run whenever any of the values in the dependency array change. This includes both the initial render and subsequent re-renders when the specified values change.
            // user bandary make sure it has user.id, otherwise it will be be null.id
            if(user){
                dispatch(fetchLikes(user.id))
            }else {
                setLike(null)
                dispatch(clearLikes())
            }
        }
    ,[user, dispatch])

    useEffect(() => {
        setLike(userLikes.includes(listing.id));
    }, [userLikes, listing.id]);

    const handleClick =() => {
        history.push(`/listings/${listing.id}`)

    }


    let likeId
    for (let i = 0; i < alllikes.length; i++){
        if(alllikes[i].listingId === listing.id){
            likeId = alllikes[i].id
        }
    }

    const handleHeart = async (e) => {
        e.stopPropagation();
        if(!isLiked && user){
            const newLike = {
                listing_id: listing.id,
                user_id: user.id
            }
            await dispatch(createLike(newLike))
            setLike(true)
        }else if(isLiked && user){
            // const likeId = alllikes[listing.id]?.id
            await dispatch(deleteLike(likeId))
            setLike(false)
        }
    }

    const price = '$' + new Intl.NumberFormat().format(listing.listPrice)
    const bds = listing.beds.toString()+'beds' + ' ' +listing.baths.toString() +'baths' + ' '+new Intl.NumberFormat().format(listing.sqft) +'sqft'

    return (
        <div className='interactive' onClick={handleClick}>
            <img id='index-card'src={listing.photoUrl[0]} alt=' ' />
            <i className={`fas fa-heart ${isLiked ? "liked" : ""}`}
                onClick ={handleHeart}
            >
            </i>
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