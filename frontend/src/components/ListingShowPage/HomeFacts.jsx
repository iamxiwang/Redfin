import Map from "../GoolgeMap";
import SearchMap from "../GoolgeMap/SearchMap";


const HomeFacts = ({listing}) => {
        return (
            <div className="about-this-home">
                <h2>About This Home</h2>
                <div className='aboutHomeMap'>
                {/* <Map listing ={listing} /> */}
                <SearchMap listings={[listing]} />
                </div>

            </div>
        )
}


export default HomeFacts