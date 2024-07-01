import { v4 as uuidv4 } from "uuid";
import { MAX_ATTRIBUTES_TOTAL } from "./consts";

/**
 * Calculates the modifider based on the attribute's value
 *
 * @param {*} value
 * @returns modifier value
 */
export const calculateModifier = (value) => Math.floor((value - 10) / 2);

/**
 * Checks whether user can keep adding to the attribute values' total
 *
 * @param {*} attributes
 * @returns true/false whether the total of attribute values is greater than or
 * equal to MAX_ATTRIBUTES_TOTAL
 */
export const isAttriubutesMax = (attributes) =>
	attributes.reduce(
		(accumulator, currentAttribute) => accumulator + currentAttribute.value,
		0
	) >= MAX_ATTRIBUTES_TOTAL;

/**
 * @returns unique id for character
 */
export const getUniqueId = () => uuidv4();

/**
 * Compares attribute value with respective class attribute value
 *
 * @param {*} characterAttributes
 * @param {*} classAttributes
 * @returns true/false as to whether attribute values meet all requirements for a class
 */
export const classMinimumRequirementsMet = (
	characterAttributes,
	classAttributes
) =>
	characterAttributes.every((attr) => attr.value >= classAttributes[attr.name]);

/**
 * Finds the attribute based on the name provided
 *
 * @param {*} attributes
 * @param {*} name
 * @returns attribute object
 */
export const findAttributeByName = (attributes, name) =>
	attributes.find((attr) => attr.name === name);

/**
 * Calculates the total skill points available based on the intelligence modifier's value
 *
 * @param {*} intelligenceModifier
 * @returns the number of total skill points available
 */
export const totalSkillPointsAvailable = (intelligenceModifier) =>
	10 + 4 * intelligenceModifier;
