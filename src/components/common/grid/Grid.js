import React, { Component } from "react";
import './style.css';

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      const {publicGistsDisplay} = this.props;
    return (
      <> 
      <section className="card" >
        {publicGistsDisplay.map((gist , index) => (
          <section key={index} className="grid-display">
            <div>
              <p>1 This is the content Section...... </p>
              <p>2 This is the content Section...... </p>
              <p>3 This is the content Section...... </p>
              <p>4 This is the content Section...... </p>
              <p>5 This is the content Section...... </p>
              <p>6 This is the content Section...... </p>
            </div>
            <div className="card-footer">
              <div>
                <img src={gist.owner.avatar_url} alt="profile" className="profile-pic" />
              </div>
              <div className="profile-main">
                <span className="profile-footer">
                  <h4>{gist.owner.login} / {Object.keys(gist.files)[0]} </h4>
                  <span>Created 7 housrs Ago</span><br />
                  <span> Broadcast Server</span>
                </span>
              </div>
            </div>
          </section>
         ))}
         </section>
         </> 
    );
  }
}