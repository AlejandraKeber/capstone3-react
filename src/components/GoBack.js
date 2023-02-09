import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GoBack.css';

function GoBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button className="back-btn" type="button" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
}

export default GoBack;
