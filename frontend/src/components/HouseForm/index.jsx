import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getListing, fetchListing, createListing, updateListing} from '../../store/listings'
import Navigation from '../HeadBar';
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
    },[dispatch,listingId])


    const [agentId, setAgentId] = useState(listing.agentId);
    const [baths, setBaths] = useState(listing.baths);
    const [beds, setBeds] = useState(listing.beds);
    const [city, setCity] = useState(listing.city);
    const [description, setDescription] = useState(listing.description);
    const [estMoPayment, setEstMoPayment] = useState(listing.estMoPayment);
    const [garage, setGarage] = useState(listing.garage);
    const [greenfinEstimate, setGreenfinEstimate]= useState(listing.greenfinEstimate);
    const [imgUrl, setImgUrl] = useState(listing.imgUrl);
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
    


    const handleSubmit =(e) => {
        e.preventDefault();
        setErrors([]);
        listing ={
            id:listingId,
            agent_id: agentId,
            baths: baths,
            beds: beds,
            city: city,
            description: description,
            est_mo_payment: estMoPayment,
            garage: garage,
            greenfin_estimate: greenfinEstimate,
            img_url: imgUrl,
            lat: lat,
            list_price: listPrice,
            lng: lng,
            lot: lot,
            price_per_sqft: pricePerSqft,
            property_type: propertyType,
            sqft: sqft,
            state: state,
            status: status,
            street_address: streetAddress,
            year_built: yearBuilt,
            zip: zip

        }
        console.log(agentId,state)
        if(formType === 'Create Listing'){
            dispatch(createListing(listing))
        }else{
            dispatch(updateListing(listing))
        }
    }


    return (
        <>
        <Navigation />
        <div className='house-form-container'>

            <form className='house-form' onSubmit={handleSubmit}>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <h1>{formType}</h1>
                <label >Agent Id:
                    <input type="number" value={agentId} 
                    onChange={(e) => setAgentId(e.target.value)} />
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
                <label >Estimate Monthly Payment:
                    <input type="number" value={estMoPayment}
                    onChange={(e) => setEstMoPayment(e.target.value)}  />
                </label>
                <label >Garage:
                    <input type="number" value={garage}
                    onChange={(e) => setGarage(e.target.value)}  />
                </label>
                <label >Greenfin Estimate:
                    <input type="number" value={greenfinEstimate}
                    onChange={(e) => setGreenfinEstimate(e.target.value)}  />
                </label>
                <label >Image Url:
                    <input type="text" value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}  />
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
                <button id='houseSubmitButton'>{formType}</button>



            </form>
        </div>
        </>
    )
}


export default HouseForm