import React, {useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { LangContext } from '../lang/LangContext';

const ActionHookedComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const lang = useContext(LangContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`http://localhost:4000/users`);
        setData(result.data);
      } catch (e) {
        setError(e.message || 'Unexpected error. ');
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div style={{color: 'red'}}>ERROR: {error}. Try to start mockup server, type: yarn run mock</div>
  }

  return (
    <table align="center">
      <thead>
      <tr>
        <th>{lang.t("First Name")}</th>
        <th>{lang.t("Last Name")}</th>
        <th>{lang.t("Active?")}</th>
        <th>{lang.t("Posts")}</th>
        <th>{lang.t("Messages")}</th>
      </tr>
      </thead>
    <tbody>
    {data.map(u =>
    <tr key={u.id}>
      <td>{u.firstName}</td>
      <td>{u.lastName}</td>
      <td>{u.active ? 'Yes' : 'No'}</td>
      <td>{u.posts}</td>
      <td>{u.messages}</td>
    </tr>
    )}
    </tbody>
    </table>
  );
}
export default ActionHookedComponent;
