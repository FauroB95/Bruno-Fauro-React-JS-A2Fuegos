import SearchIcon from '@mui/icons-material/Search';

const Search = () => {

    const boton1 = (evt) => {
        evt.stopPropagation();
        alert("Hola Input")
    }

    return (
    <>
    <input type="text" onClick={boton1}/>
    <SearchIcon />
    </>
    );
}

export default Search;