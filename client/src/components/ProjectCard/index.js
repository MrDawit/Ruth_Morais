import React from "react";
import "./style.css"
import LazyLoad from 'react-lazy-load';

const ProjectCard = ({ name, imageURL, deployURL }) => {

  return (
    <>
      <div className="card">
          <div className="card-image">
          <a target="_blank" rel="noreferrer" href={deployURL}>
          <LazyLoad offsetVertical={1000} onContentVisible={false}>
            <img className="portfolio-img" alt="holding pattern" src={imageURL}></img>
            </LazyLoad>
            <div className="overlay">
              <div className="text">{name}</div>
            </div></a>
          </div>
        <div className="card-action">


        </div>

      </div>
      <br /><br />
    </>
  )

};

export default ProjectCard;