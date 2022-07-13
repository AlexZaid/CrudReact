import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tables from './Components/Tables';
import Headers from './Components/Headers';
import dummy_expenses from './Components/DataInfo';

const App = () => {
  return (
    <>
      <Headers />
      <Container style={{ marginTop: '4%' }}>
        <Row>
          <Col>
            <Tables data={dummy_expenses} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default App;
