import React, { useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  age: number;
}

const fetchUserById = () => {
  fetch("http://localhost:3000/users/1")
    .then((response) => response.json())
    .catch(error => {
      console.error('Error:', error);
    });
}

const fetchAllUsers = (): Promise<User[]> => {
  return fetch('http://localhost:3000/users')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`call all users api fall status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export default function CallDb() {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<Array<User>>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchAllUsers().then((data) => {
      console.log(data);
      setUsers(data);
      // setLoading(false);
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>編號</th>
            <th>姓名</th>
            <th>年紀</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
