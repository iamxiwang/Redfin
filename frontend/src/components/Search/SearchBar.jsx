import { useState,useEffect } from 'react'
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'

const SearchBar = () =>{

    const [searchValue, setSearchValue] = useState('')
    const history = useHistory();
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        history.push({
            pathname: '/search',
            state: {searchValue}
        })
        setSearchValue('')
        
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Example: zipcode 94116" 
            value={searchValue} 
            onChange={(e) => (setSearchValue(e.target.value))}/>

            <button 
            id='search-button'
            >
                <i className="fa fa-search"></i>
            </button>
        </form>
    )
}

export default SearchBar