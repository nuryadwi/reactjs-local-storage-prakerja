import React, {useContext} from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetail from "./BookDetail";

const BookList = () => {
    const {books} = useContext(BookContext);

    return books.length ? (
        <div className="book-list">
            <ul>
                { books.map(book =>{
                    return ( <BookDetail book={book} key={book.id} />)
                })}
            </ul>
        </div>
    ) : (
        <div className="data">No books to read. Hello free time</div>
    )
}

export default BookList;