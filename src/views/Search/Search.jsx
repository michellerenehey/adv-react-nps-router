import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Search() {
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    history.push(`/?q=${search}`);
  };

  return (
    <div>
      <h1>form form building a form</h1>
      <form onSubmit={handleSubmit}>
        <label>Search for a park:</label>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}
