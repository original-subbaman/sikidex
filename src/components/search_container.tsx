import { useState } from "react";
import SearchBar from "./search_bar";
import SearchResultList from "./search_result_list";

const SearchContainer = ()=>{
    const [results, setResults] = useState([]); 

    return <div>
        <SearchBar setResults={setResults}/>
        {
            results.length > 0 ? <SearchResultList results={results}/> : null
        }
        
    </div>
}

export default SearchContainer;