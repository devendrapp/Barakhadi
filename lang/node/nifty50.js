'use strict';
const axios = require('axios');

async function fetchNifty() {
    const url = "https://www.nseindia.com/api/allIndices";
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept': 'application/json'
    };

    const response = await axios.get(url, { headers });
    console.log( response.data.data.find(i => i.index === "NIFTY 50").last);
    return response.data.data.find(i => i.index === "NIFTY 50").last;
}


fetchNifty();