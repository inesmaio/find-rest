import React from "react";
import styled from "styled-components";


const List = styled.ul`
    list-style-type:none;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const PageNumbers = styled.li`
    border: 2px solid #385f71;
    width: 30px;
    height: 30px;
    margin: 5px;
    padding: 4px;
    cursor: pointer;
    text-aling: center;
    
`

const Pagination = ({
    clickHandler,
    countriesToShow,
    decreaseHandler,
    increaseHandler,
    cardsPerPage,
    currentPage
}) => {
    const linksPerPage = 5;
    const linksToDisplay = Math.ceil(countriesToShow / cardsPerPage);
    const linksToShow = [];
    for (let i = 1; i <= linksToDisplay; i++) {
        linksToShow.push(i);
    }

    const indexOfLastLink = currentPage <= 3 ? 5 : currentPage >= linksToShow.length - 2  ? linksToShow.length : currentPage - 3 + linksPerPage ;
    const indexOfFirstLink = indexOfLastLink <= 3 ? 0 : indexOfLastLink  - linksPerPage;
    const currentLink = linksToShow.slice(indexOfFirstLink, indexOfLastLink);

    return (
        <List id="page-numbers">
            <PageNumbers
                onClick={decreaseHandler}>
                {"<"}
            </PageNumbers>
            {currentLink.map(number => {
                if (currentPage === number) {
                    return <PageNumbers
                        key={number}
                        id={number}
                        onClick={clickHandler}>
                        <b>{number}</b>
                    </PageNumbers>
                } else {
                    return <PageNumbers
                        key={number}
                        id={number}
                        onClick={clickHandler}>
                        {number}
                    </PageNumbers>
                }
            })}
            <PageNumbers
                onClick={increaseHandler}>
                {">"}
            </PageNumbers>
        </List>
    )
}

export default Pagination