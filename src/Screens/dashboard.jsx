import React from "react";
import Card from "react-bootstrap/Card";
import Navbar from "./navbar";
import img1 from "../Images/dress.jpeg";
import img2 from "../Images/dress2.jpeg";
import img3 from "../Images/dress3.jpeg";
import img4 from "../Images/dress4.jpeg";
// import CardComponent from "../Components/cards";
import "../Styling/dashboard.scss";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <Navbar />
      <div id="listings">
        {/* <CardComponent title="Best Kicks" img={img1} className="listing-item" />
        <CardComponent
          title="Smart Shoes"
          img={img2}
          className="listing-item"
        />
        <CardComponent
          title="Ergonomic Shoes"
          img={img3}
          className="listing-item"
        /> */}

        <Card className="listing-item">
          <Card.Body>
            <Card.Img variant="top" src={img1} className="image-style" />
            <Card.Body>
              <Card.Title>Best Shoes</Card.Title>
              <Card.Text>The worlds fastest shoes in the planet</Card.Text>
            </Card.Body>
          </Card.Body>
        </Card>

        <Card className="listing-item">
          <Card.Body>
            <Card.Img variant="top" src={img2} className="image-style" />
            <Card.Body>
              <Card.Title>Best Shoes</Card.Title>
              <Card.Text>The worlds fastest shoes in the planet</Card.Text>
            </Card.Body>
          </Card.Body>
        </Card>

        <Card className="listing-item">
          <Card.Body>
            <Card.Img variant="top" src={img3} className="image-style" />
            <Card.Body>
              <Card.Title>Best Shoes</Card.Title>
              <Card.Text>The worlds fastest shoes in the planet</Card.Text>
            </Card.Body>
          </Card.Body>
        </Card>

        <Card className="listing-item">
          <Card.Body>
            <Card.Img variant="top" src={img4} className="image-style" />
            <Card.Body>
              <Card.Title>Best Shoes</Card.Title>
              <Card.Text>The worlds fastest shoes in the planet</Card.Text>
            </Card.Body>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
