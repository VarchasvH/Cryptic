import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import Header from "../components/Common/Header/index.jsx";

const CoinPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [marketData, setMarketData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const [coinResponse, marketResponse] = await Promise.all([
          axios.get(`https://api.coincap.io/v2/assets/${id}`),
          axios.get(
            `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
          ),
        ]);

        if (coinResponse.data && coinResponse.data.data) {
          setCoinData(coinResponse.data.data);
        } else {
          console.error(
            "Unexpected response structure for coin data:",
            coinResponse.data
          );
        }

        if (marketResponse.data && marketResponse.data.data) {
          setMarketData(marketResponse.data.data);
        } else {
          console.error(
            "Unexpected response structure for market data:",
            marketResponse.data
          );
        }
      } catch (error) {
        console.error("API request error:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Header />
      {coinData ? (
        <div className='grey-wrapper'>
          <List coin={coinData} />
        </div>
      ) : (
        <div>No coin data available for this coin.</div>
      )}

      {marketData ? (
        <div>
          <h1>Market Data for Bitcoin</h1>
          <pre>{JSON.stringify(marketData, null, 2)}</pre>
        </div>
      ) : (
        <div>No market data available.</div>
      )}
    </div>
  );
};

export default CoinPage;
