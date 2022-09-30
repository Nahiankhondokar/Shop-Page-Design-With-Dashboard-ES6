import React, { useState } from 'react';
import { Card, Table, Button, Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';

const Category = () => {

  // category add or edit form show
  const [ catForm, setCatForm ] = useState(false);
  const [ catEditForm, setCatEditForm ] = useState(false);


  return (
    <>
    <Button onClick="" className='btn-sm mb-2' variant='info'>Add Category</Button>
    <Card>
    <Card.Header>
      <h4 className='text-center'>All Categories</h4>
    </Card.Header>
    <Card.Body className='student-table shadow'>
        <Table>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
          <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button onClick="" className='btn-sm' variant='warning'>Edit</Button>
                  <Button onClick="" className='btn-sm' variant='danger'>Delete</Button>
                </td>
              </tr>

          </tbody>
      </Table>
    </Card.Body>
    </Card>

    {/* Category Add Form */}

    {
      catForm && 
      <Container>
        <Row>
          <Col md={ 6 } className='m-auto mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                <h2 className='mt-2 text-center'>Add Category</h2>
                  <hr />
                  <Form onSubmit="" method='POST'>
              
                    <Form.Group>
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control value="" onChange=""></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Add Category</Button>

                  </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

    }


        {/* Category Edit Form */}

    {
      catEditForm && 
      <Container>
        <Row>
          <Col md={ 6 } className='m-auto mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                <h2 className='mt-2 text-center'>Edit Category</h2>
                  <hr />
                  <Form onSubmit="" method='POST'>
              
                    <Form.Group>
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control value="" onChange=""></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Update Category</Button>

                  </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

    }

    </>
  )
};

export default Category;