/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Common/Header/index.jsx";
import TabsComponent from "../components/Dashboard/TabsComponent/index.jsx";
import SearchBar from "../components/Dashboard/SearchBar/index.jsx";
import PaginationComponent from "../components/Dashboard/Pagination/index.jsx";
import Loader from "../components/Common/Loader/index.jsx";
import BackToTop from "../components/Common/BackToTop/index.jsx";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var prevIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(prevIndex, prevIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredCoin = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

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
            const coinData = response.data.data;
            setCoins(coinData);
            setPaginatedCoins(coinData.slice(0, 10));
            setIsLoading(false);
          } else {
            console.error("Unexpected response structure:", response.data);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error("API request error:", error);
          setIsLoading(false);
        });
    };
    getCoins();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <BackToTop />
          <SearchBar search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoin : paginatedCoins} />
          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default DashboardPage;
