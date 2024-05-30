/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import Header from "../components/Common/Header/index.jsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [marketData, setMarketData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Scroll to the top of the page whenever this component mounts or the id changes
    window.scrollTo(0, 0);
  }, [id]);

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
          // Take only the last 10 entries from market data
          const last10MarketData = marketResponse.data.data.slice(-30);
          setMarketData(last10MarketData);
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

  const processMarketData = (data) => {
    const formattedDates = data.map((entry) => {
      const date = new Date(entry.date);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Adding 1 to get the correct month index
      return `${day}/${month}`;
    });

    // Format prices to display values in the thousands
    const prices = data.map((entry) => {
      if (typeof entry.priceUsd === "number") {
        const priceInThousands = entry.priceUsd / 1000;
        return priceInThousands > 999
          ? (priceInThousands.toFixed(3) + "k").replace(/\.?0+k$/, "k")
          : entry.priceUsd.toFixed(3);
      } else {
        return entry.priceUsd;
      }
    });

    return {
      labels: formattedDates,
      datasets: [
        {
          label: "Price (USD)",
          data: prices,
          borderColor: "rgba(103, 114, 229, 1)",
          backgroundColor: "rgba(103, 114, 229, 0.5)",
          borderWidth: 1,
        },
      ],
    };
  };

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
          <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>
            {coinData.name} in Last 30 Days
          </h1>
          <div
            style={{
              height: "400px",
              width: "80%",
              margin: "0 auto", // Center horizontally
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Line
              data={processMarketData(marketData)}
              options={{
                maintainAspectRatio: false, // Allow chart to adjust its size
                responsive: true, // Make chart responsive
                plugins: {
                  legend: {
                    display: true,
                    position: "top",
                  },
                },
                scales: {
                  x: {
                    display: true,
                  },
                  y: {
                    display: true,
                    ticks: {
                      callback: function (value, index, values) {
                        if (Math.abs(value) >= 1000) {
                          return value
                            .toFixed(0)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        } else {
                          return value.toFixed(3);
                        }
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      ) : (
        <div>No market data available.</div>
      )}
    </div>
  );
};

export default CoinPage;
