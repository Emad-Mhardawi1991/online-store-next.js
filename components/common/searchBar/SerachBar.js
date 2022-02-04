import SearchIcon from '../../icons/search-icon';
import classes from './SearchBar.module.css';


const SearchBar =()=>{
    return(
        <form className={classes.root}>
            <input className={classes.input} placeholder='Search for' />
            <button>
                <SearchIcon className={classes.icon}/>
            </button>
            
        </form>
    )
}

export default SearchBar;