import { render, screen } from '@testing-library/react';
import App from '../App';
import PasswordGenerator from '../components/PasswordGenerator';

test('renders learn react link', () => {
  const {getByTestId} = render(<App />);
  const childComponent = getByTestId("password-generator");
  expect(childComponent).toBeInTheDocument();
});
