import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Common/Header/index.jsx";
import TabsComponent from "../components/Dashboard/TabsComponent/index.jsx";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getCoins = async () => {
      await axios
        .get("https://api.coincap.io/v2/assets", {
          params: {
            limit: 100,
          },
        })
        .then((response) => {
          if (response.data && response.data.data) {
            setCoins(response.data.data);
            console.log(response.data.data);
          } else {
            console.error("Unexpected response structure:", response.data);
          }
        })
        .catch((error) => {
          console.error("API request error:", error);
        });
    };
    getCoins();
  }, []);

  return (
    <>
      <Header />
      <TabsComponent coins={coins} />
      {/* <div>
        {Array.isArray(coins) ? (
          coins.map((coin) => (
            <div key={coin.id}>
              <h2>
                {coin.name} ({coin.symbol})
              </h2>
              <p>
                Market Cap: ${parseFloat(coin.marketCapUsd).toLocaleString()}
              </p>
              <p>Price: ${parseFloat(coin.priceUsd).toFixed(2)}</p>
              <img
                src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                alt=''
              />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div> */}
    </>
  );
};

export default DashboardPage;
