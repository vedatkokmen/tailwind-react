import React from "react";
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import Layout from "./components/Layout";
// import ProfileCard from "./components/ProfileCard";
// import CardTwo from "./components/CardTwo";
// import Table from "./components/Table";
// import Modal from "./components/Modal";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <RouteWrapper path="/one" component={ProfileCard} layout={Layout} />
    //     <RouteWrapper path="/two" component={Table} layout={Layout} />
    //     <RouteWrapper path="/three" component={CardTwo} layout={Layout} />
    //   </Switch>
    // </BrowserRouter>
    <Portfolio />
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
