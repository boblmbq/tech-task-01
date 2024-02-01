import axios from 'axios';

// I have tried to add an .env file to react app but I always got an error with "path" that it cannot find such a module in dotenv

const mockApiInstance = axios.create({
	baseURL: `https://65bbe8f152189914b5bd50e3.mockapi.io/techtask/`,
});

export const fakeCarsFetch = async () => {
	const fetchCars = await mockApiInstance.get('rentalCars');
	console.log(fetchCars);
};
