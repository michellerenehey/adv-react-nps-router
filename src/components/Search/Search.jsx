export default function Search({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="search park here"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
    />
  );
}
