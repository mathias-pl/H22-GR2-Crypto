import React from "react";
import Accueil from "./Accueil";
import Search from "./Search";

function SearchHelper({navigation}) {
    return (
        <Search nav={navigation}></Search>
    );
}

export default SearchHelper;
