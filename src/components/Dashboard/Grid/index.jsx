/* eslint-disable react/prop-types */
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
const Grid = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className={`grid-container ${
          coin.changePercent24Hr < 0 && "grid-container-red"
        }`}
      >
        <div className='info-flex'>
          <img
            src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
            alt='coin logo'
            className='coin-logo'
          />
          <div className='name-col'>
            <p className='coin-symbol'>{coin.symbol}</p>
            <p className='coin-name'>{coin.name}</p>
          </div>
        </div>
        {coin.changePercent24Hr > 0 ? (
          <div className='chip-flex'>
            <div className='price-chip'>
              {coin.changePercent24Hr
                ? `${parseFloat(coin.changePercent24Hr).toFixed(2)}%`
                : "N/A"}
            </div>
            <div className='icon-chip'>
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className='chip-flex'>
            <div className='price-chip chip-red'>
              {coin.changePercent24Hr
                ? `${parseFloat(coin.changePercent24Hr).toFixed(2)}%`
                : "N/A"}
            </div>
            <div className='icon-chip chip-red'>
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        <div className='coin-info'>
          <h3
            className='coin-price'
            style={{
              color: coin.changePercent24Hr < 0 ? "var(--red)" : "var(--green)",
            }}
          >
            ${Number(coin.priceUsd).toLocaleString()}
          </h3>
          <p className='coin-details'>
            Current Supply: {Number(coin.supply).toLocaleString()}
          </p>
          <p className='coin-details'>
            Market Cap: {Number(coin.marketCapUsd).toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Grid;
