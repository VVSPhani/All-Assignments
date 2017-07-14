import React from 'react';
import './App.css';
import $ from 'jquery';
import './react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
/*import ReactPaginate from 'react-paginate';*/


var createReactClass = require('create-react-class');  //Removed React.createClass since it is deprecated.
var App = createReactClass({
  getInitialState: function() {
    return {
      username: [], 
      listUrl: [],
      all: [],
      open: [],
      merged: []
    };
  },

handleChange: function(e) {
    var value = e.target.value;
    if(value == ""){
      alert("Give Input pls");
    }
    else{
    this.setState({source: 'https://api.github.com/search/repositories?q='+value+'&sort=stars&order=desc'});
  }},


handleSubmit: function() {

    console.log(this.state.source);
    $.get(this.state.source, function(result) {
        var list = result;
        var inputs = list.items;
        if(inputs === undefined){
      alert("Give valid Input")}
    else{
       
       if (this.isMounted()) {
        this.setState ({
        username : list.items,
    });
    }

} 
}.bind(this));
   
},


handlePullRequests: function(index) {
        var url = index;
        var all1 =[];
        var open1 = [];
        var merged1 =[];
url = this.state.username[url].pulls_url.replace("{/number}","");  
       console.log(url);      
       $.get(url, function(result) {        
       var url_list = result;     
        if (this.isMounted()) {
        this.setState ({
        listUrl: url_list,
    });

    }
    
    this.state.listUrl.map(function(p_url,index) {all1.push(p_url.url)
      if(p_url.state === "open" ){              //used return in function-array-callBack return
        return open1.push(p_url.url);
      }
      else{
        return merged1.push(p_url.url);
      }
  })
  this.setState({
    all: all1,
    open: open1,
    merged: merged1
  })
}.bind(this)); 
},

    
  render: function(){
    return (
    
      <div>
      <Tabs>
          <TabList>
            <Tab>Repositories</Tab>
            <Tab>PullRequests</Tab>
          </TabList>


      <TabPanel> 

      <input id=" " type="text" onChange = {this.handleChange} />
       <input type="submit" value="Submit" onClick = {this.handleSubmit} />
       <table>
       <style>{"table, th, td {border: 1px solid black; border-collapse: collapse;}"}</style>

       <tbody>
       <tr>
          <th>Name</th>
          <th>Owner</th>
          <th>Number Of Stars</th>
          <th>Number of Forks</th>
          <th>Pull Requests</th>
        </tr>
        
            {this.state.username.map((uname,index) => 
        <tr key = {index}><td><a href={uname.owner.html_url}>{uname.name}</a></td>
            <td>{uname.owner.login}</td>
            <td>{uname.stargazers_count}</td>
            <td>{uname.forks}</td>
            <td><input type="submit" value= "show" onClick = {() => this.handlePullRequests(index)} /></td></tr>)}
        </tbody>
        </table>
        </TabPanel>

        <TabPanel>

        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>Open</Tab>
            <Tab>Merged</Tab>
          </TabList>
          <TabPanel>
          <table>
          <tbody>
          <tr>
            <th>All</th>
          </tr>  
           {this.state.all.map((uname,index) =>
            <tr key = {index}><td><a href={uname}>{uname}</a></td></tr>)}
            
          </tbody>
          </table>

          </TabPanel>
          <TabPanel>
              <table>
          <tbody>
          <tr>
            <th>Open</th>
          </tr>  
           {this.state.open.map((uname,index) =>
            <tr key = {index}><td><a href={uname}>{uname}</a></td></tr>)}
          </tbody>
          </table>

          </TabPanel>
          <TabPanel>
              <table>
          <tbody>
          <tr>
            <th>Merged</th>
          </tr>  
          {this.state.merged.map((uname,index) =>
            <tr key = {index}><td><a href={uname}>{uname}</a></td></tr>)}
            
          </tbody>
          </table>

          </TabPanel>
          </Tabs>
        </TabPanel>
        </Tabs>
      </div>
     
    );
  }
});


export default App;














