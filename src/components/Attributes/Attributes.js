import { charactersReducerTypes } from "../../reducer/charactersReducer";
import { calculateModifier, isAttriubutesMax } from "../../utils";
import "./attributes.css";

const Attributes = ({ dispatch, character: { id, attributes } }) => {
	/**
	 * Increments attribute value and updates modifier
	 * @param {*} value
	 */
	const handleIncrementAttribute = (value, name) => {
		const newValue = value + 1;
		const newModifier = calculateModifier(newValue);
		if (isAttriubutesMax(attributes)) {
			window.alert("A Character can have up to 70 Delegated Attribute Points");
			return;
		}
		dispatch({
			type: charactersReducerTypes.UPDATE_ATTRIBUTE,
			payload: {
				characterId: id,
				name,
				value: newValue,
				modifier: newModifier,
			},
		});
	};

	/**
	 * Decrements attribute value and updates modifier
	 * @param {*} value
	 */
	const handleDecrementAttribute = (value, name) => {
		const newValue = value - 1;
		const newModifier = calculateModifier(newValue);
		dispatch({
			type: charactersReducerTypes.UPDATE_ATTRIBUTE,
			payload: {
				characterId: id,
				name,
				value: newValue,
				modifier: newModifier,
			},
		});
	};

	return (
		<div className='attributes-container'>
			<h2>Attributes</h2>
			{attributes.map(({ name, value, modifier }, attributeIndex) => (
				<div className='attribute-row' key={attributeIndex}>
					<span>
						{name}: {value}
					</span>
					<span>(Modifier: {modifier})</span>
					<div className='buttons-container'>
						<button onClick={() => handleIncrementAttribute(value, name)}>
							+
						</button>
						<button onClick={() => handleDecrementAttribute(value, name)}>
							-
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Attributes;
