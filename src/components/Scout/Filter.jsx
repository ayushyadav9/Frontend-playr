import React from "react";
import { useState, useEffect } from "react";
import { Select, Slider, Card, Button } from "antd";
const { Option } = Select;

const Filter = ({ data, setFilteredData }) => {
  const initialFilter = { sport: "football", position: [], age: [8, 24] };
  const [filter, setFilter] = useState(initialFilter);

  const positionFilter = [
    "RB",
    "LB",
    "CM",
    "CAM",
    "CDM",
    "QB",
    "WR",
    "TE",
    "CB",
    "GK",
    "ST",
    "LM",
    "RM",
  ];
  const positionChild = [];
  for (let i = 0; i < positionFilter.length; i++) {
    positionChild.push(
      <Option key={positionFilter[i]}>{positionFilter[i]}</Option>
    );
  }

  const sportFilter = ["football", "cricket", "lawn tennis", "badminton"];
  const sportChild = [];
  for (let i = 0; i < sportFilter.length; i++) {
    sportChild.push(<Option key={sportFilter[i]}>{sportFilter[i]}</Option>);
  }

  useEffect(() => {
    filterData();
    // eslint-disable-next-line
  }, [filter]);

  const filterData = () => {
    let filteredData = [];

    if (filter.sport !== "") {
      for (let i = 0; i < data.length; i++) {
        if (data[i].age < filter.age[0] || data[i].age > filter.age[1]) {
          continue;
        }
        console.log(filter.age, data[i].age);
        if (filter.position.length) {
          for (let j = 0; j < filter.position.length; j++) {
            console.log(filter.position[j]);
            console.log(data[i].player_positions.slice(0, 2));
            if (filter.position[j] === data[i].player_positions.slice(0, 2)) {
              filteredData.push(data[i]);
              console.log("here");
              break;
            }
          }
        } else {
          filteredData.push(data[i]);
        }
      }
    } else filteredData = data;
    setFilteredData(filteredData);
  };

  const handleChange = (key, value) => {
    //console.log({ ...filter, [key]: value });
    setFilter({ ...filter, [key]: value });
  };

  return (
    <div style={{ padding: "30px" }}>
      <Card
        hoverable={true}
        title="Filters"
        style={{ width: 360, background: "#c1c1c130" }}
        extra={
          <Button
            type="primary"
            size="small"
            shape="round"
            onClick={() => {
              setFilter(initialFilter);
            }}
          >
            Reset
          </Button>
        }
      >
        <p>
          <Card
            hoverable={true}
            size="small"
            title="Sport"
            bordered={false}
            style={{ width: 150 }}
          >
            <p>
              <Select
                placeholder="Select"
                style={{ width: 120 }}
                value={filter.sport ? filter.sport : "Select"}
                onChange={(value) => {
                  handleChange("sport", value);
                }}
              >
                {sportChild}
              </Select>
            </p>
          </Card>
        </p>
        <p>
          <Card
            hoverable={true}
            size="small"
            title="Player Position"
            bordered={false}
            extra={
              <a
                target="_blank"
                href="https://the18.com/sites/default/files/u100013226/20171004-The18-Image-Field.jpg"
                rel="noreferrer"
              >
                Help
              </a>
            }
            style={{ width: 300 }}
          >
            <p>
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Select"
                value={filter.position}
                onChange={(value) => {
                  handleChange("position", value);
                }}
              >
                {positionChild}
              </Select>
            </p>
          </Card>
        </p>
        <p>
          <Card
            hoverable={true}
            size="small"
            title="Age"
            bordered={false}
            extra={
              <a
                target="_blank"
                href="https://s3.eu-west-1.amazonaws.com/theclubapp-photos-production/photos/images/000/061/046/original/Juvenile_20age_20categories_202022.png?1641756987"
                rel="noreferrer"
              >
                Help
              </a>
            }
            style={{ width: 300 }}
          >
            <p>
              <Slider
                range={{ draggableTrack: true }}
                defaultValue={[8, 24]}
                value={filter.age}
                onChange={(value) => {
                  handleChange("age", value);
                }}
                tooltipVisible
                tooltipPlacement={"bottom"}
              />
            </p>
          </Card>
        </p>
      </Card>
    </div>
  );
};

export default Filter;
