export async function fetchParks() {
  const response = await fetch(
    'https://developer.nps.gov/api/v1/parks?api_key=cdzWVEMaCf1ENzBWkJIYssjstvgB1ppyGAwrdJCr'
  );
  const data = await response.json();
  return data.data;
}
