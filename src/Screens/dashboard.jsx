import React from "react";
import Card from "react-bootstrap/Card";
import Navbar from "./navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Card>
          <Card.Body>Hello World</Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
