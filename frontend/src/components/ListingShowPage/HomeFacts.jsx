import Map from "../GoolgeMap";


const HomeFacts = ({listing}) => {
        return (
            <div className="about-this-home">
                <h2>About This Home</h2>
                <div className='aboutHomeMap'>
                <Map prop ={listing} />
                </div>

            </div>
        )
}


export default HomeFacts