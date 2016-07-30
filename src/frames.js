export const getValueOfRolls = (game) => {
	const strike = 'X';
	const spare = '/';
	const miss = '-';

	const replaceCharacters = () => {
		let rolls = getRolls();

		for(let i = 0; i < rolls.length; i++){
			if(isStrike(rolls[i])){
				rolls.splice(i, 1, 10);
			}
			else if(isSpare(rolls[i])){
				let previousRoll = rolls[i-1];
				let rollValue = 10 - previousRoll;
				rolls.splice(i, 1, rollValue);
			}
			else if(isMiss(rolls[i])){
				rolls.splice(i, 1, 0);
			}
		}

		return rolls;
	}

	const isStrike = (roll) => {
		return roll.includes(strike);
	}

	const isSpare = (roll) => {
		return roll.includes(spare);
	}

	const isMiss = (roll) => {
		return roll.includes(miss);
	}

	const getRolls = () => {
		let removeFrames = game.replace(/\|/g, "");
		return removeFrames.split("");
	}

	let rollsWithValues = replaceCharacters();

	let gameWithRollScores = rollsWithValues.map((rolls) => {
		return parseInt(rolls)
	});

	return gameWithRollScores;
};

