import { useReducer } from "react";
import "./App.css";
import { DEFAULT_CHARACTER } from "./consts";
import CharacterList from "./components/CharacterList";
import { charactersReducer } from "./reducer/charactersReducer";

function App() {
	// Characters reducer that handles character state
	const [characters, dispatch] = useReducer(charactersReducer, [
		DEFAULT_CHARACTER,
	]);

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>React Coding Exercise</h1>
			</header>
			<CharacterList characters={characters} dispatch={dispatch} />
		</div>
	);
}

export default App;
