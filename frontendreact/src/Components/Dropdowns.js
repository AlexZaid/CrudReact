import React from 'react';
import { Dropdown } from 'react-bootstrap';
import dummy_expenses from './DataInfo';

const Dropdowns = (props) => {
  console.log(props.handler);
  const getInput = (r) => {
    props.handler(r);
  };
  return (
    <Dropdown style={{ display: 'none' }} id={`drop-${props.identifier}`}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose an answer
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {dummy_expenses.map((expense, index) => (
          <Dropdown.Item key={index} onClick={() => getInput(expense.title)}>
            {expense.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Dropdowns;
