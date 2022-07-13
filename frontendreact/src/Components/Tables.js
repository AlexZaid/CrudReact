import React from 'react';
import { Table } from 'react-bootstrap';
import Buttons from './Buttons';
import Textareas from './Textareas';

const Tables = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Question</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((expense, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <Textareas
                title={expense.title}
                typearea={'ques'}
                identifier={index}
              />
              <Buttons typebutton={'quesbuttons'} identifier={index} />
            </td>
            <td>
              <Textareas
                title={expense.title}
                typearea={'Answ'}
                identifier={index}
              />
              <Buttons typebutton={'answbuttons'} identifier={index} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tables;
