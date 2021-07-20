import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');

  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests((old) => [...old, name]);
  };

  return (
    <div>
      <h2>Guest List</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='input'
      />
      <button onClick={onClick}>Add Guest</button>

      <div>
        {guests.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </div>
    </div>
  );
};

export default GuestList;
