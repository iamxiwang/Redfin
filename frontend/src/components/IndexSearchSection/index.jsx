import './IndexSearch.css'

const IndexSearchPage =() => {

    return (
        <div className="home-search">
            <div id='inner-search'>
                <h1>Find homes first</h1>
                <h1>Tour homes fast</h1>
                <div className='tab'>
                    <a href="">Buy</a>
                    <a href="">Rent</a>
                    <a href="">Sell</a>
                    <a href="">Morgage</a>
                    <a href="">Home Estimate</a>
                </div>
                <div className="search-container">
                    <form >
                    <input type="text" placeholder="Search.." name="search" />
                    <button id='search-button'type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default IndexSearchPage