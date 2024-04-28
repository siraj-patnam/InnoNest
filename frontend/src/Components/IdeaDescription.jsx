import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { useParams } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { ChatDialogue } from "./ChatDialogue";

const IdeaDescription = () => {
  const { id } = useParams();
  const [idea, setIdea] = useState(null); // Initial state set to null
  const [showModal, setShowModal] = useState(false);
  const [totalBudget, setTotalBudget] = useState(0);
  const [fundsCollected, setFundsCollected] = useState(0);
  const [fundsRemaining, setFundsRemaining] = useState(0);
  const [connectModal, setConnectModal] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Fetch startup idea data from the API
    axios
      .get(`http://localhost:5000/ideas/${id}`)
      .then((response) => {
        setIdea(response.data);
      })
      .catch((error) => {
        console.error("Error fetching startup idea:", error);
      });
  }, [id]);

  useEffect(() => {
    if (idea) {
      const remaining =
        parseFloat(idea.budget) - parseFloat(idea.availableFunds);
      setTotalBudget(parseFloat(idea.budget));
      setFundsCollected(parseFloat(idea.availableFunds));
      setFundsRemaining(remaining);
    }
  }, [idea]);

  const handleConnectClick = () => {
    // Implement chat functionality here
    setConnectModal(true);
    setShowModal(true);
  };

  const handleFundsClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const amount = parseFloat(formData.get("amount"));
    if (!isNaN(amount) && amount > 0) {
      setFundsCollected((prevFundsCollected) => prevFundsCollected + amount);
      setFundsRemaining(
        (prevFundsRemaining) => totalBudget - (fundsCollected + amount)
      );
      setShowModal(false);
    } else {
      alert("Please enter a valid amount.");
    }
  };

  const fundsCollectedPercentage = (
    (fundsCollected / totalBudget) *
    100
  ).toFixed(2);
  const fundsRemainingPercentage = (
    (fundsRemaining / totalBudget) *
    100
  ).toFixed(2);

  const pieChartData = {
    labels: [
      `Funds Collected (${fundsCollectedPercentage}%)`,
      `Funds Remaining (${fundsRemainingPercentage}%)`,
    ],
    datasets: [
      {
        data: [fundsCollected, fundsRemaining],
        backgroundColor: ["#36a2eb", "#ff6384"],
        hoverBackgroundColor: ["#36a2eb", "#ff6384"],
      },
    ],
  };

  return (
    <div className="container text-start">
      <h2>Details of the startup idea</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Idea</h4>
          <p>{idea?.idea}</p>
          <h4>Description</h4>
          <p>{idea?.description}</p>
          <h4>Budget</h4>
          <p>{idea?.budget}</p>
          <h4>Industry Type</h4>
          <p>{idea?.industryType}</p>
          <h4>Funds available</h4>
          <p>{fundsCollected}</p>
          <h4>Funds needed</h4>
          <p>{fundsRemaining}</p>

          <Button
            variant="primary"
            className="m-2"
            onClick={() => setIsChatOpen(true)}
          >
            Connect
          </Button>
          <Button onClick={handleFundsClick} variant="success" className="m-2">
            Funds
          </Button>
        </div>
        <div className="col-md-6">
          <h3>Funds Overview</h3>
          <Pie data={pieChartData} />
        </div>
      </div>

      {/* Funds Modal */}

      {isChatOpen && <ChatDialogue onHide={handleModalClose} />}

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contribute Funds</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                placeholder="Enter amount"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default IdeaDescription;
