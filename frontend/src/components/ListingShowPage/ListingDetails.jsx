import HouseForm from "../HouseForm"
import Map from "../GoolgeMap";
import Appointment from "../Appointment";
import { useState } from "react";


const ListingDetails = ({listing}) => {
        const[showForm, setShowForm] = useState(false)

        const priceValue = '$' + new Intl.NumberFormat().format(listing.listPrice)
        const bedValue = listing.beds.toString() 
        const bathValue = listing.baths.toString()
        const sqftValue = new Intl.NumberFormat().format(listing.sqft)
        const estMonthlyPayment = 'Est. '+ '$' + new Intl.NumberFormat().format(listing.estMoPayment) + '/mo'



        return (
            <div className="single-listing-container">
            <div className="subheader">subheader</div>
            <div className="img-container">
                <img id ='single-listing-img' src={listing.photoUrl[0]} alt="" />
                <div id='img-right'>
                    <img src={listing.photoUrl[1]} alt="" />
                    <img src={listing.photoUrl[2]} alt="" />
                </div>
            </div>
            <div className="listing-main-stats">
                <div className='abp-address'>
                    <div id='bold-address'>{listing.streetAddress}</div>
                    <div id='sub-text'>{listing.city}</div>
                    <div id='sub-text'>{listing.state}</div>
                    <div id='sub-text'>{listing.zip}</div>
                </div>
                <div className="middle-combine">
                    <div className="middle-meat">
                        <div id='abp-price'>
                        <h2>{priceValue}</h2>
                        <div  id='abp-string'>{estMonthlyPayment}</div>
                        </div>
                        <div id='abp-beds'>
                            <div id='abp-number'>{bedValue}</div>
                            <div id='abp-string'>Beds</div>
                        </div>

                        <div id='abp-baths'>
                            <div id='abp-number'>{bathValue}</div>
                            <div id='abp-string'>Baths</div>
                        </div>
                        <div id='abp-sqft'>
                            <div id='abp-number'>{sqftValue}</div>
                            <div id='abp-string'>Sqft</div>
                        </div>
                        <div className="rightSmallMap">
                            <Map prop ={listing}/>
                        </div>
                        
                    </div>
                    <Appointment />
                </div>
        </div>
        {/* <button id='trigger'  
        onClick={() => ( showForm ? setShowForm(false) : setShowForm(true))}>Update Listing</button>
        <br /> */}
        { showForm &&
        <HouseForm />
        }
        </div>
        )
}

export default ListingDetails