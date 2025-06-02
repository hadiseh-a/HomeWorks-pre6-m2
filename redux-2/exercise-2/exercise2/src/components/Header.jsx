import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <Card className="bg-light text-black " style={{ zIndex: "-1" }}>
      <Card.Img
        src="./src/assets/hero-bg.jpg"
        alt="Card image"
        style={{
          maxWidth: 2000,
          height: "auto",
          borderRadius: "10%",
          marginTop: "-250px",
        }}
      />
      <Card.ImgOverlay style={{ marginLeft: 120, marginTop: 80 }}>
        <Card.Title style={{ fontSize: 20 }}>Best Quality Plants</Card.Title>
        <Card.Text style={{ fontWeight: 440, fontSize: 50, width: 400 }}>
          Amazing Variety Of Plants Starting Just $12
        </Card.Text>
        <Button
          variant="danger"
          style={{ borderRadius: 50, fontSize: 15, padding: 20 }}
        >
          SHOP NOW
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Header;
