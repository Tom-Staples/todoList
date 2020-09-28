import React from 'react';
import { ListGroup,  Button, Container, Row, Col } from 'react-bootstrap';


const ToDos = (props) => {
   const listItems = props.items.map((item,index) => {
            return(
                <ListGroup.Item variant={index % 2 === 1 ? "primary" : "light"} key={index} style={item.toLowerCase().indexOf(props.filter) === -1 ? {display: "none"} : {display: "block"}}>
                    <Container fluid>
                        <Row>
                            <Col id={index}>{item}</Col>
                            <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto"><Button variant={index % 2 === 1 ? "outline-primary" : "primary"} onClick={props.handleClick}>Remove Item</Button></Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
            );
   })
    return(
        <div>
            <ListGroup>
                {listItems}
            </ListGroup>
        </div>
    )
}

export default ToDos;