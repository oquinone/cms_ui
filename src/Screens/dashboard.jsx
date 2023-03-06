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

const Dashboard = () => {
  const [getData, setData] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      const data = await getApi("getDashboard");
      setData(data);
      console.log(data);
    };
    callApi();
  }, []);

  return (
    <div id="dashboard">
      <Navbar />
      <div id="listings">
        {getData.length === 0 ? (
          <p>Loading</p>
        ) : (
          <>
            <Card className="listing-item">
              <Card.Body>
                <Card.Img variant="top" src={img1} className="image-style" />
                <Card.Body>
                  <Card.Title>{getData[0].title}</Card.Title>
                  <Card.Text>{getData[0].description}</Card.Text>
                </Card.Body>
                <UiButton
                  title="Add To Card"
                  variant="outline-primary"
                  size="small"
                />
              </Card.Body>
            </Card>

            <Card className="listing-item">
              <Card.Body>
                <Card.Img variant="top" src={img2} className="image-style" />
                <Card.Body>
                  <Card.Title>{getData[1].title}</Card.Title>
                  <Card.Text>{getData[1].description}</Card.Text>
                </Card.Body>
                <UiButton
                  title="Add To Card"
                  variant="outline-primary"
                  size="small"
                />
              </Card.Body>
            </Card>

            <Card className="listing-item">
              <Card.Body>
                <Card.Img variant="top" src={img3} className="image-style" />
                <Card.Body>
                  <Card.Title>{getData[2].title}</Card.Title>
                  <Card.Text>{getData[2].description}</Card.Text>
                </Card.Body>
                <UiButton
                  title="Add To Card"
                  variant="outline-primary"
                  size="small"
                />
              </Card.Body>
            </Card>

            <Card className="listing-item">
              <Card.Body>
                <Card.Img variant="top" src={img4} className="image-style" />
                <Card.Body>
                  <Card.Title>{getData[3].title}</Card.Title>
                  <Card.Text>{getData[3].description}</Card.Text>
                </Card.Body>
                <UiButton
                  title="Add To Card"
                  variant="outline-primary"
                  size="small"
                />
              </Card.Body>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
