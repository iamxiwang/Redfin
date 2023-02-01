import { useState, useEffect,useRef } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getListing, fetchListing, createListing, updateListing} from '../../store/listings'
import Navigation from '../HeadBar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import'./HouseForm.css'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const HouseForm =() => {
    const {listingId} = useParams()
    const dispatch = useDispatch()
    const history = useHistory();
    const fileRef = useRef(null);
    const formType = listingId ? 'Update Lisitng' : 'Create Listing'
    let listing = useSelector(getListing(listingId))
    const user= useSelector(state => state.session.user)


    if(formType === 'Create Listing'){
        listing ={
            baths: '',
            beds: '',
            city: '',
            description: '',
            estMoPayment: '',
            greenfinEstimate: '',
            lat: '',
            listPrice: '',
            listingDate: '',
            lng: '',
            lot:'',
            pricePerSqft: '',
            propertyType: '',
            sqft: '',
            state: '',
            status: '',
            streetAddress: '',
            timeOnGreenfin: '',
            yearBuilt: '',
            zip: '',
            photoFiles: [], // S3 feature
            photoUrl: []  // S3 feature
            
        }
    }
    useEffect(() => {
        if(listingId){
            dispatch(fetchListing(listingId))
        }
    },[dispatch,listingId])

    const [photoFiles, setPhotoFiles] = useState([]); //S3 feature
    const [photoUrl, setPhotoUrl] = useState(listing?.photoUrl) //S3 feature
    const [baths, setBaths] = useState(listing.baths);
    const [beds, setBeds] = useState(listing.beds);
    const [city, setCity] = useState(listing.city);
    const [description, setDescription] = useState(listing.description);
    const [estMoPayment, setEstMoPayment] = useState(listing.estMoPayment);
    const [greenfinEstimate, setGreenfinEstimate]= useState(listing.greenfinEstimate);
    const [lat, setLat] = useState(listing.lat);
    const [listPrice, setListPrice] = useState(listing.listPrice);
    const [lng, setLng] = useState(listing.lng);
    const [lot, setLot] = useState(listing.lot);
    const [pricePerSqft, setPricePerSqft] = useState(listing.pricePerSqft);
    const [propertyType, setPropertyType] = useState(listing.propertyType);
    const [sqft, setSqft] = useState(listing.sqft);
    const [state, setState] = useState(listing.state);
    const [status, setStatus] = useState(listing.status);
    const [streetAddress, setStreetAddress] = useState(listing.streetAddress);
    const [yearBuilt, setYearBuilt] = useState(listing.yearBuilt);
    const [zip, setZip] = useState(listing.zip)
    const [errors, setErrors] = useState([])
    


    const handleSubmit = async (e) => {
        e.preventDefault();

        fileRef.current.value = null;

        const formData = new FormData();
        setErrors([]);

        // formData.append('listing[id]',listingId)
        formData.append('listing[agent_id]', user.id)
        formData.append('listing[baths]', baths)
        formData.append('listing[beds]',beds)
        formData.append('listing[city]',city)
        formData.append('listing[description]',description)
        formData.append('listing[est_mo_payment]',estMoPayment)
        formData.append('listing[greenfin_estimate]',greenfinEstimate)
        formData.append('listing[lat]',lat)
        formData.append('listing[list_price]',listPrice)
        formData.append('listing[lng]',lng)
        formData.append('listing[lot]',lot)
        formData.append('listing[price_per_sqft]',pricePerSqft)
        formData.append('listing[property_type]',propertyType)
        formData.append('listing[sqft]',sqft)
        formData.append('listing[state]',state)
        formData.append('listing[status]',status)
        formData.append('listing[street_address]',streetAddress)
        formData.append('listing[year_built]',yearBuilt)
        formData.append('listing[zip]',zip)


        if (photoFiles.length !== 0) {
            photoFiles.forEach(photo => {
                formData.append('listing[photos][]', photo);  
            })
        }
// promise base , .then() es5 style /
//axios API
        if(formType === 'Create Listing'){
            return dispatch(createListing(formData))
            .then(() => history.push("/"))
            .catch(async (res) => {
                let data;
                try {
                  // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                  data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) {
                    setErrors(data.errors)
                }
                else if (data) {
                    setErrors([data])
                }
                else {
                    setErrors([res.statusText])
                }
            });
        }else{
            dispatch(updateListing(formData, listingId))

            .then(() => history.push(`/listings/${listingId}`))
            .catch(async (res) => {
                let data;
                try {
                  // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                  data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) {
                    setErrors(data.errors)
                }
                else if (data) {
                    setErrors([data])
                }
                else {
                    setErrors([res.statusText])
                }
            });
        }

        fileRef.current.value = null;
    }

    const handleFile = ({ currentTarget }) => {
        // console.log([...currentTarget.files])

        Array.from(currentTarget.files).forEach((file)=>{
                if (file) {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.onload = () => {
                        setPhotoFiles(prev => [...prev, file]);
                        console.log('work above')
                        setPhotoUrl(prev => [...prev, fileReader.result]);
                };
            }
            })
    }

    const preview = photoUrl ? photoUrl?.map(
        (photo,i) => {
            return <div key ={i}><img className="single-image-style" src={photo} alt=""  /></div> }) : null;
    

    return (

        <div className='new-listing-page'>
        {!user? <h1> Please log in to Modify listing</h1> : 
        <div>
        <Navigation />
        <div className='house-form-container'>
                <div className="image-preview">
                    {!photoUrl?.length ? null : 
                    <>
                        <h1>Uploaded images</h1>
                    
                        <Carousel responsive={responsive}>
                                {preview}
                        </Carousel>
                    </>
                    }
                </div>

            <form className='house-form' onSubmit={handleSubmit}>
                <ul className="listing-form-errors" >
                        {errors?.map(error => <li key={error}>{error}</li>)}
                </ul>
        
                <h1>{formType}</h1>

                <div className='form-label-input'>
                    <div className='form-column'>
                    <label >Listing Image
                        <input 
                            type="file" 
                            ref={fileRef}
                            onChange={handleFile} 
                            multiple 
                        />
                    </label>

                    <label >Baths:
                        <input type="number" value={baths}
                        onChange={(e) => setBaths(e.target.value)} />
                    </label>
                    <label >Beds:
                        <input type="number" value={beds}
                        onChange={(e) => setBeds(e.target.value)}  />
                    </label>
                    <label >City:
                        <input type="text" value={city}
                        onChange={(e) => setCity(e.target.value)}  />
                    </label>
                    <label >Description:
                        <textarea type="text" value={description}
                        onChange={(e) => setDescription(e.target.value)}  />
                    </label>
                    </div>

                    <div className='form-column'>
                        <label >Estimate Monthly Payment:
                            <input type="number" value={estMoPayment}
                            onChange={(e) => setEstMoPayment(e.target.value)}  />
                        </label>
                        <label >Greenfin Estimate:
                            <input type="number" value={greenfinEstimate}
                            onChange={(e) => setGreenfinEstimate(e.target.value)}  />
                        </label>
                        <label >Latitute:
                            <input type="number" value={lat}
                            onChange={(e) => setLat(e.target.value)}  />
                        </label>
                        <label >Longitute:
                            <input type="number" value={lng}
                                onChange={(e) => setLng(e.target.value)}  />
                        </label>
                        <label >List Price:
                            <input type="number" value={listPrice}
                                onChange={(e) => setListPrice(e.target.value)}  />
                        </label>
                        <label >Lot:
                            <input type="number" value={lot}
                                onChange={(e) => setLot(e.target.value)}  />
                        </label>
                        <label >Price per Sq.ft:
                            <input type="number" value={pricePerSqft}
                                onChange={(e) => setPricePerSqft(e.target.value)}  />
                        </label>
                    </div>

                    <div className='form-column'>
                        <label >Property Type
                            <input type="text" value={propertyType}
                                onChange={(e) => setPropertyType(e.target.value)}  />
                        </label>
                        <label >Sqft:
                            <input type="number" value={sqft}
                                onChange={(e) => setSqft(e.target.value)}  />
                        </label>
                        <label >State:
                            <input type="text" value={state}
                                onChange={(e) => setState(e.target.value)}  />
                        </label>
                        <label >Status:
                            <input type="text" value={status}
                                onChange={(e) => setStatus(e.target.value)}  />
                        </label>
                        <label >Street Address:
                            <input type="text" value={streetAddress}
                                onChange={(e) => setStreetAddress(e.target.value)}  />
                        </label>
                        <label >Year Built:
                            <input type="number" value={yearBuilt}
                                onChange={(e) => setYearBuilt(e.target.value)}  />
                        </label>
                        <label >Zip Code
                            <input type="number" value={zip}
                                onChange={(e) => setZip(e.target.value)}  />
                        </label>
                    </div>

                </div>
               

               
            <button id='houseSubmitButton'>{formType}</button>
            </form>
       
        </div>
        </div>
        }
        </div>
        
    )
}


export default HouseForm