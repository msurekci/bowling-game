export const getValueOfRolls  = (game) => {
	const strike = 'X';
	const miss = '-';

	const replace = () => {
		let rolls = getRolls();

		for(let i = 0; i < rolls.length; i++){
			if(isStrike(rolls[i]))
				rolls.splice(i, 1, 10);
			else if(isMiss(rolls[i]))
				rolls.splice(i, 1, 0);
		}

		return rolls;
	}

	const isStrike = (roll) => {
		return roll.includes(strike)
	}

	const isMiss = (roll) => {
		return roll.includes(miss);
	}

	const getRolls = () => {
		let removeFrames = game.replace(/\|/g, "");
		return removeFrames.split("");
	}

	return replace();
};

