import { useState } from "react";
import Dropdown from "./components/dropdown/Dropdown";

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(null);



  return (
    <div className="App">

      {selectedPokemon && (
        <div>Seu Pokemon: {selectedPokemon} </div>
      )}

      <Dropdown 
        title="Selecione seu Pokémon Inicial" 
        options={['Bulbasaur', 'Squirtle', 'Charmeleon']}
        onSelect={setSelectedPokemon}
      />
    </div>
  );
}

export default App;
