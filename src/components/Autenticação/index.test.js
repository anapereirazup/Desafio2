import React from 'react'
import { screen, render } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import { describe } from 'yargs'

import UserLogin from './Autenticação'
import Autenticação from './Autenticação'


describe('<UserLogin />', () => {
    it ('Deve renderizar o componente sem erros', () => {
       const div = document.createElement('div');
        ReactDOM.render(<Autenticação />, div);
        ReactDOM.unmountComponentAtNode(div);

        // expect (
        //     screen.getByText("heading", {name: /value/i})
        // ).toBeInDocument()
        // screen.logTestingPlaygroundURL()

    });
})