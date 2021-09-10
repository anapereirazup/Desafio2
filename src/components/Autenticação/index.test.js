import React from "react";
import {render, screen } from "@testing-library/react";
import UserLogin from './Autenticação'

describe('Testa o componente Autenticação', () => {
    it('Testa se o componente está renderizando', () => {
        render(<UserLogin />);

        expect(screen.getByText('Acessar o Sistema')).toBeInTheDocument()
    })

})