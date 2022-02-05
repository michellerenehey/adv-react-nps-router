export default function Search({ query, setQuery, setLoading }) {
  return (
    <>
      <input
        type="text"
        placeholder="search park here"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={() => setLoading(true)}>Search</button>
    </>
  );
}
