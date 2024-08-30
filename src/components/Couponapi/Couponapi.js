import React, { useState, useEffect } from 'react';

const LinkMyDealsOffers = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      
        const apiUrl = "https://feed.linkmydeals.com/getOffers/?API_KEY=978581590d785b3bd94e4074e7fe661c&incremental=1&last_extract=1448536485";

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error();
                }
                return response.text(); 
            })
            .then(csvData => {
                const parsedData = parseCSV(csvData);
                setOffers(parsedData);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const parseCSV = (csvData) => {
        const lines = csvData.split("\n");
        const headers = lines[0].split(",");
        const rows = lines.slice(1).map(line => {
            const values = line.split(",");
            return headers.reduce((obj, header, index) => {
                obj[header] = values[index];
                return obj;
            }, {});
        });
        return rows;
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>LinkMyDeals Offers</h1>
            <ul>
                {offers.map((offer, index) => (
                    <li key={index}>
                        <img src={offer.title} style={{ width: '100px', height: '100px' }} />
                        <p>{} - {}</p>
                        <a  target="_blank" rel="noopener noreferrer">View Offer</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LinkMyDealsOffers;