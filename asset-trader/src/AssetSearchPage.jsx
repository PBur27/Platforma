import React, { useState } from 'react';
import AssetSearchForm from './components/AssetSearchForm';
import { Container } from 'react-bootstrap';
import AssetBar from './components/AssetBar';

function AssetSearchPage() {
  const [assets, setAssets] = useState([]);

  const sendSearchData = (searchParams) => {
    console.log('Search Params:', searchParams);

    fetch('http://localhost:3000/db')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((fetchedAssets) => {
        const filteredAssets = fetchedAssets.filter((asset) => {
          return (
            (searchParams.name ? asset.name.toLowerCase().includes(searchParams.name.toLowerCase()) : true) &&
            (searchParams.author ? asset.author.toLowerCase().includes(searchParams.author.toLowerCase()) : true) &&
            (searchParams.tags ? asset.tags.toLowerCase() === searchParams.tags.toLowerCase() : true)
          );
        });

        setAssets(filteredAssets);
      })
      .catch((error) => {
        console.error('Error fetching assets:', error);
      });
  };

  return (
    <Container>
      <h1>
        Search for Assets
      </h1>
      <AssetSearchForm onSearch={sendSearchData} />
      <AssetBar assets={assets} />
    </Container>
  );
}

export default AssetSearchPage;