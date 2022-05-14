import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import FeaturesTiles from './components/sections/FeaturesTiles';
import Timeline from './components/sections/Timeline';
import Vozaci from './components/sections/Vozaci';
import Timovi from './components/sections/FeaturesSplit';
import Statistika from './components/sections/Statistika';
import Vozacii from './components/sections/vozacii';
import Stats from './components/sections/Stats';
import DatatablePage from './components/sections/Sortedtable';







// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/novo" component={FeaturesTiles} layout={LayoutDefault} />
          <AppRoute exact path="/timeline" component={Timeline} layout={LayoutDefault} />
          <AppRoute exact path="/vozaci" component={Vozaci} layout={LayoutDefault} />
          <AppRoute exact path="/timovi" component={Timovi} layout={LayoutDefault} />
          <AppRoute exact path="/stats" component={Stats} layout={LayoutDefault} />
          <AppRoute exact path="/vozacii" component={Vozacii} layout={LayoutDefault} />
          <AppRoute exact path="/sort" component={DatatablePage} layout={LayoutDefault} />
          <AppRoute exact path="/statss" component={Statistika} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;