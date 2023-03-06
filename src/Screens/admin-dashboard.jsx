import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Navbar from "./navbar";
import img1 from "../Images/dress.jpeg";
import img2 from "../Images/dress2.jpeg";
import img3 from "../Images/dress3.jpeg";
import img4 from "../Images/dress4.jpeg";
import UiButton from "../Components/buttons";
import { getApi } from "../Api/call";
import "../Styling/dashboard.scss";

const AdminDashboard = () => {
  const [getData, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getApi("getDashboard");
      console.log(data);
    };
    getData();
  }, []);
  return (
    <div id="dashboard">
      <Navbar />
      <div id="listings">
        <Card className="listing-item">
          <Card.Body>
            <Card.Img variant="top" src={img1} className="image-style" />
            <Card.Body>
              <Card.Title>Best Shoes</Card.Title>
              <Card.Text>The worlds fastest shoes in the planet</Card.Text>
            </Card.Body>
            <UiButton title="Edit" variant="outline-primary" size="small" />
          </Card.Body>
        </Card>

        <Card className="listing-item">
          <Card.Body>
            <Card.Img variant="top" src={img2} className="image-style" />
            <Card.Body>
              <Card.Title>Best Shoes</Card.Title>
              <Card.Text>The worlds fastest shoes in the planet</Card.Text>
            </Card.Body>
            <UiButton title="Edit" variant="outline-primary" size="small" />
          </Card.Body>
        </Card>

        <Card className="listing-item">
          <Card.Body>
            <Card.Img variant="top" src={img3} className="image-style" />
            <Card.Body>
              <Card.Title>Best Shoes</Card.Title>
              <Card.Text>The worlds fastest shoes in the planet</Card.Text>
            </Card.Body>
            <UiButton title="Edit" variant="outline-primary" size="small" />
          </Card.Body>
        </Card>

        <Card className="listing-item">
          <Card.Body>
            <Card.Img variant="top" src={img4} className="image-style" />
            <Card.Body>
              <Card.Title>Best Shoes</Card.Title>
              <Card.Text>The worlds fastest shoes in the planet</Card.Text>
            </Card.Body>
            <UiButton title="Edit" variant="outline-primary" size="small" />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
