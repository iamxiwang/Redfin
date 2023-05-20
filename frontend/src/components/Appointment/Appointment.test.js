import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; // Import Redux Thunk middleware
import Appointment from '/Users/ou/Desktop/Fullstack/redfin_clone/frontend/src/components/Appointment/index.jsx';

// Mocking and isolation: To test components in isolation, you often need to mock external dependencies or resources, such as network requests, browser APIs, or storage (like sessionStorage). This allows you to control the test environment and ensure that tests are predictable and independent of external factors.

// Redux integration: If your app uses Redux for state management, integrating Redux into your tests requires additional setup. This involves creating mock stores, setting up Redux middleware, and mocking Redux actions and reducers.



const mockStore = configureStore([thunk]);

const listingData = {
        agentId: 2,
        baths: 4,
        beds: 4,
        city: "San Francisco",
        createdAt: "May 16, 2023",
        description: "Stunning Cape Cod residence on a coveted Cow Hollow block, just steps to the many shops and restaurants of Union Street and Chestnut Street. This exceptional home has been superbly renovated, with fine detailing throughout.",
        estMoPayment: 29735,
        greenfinEstimate: 4643112,
        id: 1,
        lat: 37.7386613385249,
        listPrice: 4600000,
        lng: -122.46621743111069,
        lot: 5497,
        photoUrl: [
        'https://greenfin-dev.s3.us-west-1.amazonaws.com/lp…52dc853abb24e3036d038e8d63d5884cfeb126b10fc261584',
        'https://greenfin-dev.s3.us-west-1.amazonaws.com/s7…f0925fb9a3e7e7ee43b2bee75012c87f927556f945fc965e0',
        'https://greenfin-dev.s3.us-west-1.amazonaws.com/qw…b9ffcae8ac5c6d77add5f44e19dea2d90329926cc2f942a1b'
        ],
        pricePerSqft: 1182,
        propertyType: "Single Family Residential",
        sqft: 3891,
        state: "CA",
        status: "Open house SUN 12pm 50 2 pm",
        streetAddress: "30 Santa Clara Ave,",
        yearBuilt: 1925,
        zip: 94127,
};




describe('Appointment', () => {
    it('submits form successfully when all fields are filled', () => {
        const store = mockStore({
            session: {
            user: { id: 1 },
            },
        });
    
        render(
            <Provider store={store}>
            <BrowserRouter>
                <Appointment listing={listingData} />
            </BrowserRouter>
            </Provider>
        );
    
        const tourTimeInput = screen.getByLabelText('DateTime');
        const messageInput = screen.getByLabelText('Message');
        const submitButton = screen.getByText('Schedule Tour');
    
        fireEvent.change(tourTimeInput, { target: { value: '2023-05-17T10:00' } });
        fireEvent.change(messageInput, { target: { value: 'This is a test message.' } });
    
        fireEvent.click(submitButton);
    
        // Assert that the form is submitted successfully or check other expected behavior
        });
    
        // Add more tests as needed...
});