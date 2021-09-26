import { createComponent } from '../framework';
import { div } from '../framework/element';
import { onClick } from '../framework/event';

const initialState = {
  firstName: 'John',
  lastName: 'Doe',
}

const methods = {
  changeName: (state, firstName) => ({ ...state, firstName })
}

const template = ({ firstName, lastName, methods }) =>
  div`${onClick(() => methods.changeName('Meow'))} Hey there ${firstName} ${lastName}`;

export const App = createComponent({ template, methods, initialState })
