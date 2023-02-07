import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCrypto } from '../redux/CryptoSlice';
import SearchInput from './SearchInput';

function Home() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.list);

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filter = list.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {list && (
        <div>
          <SearchInput search={search} handleChange={handleChange} />
          <div>
            {filter.map((item) => (
              <NavLink to={`/${item.id}`} key={item.id}>
                <label key={item.id} htmlFor={item.id}>
                  <img src={item.icon} alt={item.id} />
                  <div>
                    <h2>{item.name}</h2>
                    <h3>
                      Rank:
                      {' '}
                      {item.rank}
                    </h3>
                  </div>
                  <h3>
                    <b> Price:</b>
                    {' '}
                    {item.price.toFixed(5)}
                    {' '}
                    $
                  </h3>
                  <button id={item.id} type="button" className="list_button">
                    View details
                  </button>
                </label>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
