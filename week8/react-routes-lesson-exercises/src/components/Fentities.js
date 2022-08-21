import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/fentity-directory.css';

class Fentities extends Component {
  render() {
    const fentitiesCategory = this.props.match.params.fentities;
    const fentities = this.props.state[fentitiesCategory];
    return (
      <div>
        <h1 id="fentities-title">{fentitiesCategory}</h1>
        <div id="fentities-container">
          {fentities.map((f, index) => {
            return (
              <Link
                to={`/directory/${fentitiesCategory}/${f.name}`}
                key={index}
              >
                <div className="mini">
                  <img className="directory-img" src={f.imgUrl} alt="" />
                  <span>{f.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Fentities;
