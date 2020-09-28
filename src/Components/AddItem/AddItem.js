import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';


const AddItem = (props) => {
    const [item, setItem] = useState("");
    return(
        <div className="additems">
            <h1>Add Item</h1>
            <Form onSubmit={(e) => {
                e.preventDefault();
                props.handleSubmit(item);
                setItem("");
            }}>
                <Form.Row>
                    <Col><Form.Control type="text" name="addItem" placeholder="Add new item..."  onChange={e => {setItem(e.target.value)}} value={item}/></Col>
                    <Col><Button variant="primary" type="submit">Add Item</Button></Col>
                </Form.Row>
            </Form>
        </div>
    )
}

export default AddItem;