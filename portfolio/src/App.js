import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className = "header-color" title="Miles Galli" scroll>
          <Navigation>
         
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact Me </Link>
          </Navigation>
        </Header>
        <Drawer title="Miles Galli">
          <Navigation>
       
          <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact Me </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main></Main>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
