import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import CustomerInput from "./components/CustomerInput"
import { DOMAIN } from "./config";
import DataTable from "./components/DataTable";

class App extends Component {

  constructor() {
    super();
    this.state = {
      CUSTOMER_ID: "",
      CUSTOMER_NAME: "",
      users: [],
      graphData: {

      }
    }
  }

  drawChart = () => {
    const google = window.google
    const data = google.visualization.arrayToDataTable([
      ['Type', 'Loan Request Status'],
      ['Approved', this.state.graphData.APPROVED],
      ['Pending', this.state.graphData.IN_PROGRESS],
      ['Rejected', this.state.graphData.REJECTED]
    ]);

    const options = {
      title: 'Loan Requests'
    };

    const chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }

  componentDidMount() {
    const google = window.google
    google.charts.load('current', {'packages':['corechart']});

    fetch(`${DOMAIN}/getstatuscounts`)
    .then(value => value.json())
    .then(data => {
      this.setState((state) => ({
        ...state, graphData: data
      }))
      google.charts.setOnLoadCallback(this.drawChart);
    })
  }

  onCustomerIDChange = (value) => {
    console.log(this.state)
    this.setState((state) => ({
      ...state,
      "CUSTOMER_ID": value,
      "CUSTOMER_NAME": ""
    }))
  }

  onCustomerNameChange = (value) => {
    this.setState((state) => ({
      ...state,
      "CUSTOMER_ID": "",
      "CUSTOMER_NAME": value
    }))
  }

  onDisplayUsersClick = () => {
    const _DOMAIN = `${DOMAIN}/users/`

    const URL = this.state.CUSTOMER_ID.length == 0 ? ('name/' + this.state.CUSTOMER_NAME) : ('id/' + this.state.CUSTOMER_ID) ;

    fetch(`${_DOMAIN}${URL}`)
    .then(value => value.json())
    .catch(e => { console.error(e)})
    .then(data => { console.log(data) })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
        <div id="piechart" style={{width: "700px", height: "500px"}}></div>
          <CustomerInput customerName={this.state.CUSTOMER_NAME} customerId={this.state.CUSTOMER_ID} onCustomerIDChange={this.onCustomerIDChange} onCustomerNameChange={this.onCustomerNameChange} 
          onDisplayUsersClick={this.onDisplayUsersClick}/>
          <DataTable data={this.state.graphData}/>
        </main>
      </div>
    );
  }
}

export default App;
