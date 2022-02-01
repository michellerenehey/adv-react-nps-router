export async function fetchParks() {
  const response = await fetch(
    'https://developer.nps.gov/api/v1/parks?&api_key=cdzWVEMaCf1ENzBWkJIYssjstvgB1ppyGAwrdJCr'
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

// fetch park byID

// fetch activities

// fetch activities by ID

// use template literals for the id # at the end
// https://developer.nps.gov/api/v1/parks?api_key=cdzWVEMaCf1ENzBWkJIYssjstvgB1ppyGAwrdJCr&id=77E0D7F0-1942-494A-ACE2-9004D2BDC59E
