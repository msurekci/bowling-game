import { scoreCalculator } from './score-calculator';
import { getValueOfRolls } from './frames';

export const bowlingGame = (game) => {
	let rolls = getValueOfRolls(game);
	return scoreCalculator(rolls);
};