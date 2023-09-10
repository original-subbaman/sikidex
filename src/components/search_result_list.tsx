import { SearchResult as SearchResultModel } from "../models/search_result";
import { SearchResult } from "./search_result";
import  "../styles/SearchResultList.css"; 

interface SearchResultListProps{
    results : SearchResultModel[]
}

const SearchResultList = ({results} : SearchResultListProps) => {
    return <div className="result-list">
        {
            results.map((result, id) => {
                return <SearchResult result={result.name} key={id}/>
            })
        }

    </div>
}

export default SearchResultList;