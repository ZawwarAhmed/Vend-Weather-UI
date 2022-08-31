import { getCities } from "../APIs/getCities";

async function citiesResponse() {
  return await getCities();
}

export { citiesResponse };
