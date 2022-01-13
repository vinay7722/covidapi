import React, { useEffect, useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Statewise = () => {

    const [data,setData] = useState([]);

    const getCovidData = async () => {
       const res =  await fetch('https://data.covid19india.org/data.json');
       const actualData = await res.json();
       console.log(actualData.statewise);
       setData(actualData.statewise)
    }


    useEffect(() => {
        getCovidData();
    },[])

    return (<>
        <div className="container-fluid mt-5">
            <div className="main-heading">
                <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA</span> COVID-19 Dashboard</h1>
            </div>

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovred</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((curEle ,index) => {
                            return (
                                <tr key={index}>
                                    <th>{curEle.state}</th>
                                    <td>{curEle.confirmed}</td>
                                    <td>{curEle.recovered}</td>
                                    <td>{curEle.deaths}</td>
                                    <td>{curEle.active}</td>
                                    <td>{curEle.lastupdatedtime }</td>
                                </tr>);
                            })
                        }                        
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}

export default Statewise