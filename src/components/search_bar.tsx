import { InputGroup, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { SearchResult } from "../models/search_result";

interface SearchBarProps{
    setResults: React.Dispatch<React.SetStateAction<any>>,
}

const SearchBar = ({setResults}: SearchBarProps) => {

    const [input, setInput] = useState("");
    const fetchData = (value : string) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user : any) => {
                return value && user && user.name && user.name.toLowerCase().includes(value);
            })
            setResults(results); 
            
        })
    }
    const handleInputChange = (value : string) => {
        setInput(value);
        fetchData(value);
    }


    return <InputGroup className="my-4">
         <InputGroup.Text id="basic-addon1">
            <FaSearch />
         </InputGroup.Text>
         <Form.Control
          placeholder="Search event..."
          aria-label="search"
          aria-describedby="basic-addon1"
          onChange={(e) => handleInputChange(e.target.value)}
        />
    </InputGroup>
}

export default SearchBar;