import React from 'react'
import { Table,Button } from 'antd';

const Result = ({ filteredData }) => {

    const columns = [
        {
            title: 'Registration Id',
            dataIndex: 'sofifa_id',
        },
        {
            title: 'Name',
            dataIndex: 'short_name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            sorter: {
                compare: (a, b) => a.age - b.age,
                multiple: 2,
            },            
        },
        {
            title: 'Rating',
            dataIndex: 'overall',
            sorter: {
                compare: (a, b) => a.overall - b.overall,
                multiple: 1,
            },
        },
        {
            title: 'Preferred Positions',
            dataIndex: 'player_positions',   
        },
        {
            title: 'Location',
            dataIndex: 'nationality_name',   
        },
        {
            title: 'Player Profile',
            dataIndex: 'sofifa_id',
            render: (text, record) => (
             <Button type="primary" size="small" shape="round" onClick={()=> console.log("player Profile for id : ",record.sofifa_id)}>
               {"View"}
             </Button>             
            ),
          },
    ];

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div className='container' style={{marginLeft:180,marginTop:20}}>
            <Table columns={columns} dataSource={filteredData} onChange={onChange} />;
        </div>
    )
}

export default Result;

