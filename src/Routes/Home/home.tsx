import React, { useEffect, useReducer, useState } from 'react'
import { Footer, Header, Main } from '../../Layouts'
import '../../Assets/Styles/home.css'
import { fetchFilteredCharacters } from '../../Services/controller'
import { CharacterSearchQuery, CharacterSearchQueryActions } from '../../Utils/interfaces'
import { Card, Pagination, Search } from '../../Components'

const initialState: CharacterSearchQuery = {};

const reducer = (state: CharacterSearchQuery, action: CharacterSearchQueryActions): CharacterSearchQuery => {
    switch (action.type) {
        case "SET_PAGE":
            return { ...state, page: action.payload };
        case "SET_STATUS":
            return { ...state, status: action.payload };
        case "SET_GENDER":
            return { ...state, gender: action.payload };
        case "SET_NAME":
            return { ...state, name: action.payload };
        default:
            return state;
    }
};

function Home() {

    return (
        <Main>
            <Header />
            <HomeBody />
        </Main>
    )
}

function HomeBody() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { page, name, status, gender, species } = state;
    const [fetchedData, updateFetchedData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    async function get() {
        try {
            const data = await fetchFilteredCharacters(state);
            updateFetchedData(data.results);
            setTotalPages(data.info.pages);
            console.log(data);
        } catch (error) {
            updateFetchedData([]);
            setTotalPages(0)
        }
    }

    function changePageNumber(pageNo: number | undefined) {
        const pageNoString = pageNo !== undefined ? pageNo.toString() : undefined;
        updateFetchedData([])
        dispatch({ type: 'SET_PAGE', payload: pageNoString })
    }

    function changeName(updatedName: string | undefined) {
        changePageNumber(undefined)
        dispatch({ type: 'SET_NAME', payload: updatedName })
    }

    function changeGender(updatedGender: "female" | "male" | "genderless" | "unknown" | undefined) {
        changePageNumber(undefined)
        dispatch({ type: 'SET_GENDER', payload: updatedGender })
    }

    function changeStatus(updatedStatus: "alive" | "dead" | "unknown" | undefined) {
        changePageNumber(undefined)
        dispatch({ type: 'SET_STATUS', payload: updatedStatus })
    }




    useEffect(() => { get(); console.log(state) }, [state])

    return (
        <div className='home-body'>
            {/* Advanced search */}
            <Search updateName={changeName} updateGender={changeGender} updateStatus={changeStatus} updatePageNumber={changePageNumber} />
            {/* Results */}
            <div className='home-body-card-list'>
                {
                    fetchedData.length > 0 ? (
                        fetchedData.map((data, index) => <Card key={index} data={data} />)
                    ) : (
                        <p>No items to display :(</p>
                    )
                }

            </div>
            {/* pagination */}
            {page}
            <Pagination pagelength={totalPages} updatePageNumber={changePageNumber} />
            <Footer />
        </div>
    )
}

export default Home