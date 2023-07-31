import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Button, TextField } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);




const ChartJsPieChart = () => {
    let [labels, setLabels] = useState( ["January", "February", "March", "April", "May", "June"])
    let [Data, setData] = useState([200, 300, 150, 200, 120, 220])
    let [newData, setNewData] = useState({})
    let submitData = () => {
        if(newData?.month === undefined ){
            alert("Please Fill")
        }
        else if( isNaN(parseInt(newData?.men)) ){
            alert("Please Enter a valid number")

        }
        else{
            setLabels([...labels, newData?.month])
            setData([...Data, newData?.men])
            setNewData({})
        }
        

    }
    let handleChange = (e) => {
        setNewData({
            ...newData,
            [e.target.name] : e.target.value
        })
    }

    const data = {
        labels:  labels,
        datasets: [
          {
            label: '# of Votes',
            data: Data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <>
       <Pie data={data} />
        

        <div style={{display:"flex", gap:"10px", padding:"20px"}}>
        <TextField name="month" label="Month" variant="outlined" onChange={(e)=>handleChange(e)} />
            <TextField name="men" label="Men" variant="outlined" onChange={(e)=>handleChange(e)} />
            <Button size="large" variant="contained" onClick={()=>{submitData()}}>Submit</Button>
      </div>
        </>
  
    )
  }
export default ChartJsPieChart