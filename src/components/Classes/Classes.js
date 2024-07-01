import { useState } from "react";
import { classMinimumRequirementsMet } from "../../utils";
import "./classes.css";
import MinRequirements from "../MinRequirements/MinRequirements";

const Classes = ({ character: { classes, attributes } }) => {
	const [details, setDetails] = useState(null);

	const handleViewMinRequirements = (name, attributes) =>
		setDetails({ name, attributes });

	return (
		<>
			<div className='classes-container'>
				<h2>Classes</h2>
				{Object.entries(classes).map(
					([charClassName, charClassAttributes], charClassIndex) => (
						<button
							onClick={() =>
								handleViewMinRequirements(charClassName, charClassAttributes)
							}
							key={charClassIndex}
							className='class-btn'
							style={{
								color: classMinimumRequirementsMet(
									attributes,
									charClassAttributes
								)
									? "red"
									: "black",
							}}
						>
							{charClassName}
						</button>
					)
				)}
			</div>
			{details && <MinRequirements details={details} setDetails={setDetails} />}
		</>
	);
};

export default Classes;
