import { render , fireEvent } from '@testing-library/react';
import PasswordGenerator from '../components/PasswordGenerator';

test('generate a  password when the button is clicked', () => {
    const { getByTestId, getByText } = render(<PasswordGenerator />);
    const submitButton = getByText('Generer');
    const passwordField = getByTestId('password')

    fireEvent.click(submitButton);

    expect(passwordField).not.toBe('')

})