import { render , fireEvent } from '@testing-library/react';
import PasswordGenerator from '../components/PasswordGenerator';

describe('Password Generator', () => {
    test('generate a password when the button is clicked', () => {
        const { getByTestId, getByText } = render(<PasswordGenerator />);
        const submitButton = getByText('Generer');
        const passwordField = getByTestId('password')
    
        fireEvent.click(submitButton);
    
        expect(passwordField).not.toBe('')
    
    })

    test('generate a password with the correct format' , () => {
        const { getByTestId, getByText } = render(<PasswordGenerator />);
        const submitButton = getByText('Generer');
        const passwordField = getByTestId('password')
    
        fireEvent.click(submitButton);

        const password = passwordField.textContent;

        // Au moins une minuscule
        expect(password).toMatch(/[a-z]/);

        // Au moins une majuscules
        expect(password).toMatch(/[A-Z]/);

        // Au moins un nombre 
        expect(password).toMatch(/[0-9]/);

        // Au moins un caractère spécial
        expect(password).toMatch(/[?,.;/:+=\[\]()\{\}\-_@%^£#€]/);
    })
})
