import { CharacterSearchQuery } from "../Utils/interfaces";
import { getCharacters, getCharacterDetail } from "./api-services"; // Update the import path as needed



export const fetchFilteredCharacters = async (filters: CharacterSearchQuery) => {
  const query = buildQueryString(filters);
  try {
    const data = await getCharacters(query);
    return data;
  } catch (error) {
    throw (error)
  }
};

// Helper function to build the query string
const buildQueryString = (filters: CharacterSearchQuery): string => {
  const queryParams = Object.keys(filters)
    .filter((key) => filters[key] !== undefined)
    .map((key) => `${key}=${encodeURIComponent(filters[key] as string )}`)
    .join("&");
  console.log(queryParams); 
  return queryParams ? `?${queryParams}` : "";
};

export const fetchCharacterDetail = async (id: number) => {
  try {
    const data = await getCharacterDetail(id);
    return data;
  } catch (error) {
    throw error;
  }
};
