import axios from 'axios';

const MOCK_API_BASE_URL = axios.create({
	baseURL: 'https://65bbe8f152189914b5bd50e3.mockapi.io/techtask',
});

export default MOCK_API_BASE_URL;
