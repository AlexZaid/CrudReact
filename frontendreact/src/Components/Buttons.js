import { React } from 'react';
import { ToggleButton, ButtonGroup } from 'react-bootstrap';

function Buttons(props) {
  const radios = [
    { name: 'save', value: '1' },
    { name: 'cancel', value: '2' },
  ];

  const checkboxHandler = (e, it) => {
    let opt = e.target.value;
    console.log(it);
    console.log(e.target.parentElement.id);

    if (opt === '1') {
      console.log('save');
    } else {
      console.log('cancel');
    }
  };

  return (
    <ButtonGroup
      style={{ display: 'none' }}
      id={props.typebutton + props.identifier}
    >
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${props.typebutton}-${idx}-${props.identifier}`}
          type="radio"
          variant={idx % 2 ? 'outline-success' : 'outline-danger'}
          name="radio"
          value={radio.value}
          onChange={(e) => checkboxHandler(e, props.identifier)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}
export default Buttons;
