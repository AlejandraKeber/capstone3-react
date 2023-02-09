import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import GoBack from './GoBack';
import { fetchDetail } from '../redux/DetailSlice';
import '../styles/Detail.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { detail, loading, error } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(fetchDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading && <h1 className="fallback">Loading...</h1>}
      {error && <h1 className="fallback">{error}</h1>}
      {detail && (
        <div>
          <GoBack />
          <div>
            <div className="detail-container" key={detail.id}>
              <div className="detail-title">
                <img className="detail-img" src={detail.icon} alt={detail.id} />
                <h2>{detail.name}</h2>
              </div>
              <ul className="detail-info">
                <li className="detail-list">
                  Name:
                  {' '}
                  {detail.name}
                </li>
                <li className="detail-list">
                  Symbol:
                  {' '}
                  {detail.symbol}
                </li>
                <li className="detail-list">
                  Rank:
                  {' '}
                  {detail.rank}
                </li>
                <li className="detail-list">
                  Price:
                  {' '}
                  {detail.price}
                  {' '}
                  $
                </li>
                <li className="detail-list">
                  Price in BTC:
                  {' '}
                  {detail.priceBtc}
                </li>
                <li className="detail-list">
                  Available Supply:
                  {' '}
                  {detail.availableSupply}
                </li>
                <li className="detail-list">
                  Total Supply:
                  {' '}
                  {detail.totalSupply}
                </li>
                <li className="detail-list">
                  Price Change in hour:
                  {' '}
                  {detail.priceChange1h}
                </li>
                <li className="detail-list">
                  Price Change in day:
                  {' '}
                  {detail.priceChange1d}
                </li>
                <li className="detail-list">
                  Price Change in week:
                  {' '}
                  {detail.priceChange1w}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Detail;
