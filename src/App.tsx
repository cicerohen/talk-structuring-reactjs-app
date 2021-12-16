import { Hero } from './components/Hero';

const { LIBRARY } = process.env;

export const App = () => {
  return <Hero library={LIBRARY} />;
};
