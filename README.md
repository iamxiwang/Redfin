# Greenfin
### [Greenfin live link](https://greenfin.onrender.com/)
<br>

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

![480splash](https://user-images.githubusercontent.com/104051053/212393835-aeba1319-cd2a-4796-a323-205027da7b13.gif)

### Search

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

### Appointment

   + create appointment
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

