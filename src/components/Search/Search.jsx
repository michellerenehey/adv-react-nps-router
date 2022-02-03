// this component is only the search so far, maybe expanding when possible...

export default function Search(query, setQuery, handleSubmit) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search for a park:</label>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
}
