import { ATTRIBUTE_NAME } from "../../consts";
import { findAttributeByName, totalSkillPointsAvailable } from "../../utils";
import "./skills.css";

const Skills = ({ character: { attributes } }) => {
	return (
		<div className='skills-container'>
			<h2>Skills</h2>
			<div>
				Total skill points available:{" "}
				{totalSkillPointsAvailable(
					findAttributeByName(attributes, ATTRIBUTE_NAME.intelligence).modifier
				)}
			</div>
		</div>
	);
};

export default Skills;
