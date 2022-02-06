import classes from "./navbar.module.css";

import Logo from "../../ui/logo/logo";
import HeartIcon from "../../icons/heart-icon";
import ShoppingBagIcon from "../../icons/shopping-bag-icon";
import Avate from "../avatar/Avatar";
import SearchBar from "../searchBar/SerachBar";
import MenuIcon from "../../icons/Menu-icon";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={classes.root}>
      <div className={classes.nav_container}>
        <Link href="/">
          <a>
            <Logo className="w-20 h-full" />
          </a>
        </Link>

        <div className=" hidden  lg:flex  gap-3  pr-6  lg:pr-0">
          <Link href="/"> ABOUT</Link>
          <Link href="/">FIND US</Link>
        </div>
        <div className={`${classes.search_bar_container}`}>
          <SearchBar />
        </div>

        <div className="flex justify-center items-center gap-2">
          <HeartIcon />
          <ShoppingBagIcon />
          <Avate />
          <MenuIcon className={classes.menu_icon} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
