import React from "react";
import Hero from "../components/Hero";
import Banner from '../components/Banner'
import {Link} from "react-router-dom";
import Services from'../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import button from "../components/StyledHero";


export default function Home(){

return (
 <>
  <Hero>
  <Banner title="Perth Luxury Rooms" subtitle="Deluxe rooms starting at $299">
    <Link to ='rooms' className ="btn-primary">
    Check ours rooms
    </Link>
  </Banner>
  </Hero>
  <Services/>
  <FeaturedRooms/>
  </>
);
}
