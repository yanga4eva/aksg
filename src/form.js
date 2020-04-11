import React from "react";
import { Form, Container, FormInput, FormGroup } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

/**
 * ## Basic Example
 *
 * Forms can be created using the `Form` component.
 */
export default function FormExample() {
  return (
      <Container className="formcontainter">
    <Form>
      <FormGroup>
        <label htmlFor="#username">Username</label>
        <FormInput id="#username" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#password">Password</label>
        <FormInput type="password" id="#password" placeholder="Password" />
      </FormGroup>
    </Form>
    </Container>
  );
}
