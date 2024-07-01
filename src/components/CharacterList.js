import React, { Fragment } from "react";
import Character from "./Character/Character";

const CharacterList = ({ characters, dispatch }) => {
	return characters.map((character, characterIndex) => (
		<Fragment key={characterIndex}>
			<Character
				character={character}
				dispatch={dispatch}
				characterIndex={characterIndex}
			/>
		</Fragment>
	));
};

export default CharacterList;
