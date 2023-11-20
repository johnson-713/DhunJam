import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3>Social, Hebbal on Dhun Jam</h3>

      <div className="dashboard__radio">
        <div className="dashboard__radio--title">
          <p>
            Do you want to charge your
            <br />
            customers for requesting songs?
          </p>
        </div>

        <div className="dashboard__radio--btns">
          <div className="yes">
            <input type="radio" className="radio"/>
            <span>Yes</span>
          </div>
          <div className="no">
            <input type="radio" className="radio" />
            <span>No</span>
          </div>
        </div>
      </div>

      <div className="dashboard__request">
        <p>Custom song request amount-</p>
        <input type="number" />
      </div>

      <div className="dashboard__amounts">
        <div className="dashboard__amounts--title">
          <p>
            Regular song request amounts,
            <br />
            from high to low-
          </p>
        </div>

        <div className="dashboard__inputs">
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
