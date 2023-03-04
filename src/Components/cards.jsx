// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardComponent = (props) => {
  const { title, text, img, style, img_variant } = props;

  //   const image_styling = {
  //     objectFit: 'cover',
  //     borderRadius: 55,
  //     width: '50vw',
  //     height: '30vh'
  //   };

  return (
    <>
      <Card style={style}>
        <Card.Body>
          <Card.Img variant={img_variant} src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComponent;
