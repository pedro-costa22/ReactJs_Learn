import Dropdown from './Dropdown';

import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';


const title = "Selecione o Pokémon";
const options = ['Bulbasaur', 'Squirtle', 'Charmeleon'];

describe('Dropdown', () => {

    //1. Dropdown começa fechado
    it('Should start cloed', () => {
        //Render simula a parte visual que será testada.
        render(
            <Dropdown 
                title={title} 
                options={options}
                onSelect={() => {}}
            />
        );

        //screen "semelhante a tela que o usuário está vendo"
        //screen possui metodos para puxar os elementos que existem lá.
        expect(screen.queryByText(options[0])).not.toBeInTheDocument();
        expect(screen.queryByText(options[1])).not.toBeInTheDocument();
        expect(screen.queryByText(options[2])).not.toBeInTheDocument();

        });

        //2 . Quero que o dropdown mostre as opções de menu quando ele for clicado
        it('Should show options when open', () => {
            render(
                <Dropdown 
                    title={title} 
                    options={options}
                    onSelect={() => {}}
                />
            );

            expect(screen.queryByText(options[0])).not.toBeInTheDocument();
            expect(screen.queryByText(options[1])).not.toBeInTheDocument();
            expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    
            //userEvent vai interagir com o elemento.
            const dropdownButton = screen.getByRole('button', {name: title});
            userEvent.click(dropdownButton);
        
            expect(screen.getByText('menuitem', {name: options[0]})).toBeInTheDocument();
            expect(screen.getByText('menuitem', {name: options[1]})).toBeInTheDocument();
            expect(screen.getByText('menuitem', {name: options[2]})).toBeInTheDocument();

        });

        //3. quando selecionar um item de menu, fechar o dropdown e indicar qual opção foi selecionada
        it('should signal an option was selected and close the dropdown', () => {
            const onSelect = jest.fn();
            render(
                <Dropdown 
                    title={title} 
                    options={options}
                    onSelect={onSelect}
                />
            );

            //userEvent vai interagir com o elemento.
            const dropdownButton = screen.getByRole('button', {name: title});
            userEvent.click(dropdownButton);
        
            expect(screen.getByText('menuitem', {name: options[0]})).toBeInTheDocument();
            expect(screen.getByText('menuitem', {name: options[1]})).toBeInTheDocument();
            expect(screen.getByText('menuitem', {name: options[2]})).toBeInTheDocument();

            userEvent.click((screen.getByText('menuitem', {name: options[1]})).toBeInTheDocument());
            expect(onSelect.toHaveBeenCalledWith(options[1]));
            expect(screen.queryByText(options[0])).not.toBeInTheDocument();
            expect(screen.queryByText(options[1])).not.toBeInTheDocument();
            expect(screen.queryByText(options[2])).not.toBeInTheDocument();
        });


});