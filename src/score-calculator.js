export const scoreCalculator = (game) => {
	let gameScore = 0;
	let rollIndex = 0;

	const isSpare = () => {
		return game[rollIndex] + game[rollIndex] === 10;
	};

	const spareBonus = () => {
		return game[rollIndex + 2];
	};

	game.map((roll, rollIndex) => {
		if(isSpare()){
			gameScore += 10 + spareBonus();
			rollIndex += 2;
		}
		gameScore += roll
	});

	return gameScore;
};