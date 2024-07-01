import Attributes from "../Attributes/Attributes";
import Classes from "../Classes/Classes";
import Skills from "../Skills/Skills";
import "./character.css";

const Character = ({ character, dispatch, characterIndex }) => {
	return (
		<div className='character-card'>
			<h1>Character: {characterIndex + 1}</h1>

			<div className='character-metrics-container'>
				<Attributes dispatch={dispatch} character={character} />
				<Classes character={character} />
				<Skills character={character} />
			</div>
		</div>
	);
};

export default Character;
