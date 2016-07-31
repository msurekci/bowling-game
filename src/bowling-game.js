import score from './score-calculator';
import frames from './frames';

export const bowlingGame = (game) => {
	let rolls = frames.getValueOfRolls(game);
	return score.calculate(rolls);
};