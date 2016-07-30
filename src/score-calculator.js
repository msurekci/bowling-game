export const scoreCalculator = (game) => {
	let gameScore = 0,
	rollIndex = 0;

	const isSpare = () => {
		return game[rollIndex] + game[rollIndex + 1] === 10;
	};

	const spareBonus = () => {
		return game[rollIndex + 2];
	};

	const isStrike = () => {
		return game[rollIndex] === 10;
	};

	const strikeBonus = () => {
		return game[rollIndex + 1] + game[rollIndex + 2];
	};

	const frameScore = () => {
		return game[rollIndex] + game[rollIndex + 1];
	};

	for(let i = 0; i < 10; i++){
		if(isStrike()){
			gameScore += 10 + strikeBonus();
			rollIndex++;
		}else	if(isSpare()){
			gameScore += 10 + spareBonus();
			rollIndex += 2;
		}else{
			gameScore += frameScore();
			rollIndex += 2;
		}
	};

	return gameScore;
};