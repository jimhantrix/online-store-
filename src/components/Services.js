import React, { Component } from "react";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component{

state={
  services: [
    {
    icon:<FaCocktail/>,
    title: "free cocktails",
    info: 'Come and try our signature cocktail'
  },
  {
  icon:<FaHiking/>,
  title:"Great hikes",
  info: 'Come and try our signature cocktails'
  },
  {
  icon:<FaShuttleVan/>,
  title:"Free Shuttle",
  info: 'Get free rides to your destination'
  },
  {
  icon:<FaBeer/>,
  title:"Great beer from our brewery",
  info: 'Come and try our signature cocktail'
  }
 ]
}
  render (){
    return(
      <section className="services">
      <Title title ="services"/>
      <div className="services-center">

      {this.state.services.map((item, index)=>{
        return <article key={index} className="service">
        <span>{item.icon}</span>
        <h6>{item.title}</h6>
        <p>{item.info}</p>
        </article>
      })}
      </div>
      </section>
    );
  }
}
