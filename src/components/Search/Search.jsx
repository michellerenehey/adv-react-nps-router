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
