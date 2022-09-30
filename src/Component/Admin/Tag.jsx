import React, { useState } from 'react';
import { Card, Table, Button, Form, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Tag = () => {

  //  Modal show
  const [ tagEditForm, setTagEditForm ] = useState(false);



  return (
    <>
    <Link to='/admin/add-tag' className='btn btn-primary btn-sm mb-2' onClick='' variant='info'>Add Tag</Link>
    <Card>
    <Card.Header>
      <h2 className='text-center'>All Tags</h2>
    </Card.Header>
    <Card.Body className='student-table shadow'>
        <Table>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Tag Name</th>
                  <th>Slug</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>

            <tr>
                <td>1</td>
                <td>dfadsf</td>
                <td>dsfasdf</td>
                <td>
                  <Button onClick='' className='btn-sm' variant='warning'>Edit</Button>
                  <Button onClick='' className='btn-sm' variant='danger'>Delete</Button>
                </td>
              </tr>

          </tbody>
      </Table>
    </Card.Body>

    
    </Card>




    {/* Tag Edit Form */}

    {
      tagEditForm && 
    <Container>
      <Row>
        <Col md={ 6 } className='m-auto mt-3'>
          <Card className='shadow p-3'>
            <div className="editTag">
              <h2 className='mt-2 text-center'>Edti Tag</h2>
                <hr />
                <Form onSubmit="" method='POST'>
            
                  <Form.Group>
                      <Form.Label>Tag Name</Form.Label>
                      <Form.Control value=''></Form.Control>
                  </Form.Group>

                  <Form.Group>
                      <Form.Control type='hidden' value=''></Form.Control>
                  </Form.Group>

                  <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Update Tag</Button>

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

export default Tag;