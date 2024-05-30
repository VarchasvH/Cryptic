/* eslint-disable react/prop-types */
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumber.js";
import { Link } from "react-router-dom";
const List = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className='list-row responsive-text'>
        <td className='info-flex'>
          <Tooltip title={coin.name} placement='bottom-start'>
            <img
              src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
              alt='coin logo'
              className='coin-logo'
            />
          </Tooltip>
        </td>
        <td>
          <div className='name-col responsive-text'>
            <p className='coin-symbol'>{coin.symbol}</p>
            <p className='coin-name'>{coin.name}</p>
          </div>
        </td>
        {coin.changePercent24Hr > 0 ? (
          <td className='chip-flex '>
            <Tooltip title={`Profit %`} placement='bottom-start'>
              <div className='price-chip-list responsive-text'>
                {coin.changePercent24Hr
                  ? `${parseFloat(coin.changePercent24Hr).toFixed(2)}%`
                  : "N/A"}
              </div>
            </Tooltip>
            <Tooltip title={`Profit`} placement='bottom-start'>
              <div className='icon-chip-list td-icon'>
                <TrendingUpRoundedIcon />
              </div>
            </Tooltip>
          </td>
        ) : (
          <td className='chip-flex '>
            <Tooltip title={`Loss %`} placement='bottom-start'>
              <div className='price-chip-list chip-red'>
                {coin.changePercent24Hr
                  ? `${parseFloat(coin.changePercent24Hr).toFixed(2)}%`
                  : "N/A"}
              </div>
            </Tooltip>

            <Tooltip title={`Loss`} placement='bottom-start'>
              <div className='icon-chip-list chip-red td-icon'>
                <TrendingDownRoundedIcon />
              </div>
            </Tooltip>
          </td>
        )}
        <td>
          <h3
            className='coin-price td-center-align desktop-td-mkt'
            style={{
              color: coin.changePercent24Hr < 0 ? "var(--red)" : "var(--green)",
            }}
          >
            <Tooltip title={`Current Price`} placement='bottom-start'>
              ${Number(coin.priceUsd).toLocaleString()}
            </Tooltip>
          </h3>
          <h3
            className='coin-price td-center-align mobile-td-mkt '
            style={{
              color: coin.changePercent24Hr < 0 ? "var(--red)" : "var(--green)",
            }}
          >
            <Tooltip title={`Current Price`} placement='bottom-start'>
              ${convertNumber(Number(coin.priceUsd).toLocaleString())}
            </Tooltip>
          </h3>
        </td>
        <td>
          <Tooltip title={`Supply`} placement='bottom-start'>
            <p className='coin-details-list td-supply'>
              {Number(coin.supply).toLocaleString()}
            </p>
          </Tooltip>
        </td>
        <Tooltip title={`Market Cap`} placement='bottom-start'>
          <td className='desktop-td-mkt'>
            <p className='coin-details-list'>
              {Number(coin.marketCapUsd).toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title={`Market Cap`} placement='bottom-start'>
          <td className='mobile-td-mkt'>
            <p className='coin-details-list'>
              {convertNumber(Number(coin.marketCapUsd))}
            </p>
          </td>
        </Tooltip>
      </tr>
    </Link>
  );
};

export default List;
