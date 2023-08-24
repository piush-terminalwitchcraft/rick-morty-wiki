import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Footer, Header, Main } from '../../Layouts'
import '../../Assets/Styles/character.css'
import { fetchCharacterDetail } from '../../Services/controller'

function Character() {
    let { id } = useParams()
    const [character, setCharacter] = useState({
        name: '',
        status: '',
        species: '',
        gender: '',
        origin: { name: '' },
        location: { name: '' },
        image: ''
    });

    async function get() {
        const res = await fetchCharacterDetail(parseInt(id !== undefined ? id : "1"));
        setCharacter(res);
    }

    useEffect(() => {
        get();
    }, [])

    if (!character) {
        return <div>Loading character data...</div>;
    }


    return (
        <Main>
            <Header />
            <div className='character-body'>
                <div className='character-card'>
                    <img src={character.image} alt={character.name} className='character-image' />
                    <div className='character-details'>
                        <h2>{character.name}</h2>
                        <p>Status: {character.status}</p>
                        <p>Species: {character.species}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Origin: {character.origin.name}</p>
                        <p>Location: {character.location.name}</p>
                    </div>
                </div>
            <Footer />
            </div>
        </Main>
    )
}

export default Character