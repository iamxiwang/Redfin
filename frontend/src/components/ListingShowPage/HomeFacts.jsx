import Map from "../GoolgeMap";
import SearchMap from "../GoolgeMap/SearchMap";


const HomeFacts = ({listing}) => {
        const zoom = 11;
        const center = {lat: listing.lat, lng:listing.lng}
        return (
            <div className="about-this-home">
                <h2>About This Home</h2>
                <div className='aboutHomeMap'>
                {/* <Map listing ={listing} /> */}
                <SearchMap listings={[listing]} zoom={zoom} center={center}/>
                </div>

            </div>
        )
}


export default HomeFacts