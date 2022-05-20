import React from "react";
import "./Tournament.css";
import { tournaments } from "../../dummy/tournament";
import { Link } from "react-router-dom";
import { Card } from "antd";

const Tournament = () => {
  return (
    <>
      <Card
        title="Tournaments List"
        style={{ width: "60%", margin: "3rem auto" }}
      >
        {tournaments.map((tour, i) => {
          return (
            <Card
              style={{margin: "1rem auto"}}
              type="inner"
              title={tour.name}
              extra={<>Starts on: <b>{tour.start}</b></>}
              hoverable
            >
              {tour.desc}
            </Card>
          );
        })}
      </Card>
    </>
  );
};

export default Tournament;
