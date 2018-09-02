import { createContext } from 'preact-context';

const context = createContext({
  location: 'Seattle, WA',
  animal: '',
  breed: '',
  breeds: [],
  getBreeds() {},
  handleLocationChange() {},
  handleAnimalChange() {},
  handleBreedChange() {},
});

export const { Provider, Consumer } = context;
