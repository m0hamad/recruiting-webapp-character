import "./minRequirements.css";

const MinRequirements = ({ details: { name, attributes }, setDetails }) => {
	const handleCloseView = () => setDetails(null);

	return (
		<div className='min-requirements-container'>
			<h2>{name} Minimum Requirements</h2>
			{Object.entries(attributes).map(([attrName, attrValue]) => (
				<div key={attrName}>
					{attrName}: {attrValue}
				</div>
			))}
			<button onClick={handleCloseView}>Close requirements view</button>
		</div>
	);
};

export default MinRequirements;
