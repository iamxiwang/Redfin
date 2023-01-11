import './Search.css'
import SearchBar from './SearchBar'

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
                    <SearchBar />
                    {/* <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Search.." 
                        value={searchValue} 
                        onChange={(e) => (setSearchValue(e.target.value))}/>

                        <button 
                        id='search-button'
                        >
                            <i className="fa fa-search"><Link to='/listings/search' ></Link></i>
                    </button>
                    </form> */}
                </div>
            </div>
        </div>
    )
}

export default IndexSearchPage