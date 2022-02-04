export async function fetchParks() {
  // const params = new URLSearchParams();
  // params.set('start', startPage);
  // if (query) {
  //   params.set('q', query);
  // }
  //  another way to do this is to grab the entire URL, and then bring that state is via template literals
  // https://developer.nps.gov/api/v1/parks?limit=10&api_key=cdzWVEMaCf1ENzBWkJIYssjstvgB1ppyGAwrdJCr&start=${startPage}

  const response = await fetch(
    'https://developer.nps.gov/api/v1/parks?limit=25&api_key=cdzWVEMaCf1ENzBWkJIYssjstvgB1ppyGAwrdJCr'
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
