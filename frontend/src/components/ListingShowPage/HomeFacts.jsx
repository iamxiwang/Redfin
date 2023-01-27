import TimeonGreenfin from "./TimeCalculator";
import SearchMap from "../GoogleMap/SearchMap";


const HomeFacts = ({listing}) => {
        const dates = TimeonGreenfin(listing.createdAt)
        const zoom = 11;
        const center = {lat: listing.lat, lng:listing.lng}
        return (
            <div className="about-this-home">
                <h2>About This Home</h2>
                <div className="listing-description">
                <span>{listing.description}</span>
                </div>
                <h3>Home Facts</h3>
                <div className="keydetails-list">
                    <div className="keydetail">
                        <span className="column-name-gray">Status1</span>
                        <span className="text-right">{listing.status}</span>
                    </div>

                    <div className="keydetail">
                        <span className="column-name-gray">Time on Redfin2</span>
                        <span className="text-right">{dates} days</span>
                    </div>
                    <div className="keydetail">
                        <span className="column-name-gray">Property Type</span>
                        <span className="text-right">{listing.propertyType}</span>
                    </div>
                    <div className="keydetail">
                        <span className="column-name-gray">Year Built</span>
                        <span className="text-right">{listing.yearBuilt}</span>
                    </div>
                    <div className="keydetail">
                        <span className="column-name-gray">Community</span>
                        <span className="text-right">{listing.city}</span>
                    </div>
                    <div className="keydetail">
                        <span className="column-name-gray">Lot Size</span>
                        <span className="text-right">{listing.lot}</span>
                    </div>
                    </div>

                    <h3>Price Insights</h3>
                    <div className="keydetails-list">
                            <div className="keydetail">
                                <span className="column-name-gray">List Price</span>
                                <span className="text-right">$ {new Intl.NumberFormat().format(listing.listPrice)}</span>
                            </div>
                            <div className="keydetail">
                                <span className="column-name-gray">Est. Mo. Payment</span>
                                <span className="text-right">$ {new Intl.NumberFormat().format(listing.estMoPayment)}</span>
                            </div>
                            <div className="keydetail">
                                <span className="column-name-gray">Greenfin Estimate</span>
                                <span className="text-right">$ {new Intl.NumberFormat().format(listing.greenfinEstimate)}</span>
                            </div>
                            <div className="keydetail">
                                <span className="column-name-gray">Price/Sq.Ft</span>
                                <span className="text-right">$ {new Intl.NumberFormat().format(listing.pricePerSqft)}</span>
                            </div>
                    </div>


                
                <div className='aboutHomeMap'>
                {/* <Map listing ={listing} /> */}
                <SearchMap listings={[listing]} zoom={zoom} centerX={center}/>
                </div>

            </div>
        )
}


export default HomeFacts