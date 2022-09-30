import axios from 'axios';
import React, { useState } from 'react';
import { Card, Table, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddProduct = () => {




  return (
    <>
      <Container>
    <Link to='/admin/product' className='btn btn-primary btn-sm mb-2' variant='info'>All Product</Link>
        <Row>
          <Col md={ 6 } className='m-auto mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                <h2 className='mt-2 text-center'>Add Product</h2>
                  <hr />
                  <Form onSubmit='' method='POST'>
              
                    <Form.Group>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control  name="name"  ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Regular Price</Form.Label>
                        <Form.Control  name="regular_price"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sale Price</Form.Label>
                        <Form.Control  name="sale_price" ></Form.Control>
                    </Form.Group>
                   
                    <Form.Group>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type='number'  name="stock"  ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Rating</Form.Label>
                        <select className='form-control' name="rating" >
                            <option value=""> -select- </option>
                            <option value="1"> 1 Start </option>
                            <option value="2"> 2 Start </option>
                            <option value="3"> 3 Start </option>
                            <option value="4"> 4 Start </option>
                            <option value="5"> 5 Start </option>
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Categroy</Form.Label>
                        <select className='form-control' name="category" >
                            <option value=""> -select- </option>
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tag</Form.Label>
                        <select  className='form-control' name="tag" >
                          <option value=""> -select- </option>
                           
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Feature Photo</Form.Label>
                        <Form.Control type='file' name='photo' value=''></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Gallery Photo</Form.Label>
                        <Form.Control type='file' multiple name='gallery' ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Add Product</Button>

                  </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default AddProduct;