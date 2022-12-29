import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getListing, fetchListing, createListing, updateListing} from '../../store/listings'
import'./HouseForm.css'


const HouseForm =() =>{
    const {listingId} = useParams()
    const dispatch = useDispatch()
    const formType = listingId ? 'Update Lisitng' : 'Create Listing'
    let listing = useSelector(getListing(listingId))

    if(formType === 'Create Listing'){
        listing ={
            agentId: '',
            baths: '',
            beds: '',
            city: '',
            description: '',
            estMoPayment: '',
            garage: '',
            greenfinEstimate: '',
            imgUrl: '',
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
            zip: ''
            
        }
    }
    useEffect(() => {
        if(listingId){
            dispatch(fetchListing(listingId))
        }
    },[listingId])
    
    const [agentId, setAgentId] = useState(listing.agentId);
    const [baths, setBaths] = useState(listing.baths);
    const [beds, setBeds] = useState(listing.beds);
    const [city, setCity] = useState(listing.city);
    const [description, setDiscription] = useState(listing.description);
    const [estMoPayment, setEstMoPayment] = useState(listing.estMoPayment);
    const [garage, setGarage] = useState(listing.garage);
    const [greenfinEstimate, setGreenfinEstimate]= useState(listing.greenfinEstimate);
    const [imgUrl, setImgUrl] = useState(listing.imgUrl);
    const [lat, setLat] = useState(listing.lat);
    const [listPrice, setListPrice] = useState(listing.listPrice);
    const [listingDate, setListingDate] = useState(listing.listingDate);
    const [lng, setLng] = useState(listing.lng);
    const [lot, setLot] = useState(listing.lot);
    const [pricePerSqft, setPricePerSqft] = useState(listing.pricePerSqft);
    const [propertyType, setPropertyType] = useState(listing.propertyType);
    const [sqft, setSqft] = useState(listing.sqft);
    const [state, setState] = useState(listing.state);
    const [status, setStatus] = useState(listing.status);
    const [streetAddress, setStreetAddress] = useState(listing.streetAddress);
    const [timeOnGreenfin, setTimeOnGreenfin] = useState(listing.timeOnGreenfin);
    const [yearBuilt, setYearBuilt] = useState(listing.yearBuilt);
    const [zip, setZip] = useState(listing.zip)
    const [errors, setErrors] = useState([])
    


    const handleSubmit =(e) => {
        e.preventDefault();
        listing ={
            ...listing,  agentId,
            baths,
            beds,
            city,
            description,
            estMoPayment,
            garage,
            greenfinEstimate,
            imgUrl,
            lat,
            listPrice,
            listingDate,
            lng,
            lot,
            pricePerSqft,
            propertyType,
            sqft,
            state,
            status,
            streetAddress,
            timeOnGreenfin,
            yearBuilt,
            zip

        }
    }







    
    return (
        <div className='house-form-container'>

            <form className='house-form'>

                <h1>{formType}</h1>
                <label >Agent Id:
                    <input type="text" value={agentId}/>
                </label>
                <label >Baths:
                    <input type="text" value={baths}/>
                </label>
                <label >Beds:
                    <input type="text" value={beds} />
                </label>
                <label >City:
                    <input type="text" value={city}/>
                </label>
                <label >Description:
                    <textarea type="text" value={description}/>
                </label>
                <label >Estimate Monthly Payment:
                    <input type="text" value={estMoPayment}/>
                </label>
                <label >Garage:
                    <input type="text" value={garage}/>
                </label>
                <label >Greenfin Estimate:
                    <input type="text" value={greenfinEstimate}/>
                </label>
                <label >Image Url:
                    <input type="text" value={imgUrl}/>
                </label>
                <label >Latitute:
                    <input type="text" value={lat}/>
                </label>
                <label >Longitute:
                    <input type="text" value={lng}/>
                </label>
                <label >List Price:
                    <input type="text" value={listPrice}/>
                </label>
                <label >Listing Date:
                    <input type="text" value={listingDate}/>
                </label>
                <label >Lot:
                    <input type="text" value={lot}/>
                </label>
                <label >Price per Sq.ft:
                    <input type="text" value={pricePerSqft}/>
                </label>
                <label >Property Type
                    <input type="text" value={propertyType}/>
                </label>
                <label >Sqft:
                    <input type="text" value={sqft}/>
                </label>
                <label >State:
                    <input type="text" value={state}/>
                </label>
                <label >Status:
                    <input type="text" value={status}/>
                </label>
                <label >Street Address:
                    <input type="text" value={streetAddress}/>
                </label>
                <label >Time on Greenfin:
                    <input type="text" value={timeOnGreenfin}/>
                </label>
                <label >Year Built:
                    <input type="text" value={yearBuilt}/>
                </label>
                <label >Zip Code
                    <input type="text" value={zip}/>
                </label>
                <button id='houseSubmitButton'>{formType}</button>



            </form>
        </div>
    )
}


export default HouseForm