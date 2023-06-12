import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export default function Formulario() {
    const {actions}=useContext(Context)
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addContact(formData)
    setFormData({
        fullname: "",
        email: "",
        phone: "",
        address: "",
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Form>
            <Form.Group className="mb-3" controlId="fullname">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit} >Save</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
