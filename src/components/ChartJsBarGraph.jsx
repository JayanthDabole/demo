import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  //   indexAxis: 'y',
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Bar Graph",
    },
  },
};



const ChartJsBarGraph = () => {
    let [newData, setNewData] = useState({})
    let [labels, setLabels] = useState( ["January", "February", "March", "April", "May", "June"])
    let [menData, setMenData] = useState([200, 300, 150, 200, 120, 220])
    let [womenData, setWomenData] = useState([150, 190, 200, 240, 190, 120])



    const data = {
        labels,
        datasets: [
          {
            label: "Men",
            data: menData,
            backgroundColor: "rgb(255, 0, 55)",
          },
          {
            label: "Women",
            data: womenData,
            backgroundColor: "rgba(0, 250, 233, 0.901)",
          },
          
        ],
      };


    let submitData = () => {
        if(newData?.month === undefined ){
            alert("Please Fill")
        }
        else if( isNaN(parseInt(newData?.men)) ){
            alert("Please Enter a valid number")

        }
        else{
            setLabels([...labels, newData?.month])
        setWomenData([...womenData, newData?.women])
        setMenData([...menData, newData?.men])
        setNewData({})

        }
        

    }
    let handleChange = (e) => {
        setNewData({
            ...newData,
            [e.target.name] : e.target.value
        })
    }
  return (
    <>
      <Bar options={options} data={data} />
      <div style={{display:"flex", gap:"10px", padding:"20px"}}>
        <TextField name="month" label="Month" variant="outlined" onChange={(e)=>handleChange(e)} />
            <TextField name="men" label="Men" variant="outlined" onChange={(e)=>handleChange(e)} />
            <TextField name="women" label="Women" variant="outlined" onChange={(e)=>handleChange(e)}/>
            <Button size="large" variant="contained" onClick={()=>{submitData()}}>Submit</Button>

      </div>
     
    </>
  );
};

export default ChartJsBarGraph;
