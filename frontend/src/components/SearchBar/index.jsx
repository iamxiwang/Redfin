import {useState} from 'react';


const searchBar = () => {
    const [searchInput, setSearchInput] = useState('') 


    const handleChange =(e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }
    return (
        <>
            <input
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />

        </>
    )
}  
export default searchBar 