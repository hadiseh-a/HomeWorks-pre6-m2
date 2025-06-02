import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/data.json";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changePriceBasket } from "../redux/actionCreators";
import Modal from "react-bootstrap/Modal";

function OneCard({ data }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    dispatch(changePriceBasket(data.price));
  };

  return (
    <Card style={{ width: "18rem", margin: 25 }}>
      <Card.Img variant="top" src={data.src} />
      <Card.Body>
        {console.log(data)}
        <Card.Text>{data.type}</Card.Text>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text className="text-decoration-line-through me-2 d-inline text-secondary">
          {data.offPrice ? data.offPrice : ""}
        </Card.Text>
        <Card.Text className="me-2 d-inline">{data.price}</Card.Text>
        <>
          <Button
            className="bg-light text-success border-0"
            onClick={handleShow}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-bag-plus-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"
              />
            </svg>
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Body className="bg-success text-light">
              <div >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                </svg>
                <span>   Plant added to basket shop!</span>
              </div>
            </Modal.Body>
          </Modal>
        </>
      </Card.Body>
    </Card>
  );
}

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("./src/assets/data.json");
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap mt-xl-5 g-lg-5">
        {data.map((card) => (
          <OneCard data={card} />
        ))}
      </div>
    </>
  );
}

export default Cards;
