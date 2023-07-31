import React from "react";
import MuiBarGraph from "../../components/MuiBarGraph";
import MuiPieChart from "../../components/MuiPieChart";
import ChartJsBarGraph from "../../components/ChartJsBarGraph";
import ChartJsPieChart from "../../components/ChartJsPieChart";
import styled from "./home.module.css";
const Home = () => {
  return (
    <>
     <h3 className={styled.header}> Graphs using Chart JS</h3>
     <div className={styled.homeContainer}>

   

      <div className={styled.chart}>
<ChartJsBarGraph />

      </div>
     
      <div className={styled.chart}>
        <ChartJsPieChart />
      </div>
      


</div>
<h3 className={styled.header}> Graphs using MUI</h3>
      <div className={styled.homeContainer}>

      <MuiBarGraph/>
      <MuiPieChart />
    </div>
    </>
    
  );
};

export default Home;
