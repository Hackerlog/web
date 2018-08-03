import ReactGA from 'react-ga';

ReactGA.initialize('UA-122466260-1');

const Tracking = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
  return null;
};

export default Tracking;
