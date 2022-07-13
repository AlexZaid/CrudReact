import React, { useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import Dropdowns from './Dropdowns';

const Textareas = (props) => {
  const [title, setTitle] = useState(props.title);

  const updateTitleHandler = (r) => {
    setTitle(r);
  };

  const editHandler = (e) => {
    console.log(e);
    let textid = e.target.attributes.id.value;
    let buttonid = [textid.slice(0, 4), textid.slice(4)];

    document.getElementById(textid).classList.add('edited');
    let editedClass = document.getElementsByClassName('edited');
    editedClass = [...editedClass];
    editedClass.map((editInput) => {
      console.log(editInput);

      editInput.setAttribute('readonly', 'readonly');

      if (editInput.id !== textid) {
        let delid = [editInput.id.slice(0, 4), editInput.id.slice(4)];
        editInput.classList.remove('edited');
        if (editInput.id[0] === 'q') {
          document.getElementById('quesbuttons' + delid[1]).style.display =
            'none';
        } else {
          document.getElementById('answbuttons' + delid[1]).style.display =
            'none';
          document.getElementById('drop-' + delid[1]).style.display = 'none';
        }
      }
      return false;
    });
    document.getElementById(textid).removeAttribute('readonly');
    document.getElementById(textid).focus();

    if (buttonid[0][0] === 'q') {
      document.getElementById('quesbuttons' + buttonid[1]).style.display =
        'block';
    } else {
      document.getElementById('answbuttons' + buttonid[1]).style.display =
        'block';
      document.getElementById('drop-' + buttonid[1]).style.display = 'block';
    }
  };

  return (
    <>
      <InputGroup onClick={editHandler}>
        <Form.Control
          id={props.typearea + props.identifier}
          readOnly={true}
          key={props.identifier}
          as="textarea"
          rows="8"
          aria-label="With textarea"
          value={title}
        />
      </InputGroup>
      {props.typearea === 'Answ' && (
        <Dropdowns handler={updateTitleHandler} identifier={props.identifier} />
      )}
    </>
  );
};

export default Textareas;
