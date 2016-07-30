export const getValueOfRolls  = (game) => {
	const replace = () => {
		let rolls = game.split("|");

		for(let i = 0; i < rolls.length; i++){
			if(rolls[i].includes('X'))
				rolls.splice(i, 1, 10);
		}

		return rolls;
	}

	return replace();
};

