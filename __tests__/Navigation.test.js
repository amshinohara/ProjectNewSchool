import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/Home';
import Login from '../components/Login';
import App from '../App';

jest.mock('../Firebase', () => ({
  auth: jest.fn(() => ({
    onAuthStateChanged: jest.fn((callback) => callback({ uid: 'test-uid' }))
  })),
}));

describe('Navigation', () => {
  const Drawer = createDrawerNavigator();

  const AppNavigation = () => (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

  it('renders the Home screen when authenticated', () => {
    const { getByText } = render(<AppNavigation />);
    expect(getByText('Home Screen Content')).toBeTruthy();
  });

  it('renders the Login screen when not authenticated', () => {
    jest.mock('../Firebase', () => ({
      auth: jest.fn(() => ({
        onAuthStateChanged: jest.fn((callback) => callback(null))
      })),
    }));

    const { getByText } = render(<AppNavigation />);
    expect(getByText('Login Screen Content')).toBeTruthy();
  });
});
