# Greenfin
### [Greenfin live link](https://greenfin.onrender.com/)

## Background

Greenfin is a clone of [Redfin.com](https://www.redfin.com/). Redfin is the the country's #1 real estate brokerage site. It help people find a place to live with brokerage, rentals, lending, title insurance, and renovations services. Greenfin is a mini version of redfin that only includes buying and selling real estate section.
This project utilized Rails and postgreSQL for the backend, React/Redux and CSS3 for the frontend.

##  Technologies Used!
  <img align="left" alt="javascript" width="30px" src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/javascript.svg">
<img align="left" alt="html5" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png">
<img align="left" alt="css3" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png">
<img align="left" alt="react" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png">
<img align="left" alt="node.js" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png">
<img align="left" alt="ruby" width="30px" src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/ruby.svg">
<img align="left" alt="postgresql" width="30px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png">
<br>
<br>

## Selected Features and Development
### Splash Page

![Jan-30-2023 21-48-07](https://user-images.githubusercontent.com/104051053/215676668-76d711fc-45d8-46e0-84c8-1e8226ed2212.gif)

<br />

### Search

I created a thunk action in Redux store. When users using search bar it will hit the backend routes and send the result to frontend.
```js
export const searchListings = (searchValue) => async(dispatch) => {
    const res = await csrfFetch(`/api/listings/search?query=${searchValue}`)

    if(res.ok){
        const data = await res.json()
        dispatch(setListings(data))
    }
}

```
Users can search for listings using "search bar". 
```js
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
            <input type="text" placeholder="Search.." 
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
```
<br />

### Appointment
![appointment](https://user-images.githubusercontent.com/104051053/215684753-8ad47988-7501-4094-8943-e1e93049dab5.gif)

   + In the listing show page, I made a appointment form for logged in user to make an appointment with agent.
   
   ```js
   const Appointment =({listing}) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [tourTime, setTourTime] = useState('')
    const [message, setMessage] = useState('')
    const user = useSelector((state) => (state.session.user))


    const handleSubmit =(e) => {
        e.preventDefault()
        const appointment = {
            agent_id: listing.agentId,
            user_id: user.id,
            listing_id: listing.id,
            tour_time: tourTime,
            message:message,
            cancelled: false
        }
        dispatch(createAppointment(appointment))
        setTourTime('')
        setMessage('')
        history.push('/mygreenfin/tours')
    }

    return (
        <>
        <div className= 'appointment-container'> 
            <form onSubmit={handleSubmit} className='appointment-form' >
                <h2>Go tour this home</h2>
                <label >DateTime
                    <input 
                    value ={tourTime} 
                    onChange={(e) => setTourTime(e.target.value)}
                    type="datetime-local" />
                </label>
                <label >Message
                    <input 
                    value={message} 
                    onChange={(e)=> setMessage(e.target.value)}
                    type="text"  />
                </label>
                <button className='scheduleTourBtn'>Schedule tour</button>
            </form>
        
        </div>

        </>
    )
}

```

<br>


### Comment 

as a logged in user can create/edit/delete their own comments. Without log in user wont see the comment section

![Jan-14-2023 12-50-56](https://user-images.githubusercontent.com/104051053/212496230-6e1cf572-b7cf-4cc1-ac2f-e7364509548e.gif)

