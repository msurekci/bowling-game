export const getValueOfRolls = (game) => {
	const strike = 'X';
	const spare = '/';
	const miss = '-';

	const replaceCharacters = () => {
		let rolls = getRolls();

		for(let i = 0; i < rolls.length; i++){
			if(isRoll(rolls[i], strike)){
				rolls.splice(i, 1, 10);
			}
			else if(isRoll(rolls[i], spare)){
				let previousRoll = rolls[i-1];
				let rollValue = 10 - previousRoll;
				rolls.splice(i, 1, rollValue);
			}
			else if(isRoll(rolls[i], miss)){
				rolls.splice(i, 1, 0);
			}
		}

		return rolls;
	}

	const isRoll = (roll, character) => {
		return roll.includes(character);
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

