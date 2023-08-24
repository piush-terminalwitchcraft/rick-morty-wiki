import { BASE_URL } from "../Utils/constant";

const URL = BASE_URL; 

export const getCharacters = async (query: string = "") => {
    try {
        let response = await fetch(URL + query); 
        if(!response.ok){
            throw new Error(response.status.toString() + ' ' + response.statusText)
        } 
        let data = await response.json(); 
        return data; 
    } catch (error) {
        throw error; 
    }
}

export const getCharacterDetail = async (id: number) => {
    try {
        let response = await fetch(URL + id.toString()); 
        if(!response.ok){
            throw new Error(response.status.toString() + ' ' + response.statusText)
        } 
        let data = await response.json(); 
        return data; 
    } catch (error) {
        throw error; 
    }
    
}