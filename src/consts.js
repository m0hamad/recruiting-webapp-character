import { getUniqueId } from "./utils";

export const MAX_ATTRIBUTES_TOTAL = 70;
export const ATTRIBUTE_BASE_VALUE = 10;
export const SKILL_BASE_VALUE = 0;
export const ATTRIBUTE_BASE_MODIFIER = 0;

export const ATTRIBUTE_NAME = {
	strength: "Strength",
	dexterity: "Dexterity",
	constitution: "Constitution",
	intelligence: "Intelligence",
	wisdom: "Wisdom",
	charisma: "Charisma",
};

export const ATTRIBUTE_LIST = [
	{
		name: ATTRIBUTE_NAME.strength,
		value: ATTRIBUTE_BASE_VALUE,
		modifier: ATTRIBUTE_BASE_MODIFIER,
	},
	{
		name: ATTRIBUTE_NAME.dexterity,
		value: ATTRIBUTE_BASE_VALUE,
		modifier: ATTRIBUTE_BASE_MODIFIER,
	},
	{
		name: ATTRIBUTE_NAME.constitution,
		value: ATTRIBUTE_BASE_VALUE,
		modifier: ATTRIBUTE_BASE_MODIFIER,
	},
	{
		name: ATTRIBUTE_NAME.intelligence,
		value: ATTRIBUTE_BASE_VALUE,
		modifier: ATTRIBUTE_BASE_MODIFIER,
	},
	{
		name: ATTRIBUTE_NAME.wisdom,
		value: ATTRIBUTE_BASE_VALUE,
		modifier: ATTRIBUTE_BASE_MODIFIER,
	},
	{
		name: ATTRIBUTE_NAME.charisma,
		value: ATTRIBUTE_BASE_VALUE,
		modifier: ATTRIBUTE_BASE_MODIFIER,
	},
];

export const CLASS_LIST = {
	Barbarian: {
		[ATTRIBUTE_NAME.strength]: 14,
		[ATTRIBUTE_NAME.dexterity]: 9,
		[ATTRIBUTE_NAME.constitution]: 9,
		[ATTRIBUTE_NAME.intelligence]: 9,
		[ATTRIBUTE_NAME.wisdom]: 9,
		[ATTRIBUTE_NAME.charisma]: 9,
	},
	Wizard: {
		[ATTRIBUTE_NAME.strength]: 9,
		[ATTRIBUTE_NAME.dexterity]: 9,
		[ATTRIBUTE_NAME.constitution]: 9,
		[ATTRIBUTE_NAME.intelligence]: 14,
		[ATTRIBUTE_NAME.wisdom]: 9,
		[ATTRIBUTE_NAME.charisma]: 9,
	},
	Bard: {
		[ATTRIBUTE_NAME.strength]: 9,
		[ATTRIBUTE_NAME.dexterity]: 9,
		[ATTRIBUTE_NAME.constitution]: 9,
		[ATTRIBUTE_NAME.intelligence]: 9,
		[ATTRIBUTE_NAME.wisdom]: 9,
		[ATTRIBUTE_NAME.charisma]: 14,
	},
};

export const SKILL_LIST = [
	{
		name: "Acrobatics",
		attributeModifier: ATTRIBUTE_NAME.dexterity,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Animal Handling",
		attributeModifier: ATTRIBUTE_NAME.wisdom,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Arcana",
		attributeModifier: ATTRIBUTE_NAME.intelligence,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Athletics",
		attributeModifier: ATTRIBUTE_NAME.strength,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Deception",
		attributeModifier: ATTRIBUTE_NAME.charisma,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "History",
		attributeModifier: ATTRIBUTE_NAME.intelligence,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Insight",
		attributeModifier: ATTRIBUTE_NAME.wisdom,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Intimidation",
		attributeModifier: ATTRIBUTE_NAME.charisma,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Investigation",
		attributeModifier: ATTRIBUTE_NAME.intelligence,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Medicine",
		attributeModifier: ATTRIBUTE_NAME.wisdom,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Nature",
		attributeModifier: ATTRIBUTE_NAME.intelligence,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Perception",
		attributeModifier: ATTRIBUTE_NAME.wisdom,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Performance",
		attributeModifier: ATTRIBUTE_NAME.charisma,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Persuasion",
		attributeModifier: ATTRIBUTE_NAME.charisma,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Religion",
		attributeModifier: ATTRIBUTE_NAME.intelligence,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Sleight of Hand",
		attributeModifier: ATTRIBUTE_NAME.dexterity,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Stealth",
		attributeModifier: ATTRIBUTE_NAME.dexterity,
		value: SKILL_BASE_VALUE,
	},
	{
		name: "Survival",
		attributeModifier: ATTRIBUTE_NAME.wisdom,
		value: SKILL_BASE_VALUE,
	},
];

export const DEFAULT_CHARACTER = {
	id: getUniqueId(),
	attributes: ATTRIBUTE_LIST,
	classes: CLASS_LIST,
	skills: SKILL_LIST,
};
