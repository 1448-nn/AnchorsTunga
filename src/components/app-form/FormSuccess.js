import React from 'react';
import { Alert } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Alert color="success">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully registered. please proceed to the login page to access online lessons
        </p>
        <hr />
        <p className="mb-0">
          This is a completely free application for students.
        </p>
      </Alert>
    </div>
  );
};

export default Example;