export interface InitialContext {
	score: number;
	newScore: (score: number) => void;
	highScore: number;
	newHighScore: (highScore: number) => void;
	randomNumber: number;
	newRandomNumber: () => void;
	isFinished: boolean;
	gameFinished: (condition: boolean) => void;
}
