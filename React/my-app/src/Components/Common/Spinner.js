import React from 'react';
import {Spinner} from 'react-bootstrap';
import "./Spinner.css";

function SpinnerComponent()
{
    return (
    <Spinner className="spinner"  animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>);
}

export default SpinnerComponent;