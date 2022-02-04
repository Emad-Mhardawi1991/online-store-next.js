import NavBar from "../navbar/navbar";

const Layout = (props) => {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>{props.children}</main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};

export default Layout;
