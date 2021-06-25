import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import Layout from "./components/Layout";
// import ProfileCard from "./components/ProfileCard";
// import CardTwo from "./components/CardTwo";
// import Table from "./components/Table";
// import Modal from "./components/Modal";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Nav from "./components/Nav";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <RouteWrapper path="/one" component={ProfileCard} layout={Layout} />
    //     <RouteWrapper path="/two" component={Table} layout={Layout} />
    //     <RouteWrapper path="/three" component={CardTwo} layout={Layout} />
    //   </Switch>
    // </BrowserRouter>
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Portfolio} exact />
          <Route path="/about" component={ProfileCard} />
          <Route path="/blog" component={Blog} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

// function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => (
//         <Layout {...props}>
//           <Component {...props} />
//         </Layout>
//       )}
//     />
//   );
// }

export default App;
