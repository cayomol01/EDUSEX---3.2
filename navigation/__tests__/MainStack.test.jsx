import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native'
import { render, screen, fireEvent } from '@testing-library/react-native'



import MainStack from '../MainStack';

test('clicking item', async () => {
    const component = (
        <MainStack />
    )

    render(component)

    const oldScreen = screen.queryByText('EDUSEX')
    const button = await screen.findByText('FEMENINO')

    expect(oldScreen).toBeTruthy()

    fireEvent(button, 'press')

    const newScreen = await screen.findByText('Menu Principal')

    expect(newScreen).toBeTruthy();

});

