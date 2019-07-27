import React from 'react';
import './App.css';

class App extends Comment {
  render () {
    return (
    <div className="wIapper">
    <div className="form-wIapper">
    <h1> upload cv</h1>
    <form onSubmit ={this.handleSubmit} noValidate>
    <div className="FiristName">
    <label htmlFor="FiristName">First Name</label>
    <input
     type="text" 
      className="" 
       placeholder="First Name"
        type="text"
         name="firest Name" 
          noValidate
          onchange={this.handlechange}
          />


     </div>
     <div className="lastName">
    <label htmlFor="LaststName">Last Name</label>
    <input
     type="text" 
      className="" 
       placeholder="Last Name"
        type="text"
         name="lastName" 
          noValidate
          onchange={this.handlechange}
          />


     </div>
     <div className="university">
    <label htmlFor="university">University</label>
    <input
     type="text" 
      className="" 
       placeholder="University"
        type="text"
         name="university" 
          noValidate
          onchange={this.handlechange}
          />


     </div>
     <div className="major">
    <label htmlFor="university">Major</label>
    <input
     type="text" 
      className="" 
       placeholder="Major"
        type="text"
         name="major" 
          noValidate
          onchange={this.handlechange}
          />

     //</div>
     
    </form> 
    </div>
    </div>
    <div>
    <button type="Submit">Submit
>
</button>
<h1> preview the uploaded cv's</h1>

    </div>//
    
    <input type="submit" value="submit" class= "btn btn-primary btn-block"></input>






    /*var express = require("express"),
app = express(),
bodyparser = require("body-parser"),
mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/commuters", {useNewUrlParser: true});

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var schema = new mongoose.Schema({
  route : String,
  origin : String,
  destination : String,
  estimatedTimeOfArrival : String,
  date : String,
  time : String
}) 
var detailsModel = mongoose.model("detailsModel", schema);
app.get("/", function (req, res) {
res.render("index",{ details: null })
})
app.get("/getdetails", function (req, res) {   
detailsModel.find({}, function (err, allDetails) {
    if (err) {
        console.log(err);
    } else {
        res.render("index", { details: allDetails })
    }
})
})
app.listen(3000, "localhost", function () {
console.log("server has started");
} )*/
<table className="App-table">
<tr> <td>FiristName</td>
<th>LaststName</th>
<th>University</th>
<th>Major</th>
<th>cv</th>
</tr>
<tr>
  <td> </td>
  <td> </td>
  <td> </td>
  <td> </td>
  <td>Downloadd </td>
</tr>
<tr>
<td> </td>
  <td> </td>
  <td> </td>
  <td> </td>
  <td>Downloadd </td>
</tr>

<tr>
<td> </td>
  <td> </td>
  <td> </td>
  <td> </td>
  <td>Downloadd </td>
</tr>
<tr>
<td> </td>
  <td> </td>
  <td> </td>
  <td> </td>
  <td>Downloadd </td>
</tr>

</table>
}
}
export default App;
