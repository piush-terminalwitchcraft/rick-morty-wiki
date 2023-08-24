import React, { useState } from 'react'
import './../../Assets/Styles/search.css'

interface SearchProps {
    updateName: (name: string | undefined) => void;
    updateGender: (gender: "female" | "male" | "genderless" | "unknown" | undefined) => void;
    updateStatus: (species: "alive" | "dead" | "unknown" | undefined) => void;
    updatePageNumber: (pageNumber: number| undefined) => void;
}

function Search(props: SearchProps) {

    const [name, setName] = useState<string | undefined>(undefined);
    const [gender, setGender] = useState<"female" | "male" | "genderless" | "unknown" | undefined>(undefined);
    const [species, setSpecies] = useState<"alive" | "dead" | "unknown" | undefined>(undefined);

    const { updateName, updateGender, updateStatus, updatePageNumber } = props;

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const res = event.target.value;
        setName(res);
        updateName(res);
        updatePageNumber(undefined);
    };

    const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value as "female" | "male" | "genderless" | "unknown";
        setGender(selectedValue)
        updateGender(selectedValue);
        updatePageNumber(undefined);
    };

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value as "alive" | "dead" | "unknown";
        setSpecies(selectedValue)
        updateStatus(selectedValue);
        updatePageNumber(undefined);
    };

    const reset = () => {
        setName(undefined); 
        setGender(undefined); 
        setSpecies(undefined); 
        updateName(undefined); 
        updateStatus(undefined); 
        updateGender(undefined);
        updatePageNumber(undefined);
    }

    return (
        <div className='search-container'>
            
                <input className='search-input-field' type="text" id="name" placeholder={'Search characters'} value={name || ''} onChange={handleNameChange} />
            
                <select id="gender" className='search-dropdown' value={gender || ''}  onChange={handleGenderChange}>
                    <option value="">Select Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
           
                <select id="status" className='search-dropdown' value={species || ''} onChange={handleStatusChange}>
                    <option value="">Select Status</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
           
            <button className='search-reset-button' onClick={reset}>Reset</button>
        </div>
    )
}

export default Search