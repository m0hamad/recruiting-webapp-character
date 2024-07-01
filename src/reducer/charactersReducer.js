export const charactersReducerTypes = {
	UPDATE_ATTRIBUTE: "UPDATE_ATTRIBUTE",
};

export const charactersReducer = (state, action) => {
	switch (action.type) {
		case charactersReducerTypes.UPDATE_ATTRIBUTE:
			const { characterId, name, value, modifier } = action.payload;
			const updatedCharacters = state.map((character) => {
				if (character.id === characterId) {
					character.attributes = character.attributes.map((attribute) =>
						attribute.name === name
							? { ...attribute, value, modifier }
							: attribute
					);
					return character;
				} else return character;
			});

			return updatedCharacters;
		default:
			return state;
	}
};
