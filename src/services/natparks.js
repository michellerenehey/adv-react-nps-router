export async function fetchParks(startPage, query) {
  const params = new URLSearchParams();
  params.set('start', startPage);
  params.set('q', query);

  const response = await fetch(
    `https://developer.nps.gov/api/v1/parks?limit=10&api_key=cdzWVEMaCf1ENzBWkJIYssjstvgB1ppyGAwrdJCr&${params.toString()}`
  );
  const apiData = await response.json();
  const data = apiData.data;
  const mungedData = data.map(({ id, url, fullName, description, activities, states, images }) => ({
    id,
    url,
    fullName,
    description,
    activities,
    states,
    images,
  }));
  return mungedData;
}

export async function fetchParkById(id) {
  const response = await fetch(
    `https://developer.nps.gov/api/v1/parks?api_key=cdzWVEMaCf1ENzBWkJIYssjstvgB1ppyGAwrdJCr&id=${id}`
  );
  const { data } = await response.json();
  return data[0];
}
