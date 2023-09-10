import React from "react";
import "../styles/SearchResult.css";

interface SearchResultProps{
    result: string,
}

export const SearchResult = ({result} : SearchResultProps) => {
    return <div className="search-result">{result}</div>
}