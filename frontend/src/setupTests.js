//setupTest.js

// This file sets up the testing environment by configuring the global sessionStorage object to use the mocked implementation defined in sessionStorage.js. By assigning the sessionStorageMock to global.sessionStorage, it ensures that any code or components that access sessionStorage in your tests will use the mocked version.

const sessionStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
};
global.sessionStorage = sessionStorageMock;