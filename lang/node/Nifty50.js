const axios = require('axios');

async function getNiftyValue() {
    const baseUrl = 'https://www.nseindia.com';
    const apiUrl = 'https://www.nseindia.com/api/allIndices';

    // Desktop browser headers are mandatory
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Referer': 'https://www.nseindia.com/'
    };

    try {
        // 1. Initialize session by hitting the home page
        const initialResponse = await axios.get(baseUrl, { headers });
        
        // 2. Extract cookies from the response
        const cookies = initialResponse.headers['set-cookie'].join('; ');

        // 3. Make the actual API call using those cookies
        const response = await axios.get(apiUrl, {
            headers: {
                ...headers,
                'Cookie': cookies // This is the "Key" to bypass 403
            }
        });

        const nifty50 = response.data.data.find(idx => idx.index === "NIFTY 50");
        
        console.log("--- NSE Live Data ---");
        console.log(`Index: ${nifty50.index}`);
        console.log(`Last Price: ${nifty50.last}`);
        console.log(`Change: ${nifty50.variation} (${nifty50.percentChange}%)`);

    } catch (error) {
        if (error.response && error.response.status === 403) {
            console.error("Access Denied (403): NSE is still blocking the request. Try changing your User-Agent or waiting a few minutes.");
        } else {
            console.error("Error:", error.message);
        }
    }
}

getNiftyValue();