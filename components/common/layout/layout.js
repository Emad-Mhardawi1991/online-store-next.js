import classes from'./Layout.module.css'

import NavBar from "../navbar/navbar";
import SideBar from "../sideBar/SideBar";
import Hero from '../../ui/hero/Hero';

const Layout = (props) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className={classes.page_content}>
        <SideBar/>
        {props.children}
        </main>
      <footer>
        <p>footer</p>
       
      </footer>
    </div>
  );
};

export default Layout;
