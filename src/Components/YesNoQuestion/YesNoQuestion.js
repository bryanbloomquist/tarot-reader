import React, { useContext } from "react";
import { Container, Row, Col, FormControl, InputGroup, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const YesNoQuestion = () => {
  const { showYNQ, handleInputChange, userQuestion, yesNoAnswer } = useContext(Context);

  if (!showYNQ) {
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8}>
          <InputGroup className="m-3">
            <FormControl
              placeholder="Enter your Yes/No question here...."
              aria-label="User's Question"
              aria-describedby="User's Question Input"
              value={userQuestion}
              onChange = { handleInputChange }
            />
            <InputGroup.Append>
              <Button 
                variant="outline-light"
                onClick={yesNoAnswer}  
              >Submit</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default YesNoQuestion;
