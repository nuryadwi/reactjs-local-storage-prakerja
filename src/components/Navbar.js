import React, {useContext} from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
    const { books } = useContext(BookContext);

    return (
        <div className="navbar">
            <h1>Dwi x Babastudio List Book</h1>
            <p>Currently you have {books.length} to get throught...</p>
        </div>
    )
}

export default Navbar;