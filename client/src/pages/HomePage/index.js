import React from "react";
import "./HomePage.css";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const navigateToMusic = () => {
    navigate('/mymusic');
  };
    return (
        <>
          {(
            <div className="button_wrapper">
              <button type="button" onClick={navigateToMusic} className="gradient-border text"> BEGIN</button>
            </div>
            
          )}
        </>
    )
}

export default HomePage