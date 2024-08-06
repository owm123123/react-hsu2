import { useState, useEffect } from 'react';
import { fetchBio } from '../../api';

export default function Page() {
  const [person, setPerson] = useState<string>('John');
  const [bio, setBio] = useState<string | null>(null);
  {
    console.log('invoke');
  }

  useEffect(() => {
    console.log('useEffect');
    let ignore = false;
    setBio(null);
    fetchBio(person).then((result) => {
      if (!ignore) {
        setBio(result);
      }
    });
    return () => {
      console.log('clean up');
      ignore = true;
    };
  }, [person]);

  // const handleSelect = ({target}: React.ChangeEvent<HTMLSelectElement>) => {
  //   setPerson(target.value);
  // };

  return (
    <>
      {console.log('in jsx')}
      <select
        value={person}
        onChange={(event) => setPerson(event.target.value)}
      >
        <option value="John">John</option>
        <option value="Amy">Amy</option>
        <option value="Bob">Bob</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? 'Loading'}</i>
        <input
          name="person"
          onChange={(event) => {
            setPerson(event.target.value);
          }}
        ></input>
      </p>
    </>
  );
}
