// import axios from "axios";

// // const instance = axios.create({

// //     baseURL: "https://api.themoviedb.org/3/",
// //     // timeout: 10000,
// //     headers: {
// //         Accept: "application/json",
// //         Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzZkMjg4ODVkYjRlOTNmZDVjZjI2NWQzZTA1MTZmNSIsIm5iZiI6MTc1Mjk1NjEwMC40MTgsInN1YiI6IjY4N2JmY2M0OTBjNzM3ZGFkNzE2OWI4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JrkUKk2ktvU93MfRbs2y8fttMs4ftEq_C3BXkeRroww"
// //     },
// // })

// const instance = axios.create({
//     baseURL: import.meta.env.VITE_TMDB_BASE_URL || "https://api.themoviedb.org/3/",
//     timeout: 10000,
//     headers: {
//         Accept: "application/json",
//         Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
//     },
// })

// // Add request interceptor for debugging
// instance.interceptors.request.use(request => {
//     console.log('Starting Request:', request.url)
//     return request
// })

// // Add response interceptor for debugging
// instance.interceptors.response.use(
//     response => {
//         console.log('Response:', response)
//         return response
//     },
//     error => {
//         console.log('Response Error:', error)
//         return Promise.reject(error)
//     }
// )

// // const axios = require('axios');

// // const options = {
// //   method: 'GET',
// //   url: 'https://imdb236.p.rapidapi.com/api/imdb/search',
// //   params: {
// //     type: 'movie',
// //     genre: 'Drama',
// //     rows: '25',
// //     sortOrder: 'ASC',
// //     sortField: 'id'
// //   },
// //   headers: {
// //     'x-rapidapi-host': 'imdb236.p.rapidapi.com'
// //   }
// // };

// // async function fetchData() {
// // 	try {
// // 		const response = await axios.request(options);
// // 		console.log(response.data);
// // 	} catch (error) {
// // 		console.error(error);
// // 	}
// // }

// // fetchData();

// export default instance;


import axios from "axios";

// Debug environment variables
console.log('🔍 Environment Variables Debug:');
console.log('Base URL:', import.meta.env.VITE_TMDB_BASE_URL);
// console.log('API Key:', import.meta.env.VITE_TMDB_API_KEY);
console.log('API Token exists:', !!import.meta.env.VITE_TMDB_API_TOKEN);

const instance = axios.create({
    baseURL: import.meta.env.VITE_TMDB_BASE_URL || "https://api.themoviedb.org/3/",
    timeout: 25000, // Increase timeout
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN || 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzZkMjg4ODVkYjRlOTNmZDVjZjI2NWQzZTA1MTZmNSIsIm5iZiI6MTc1Mjk1NjEwMC40MTgsInN1YiI6IjY4N2JmY2M0OTBjNzM3ZGFkNzE2OWI4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JrkUKk2ktvU93MfRbs2y8fttMs4ftEq_C3BXkeRroww'}`
    },
})

// Enhanced request interceptor
instance.interceptors.request.use(
    request => {
        console.log('🚀 Starting Request:', request.method?.toUpperCase(), request.url)
        console.log('🔑 Full URL:', request.baseURL + request.url)
        console.log('📋 Authorization:', request.headers.Authorization ? 'Present' : 'Missing')
        
        return request
    },
    error => {
        console.log('❌ Request Error:', error)
        return Promise.reject(error)
    }
)

// Enhanced response interceptor
instance.interceptors.response.use(
    response => {
        console.log('✅ Response Success:', response.status, response.config.url)
        console.log('📊 Data received:', response.data?.results?.length || 'No results count')
        return response
    },
    error => {
        console.log('❌ Response Error Details:', {
            message: error.message,
            code: error.code,
            status: error.response?.status,
            statusText: error.response?.statusText,
            url: error.config?.url,
            responseData: error.response?.data
        })
        return Promise.reject(error)
    }
)

export default instance;