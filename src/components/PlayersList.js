import React from 'react';
import Player from './Player';
import players from '../players';
import { Container, Row, Col } from 'react-bootstrap';

const PlayersList = () => {
  return (
    <Container>
      <h1 className="text-center my-4">FIFA Player Cards</h1>
      <Row>
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={6} lg={3} className="mb-4 d-flex align-items-stretch">
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
