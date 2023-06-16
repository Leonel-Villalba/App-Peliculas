import { useState } from "react";
import styles from "./Search.module.css"
import {FaSearch} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Search() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/?search=" + searchText);
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
            <input className={styles.searchInput} type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button type="submit" className={styles.searchButton}>
                <FaSearch size={20}/>
            </button>
            </div>
        </form>
    )
}
