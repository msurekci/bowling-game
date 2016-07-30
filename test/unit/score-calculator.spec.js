import { scoreCalculator } from '../../src/score-calculator';

describe('Score calculator', () => {

	it('should sum up all frames without any special frames', () => {
		let rolls = new Array(20);
		let gameWithNoSpecialFrames = rolls.fill(1);
		expect(scoreCalculator(gameWithNoSpecialFrames)).to.eql(20);
	});

	it('should sum up all frames with spares', () => {
		let rolls = new Array(21);
		let gameWithSpare = rolls.fill(1);
		gameWithSpare[19] = 9;

		expect(scoreCalculator(gameWithSpare)).to.eql(29);
	});

	it('should sum up all frames with strikes', () => {
		let rolls = new Array(12);
		let gameWithStrikes = rolls.fill(10);

		expect(scoreCalculator(gameWithStrikes)).to.eql(300);
	});
});