import React from 'react'
import { useState, useEffect } from 'react';
import { Select, Slider, Card, Button, Radio, Input } from 'antd';
const { Option } = Select;
const { Search } = Input;

const Filter = ({ data, setFilteredData }) => {

    const initialFilter = { sport: "football", position: [], age: [8, 24] };
    const [filter, setFilter] = useState(initialFilter);

    const positionFilter = ["RB", "LB", "CM", "CAM", "CDM", "QB", "WR", "TE", "CB", "GK", "ST", "LM", "RM"];
    const positionChild = [];
    for (let i = 0; i < positionFilter.length; i++) {
        positionChild.push(<Option key={positionFilter[i]}>{positionFilter[i]}</Option>);
    }

    const sportFilter = ["badminton","football","lawn tennis", "cricket"];
    const sportChild = [];
    for (let i = 0; i < sportFilter.length; i++) {
        sportChild.push(<Radio style={{marginLeft:15}} key={sportFilter[i]} value={sportFilter[i]}>{sportFilter[i]}</Radio>);
    }

    useEffect(() => {
        filterData();
        // eslint-disable-next-line
    }, [filter])

    const filterData = () => {

        let filteredData = [];

        if (filter.sport === "football") {

            for (let i = 0; i < data.length; i++) {
                if (data[i].age < filter.age[0] || data[i].age > filter.age[1]) {
                    continue;
                }
                console.log(filter.age, data[i].age);
                if (filter.position.length) {
                    for (let j = 0; j < filter.position.length; j++) {

                        if (filter.position[j] === data[i].player_positions.slice(0, 2)) {
                            filteredData.push(data[i]);
                            console.log("here")
                            break;
                        }
                    }
                }
                else {
                    filteredData.push(data[i]);
                }
            }
          }
        } else {
          filteredData.push(data[i]);
        }

        setFilteredData(filteredData);
    }

    const handleChange = (key, value) => {
        console.log(value);
        setFilter({ ...filter, [key]: value });
    }

    return (

        <div style={{marginLeft:80,marginTop:20}}>
            <Card hoverable={true} title="Filters" style={{ width: 360, background: "#c1c1c130" }} extra={<Button type="primary" size="small" shape="round" onClick={() => { setFilter(initialFilter) }}>Reset</Button>}>
                <p>
                    <Card hoverable={true} size="small" title="Sport" bordered={false} style={{ width: 300 }}>
                        <p>
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                style={{ width: 270, padding: 10 }}
                            />
                            <Radio.Group onChange={(e) => { handleChange("sport", e.target.value) }}
                                value={filter.sport}
                                style={{ padding: 10 }}
                            >
                                {sportChild}
                            </Radio.Group>
                        </p>
                    </Card>
                </p>
                <p>
                    <Card hoverable={true} size="small" title="Player Position" bordered={false} extra={<a target="_blank" rel="noreferrer" href="https://the18.com/sites/default/files/u100013226/20171004-The18-Image-Field.jpg">Help</a>} style={{ width: 300 }}>
                        <p>
                            <Select
                                mode="multiple"
                                style={{ width: '100%',zIndex:1000}}
                                placeholder="Select"
                                value={filter.position}
                                onChange={(value) => { handleChange("position", value) }}
                            >
                                {positionChild}
                            </Select>
                        </p>

                    </Card></p>
                <p>
                    <Card hoverable={true} size="small" title="Age" bordered={false} extra={<a target="_blank" rel="noreferrer" href="https://s3.eu-west-1.amazonaws.com/theclubapp-photos-production/photos/images/000/061/046/original/Juvenile_20age_20categories_202022.png?1641756987">Help</a>} style={{ width: 300 }}>
                        <p>
                            <Slider range={{ draggableTrack: true }}
                                defaultValue={[8, 24]}
                                value={filter.age}
                                onChange={(value) => { handleChange("age", value) }}
                                tooltipVisible
                                tooltipPlacement={"bottom"} />
                        </p>
                    </Card>
                </p>


            </Card>
        </div>
    )
}

export default Filter;
