export const getValueOfRolls  = (game) => {
	const strike = 'X';

	const replace = () => {
		let rolls = game.split("|");

		for(let i = 0; i < rolls.length; i++){
			if(isStrike(rolls[i]))
				rolls.splice(i, 1, 10);
		}

		return rolls;
	}

	const isStrike = (roll) => {
		return roll.includes(strike)
	}

	return replace();
};

