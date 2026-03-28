import { useState, type ReactNode } from "react";
import React from "react";
import { GameInitialContext } from "./GameInitialContext";
const firstRandom = Math.random();

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [randomNumber, setRandomNumber] = useState<number>(Math.floor(firstRandom * 20) + 1);
	const [highScore, setHighScore] = useState<number>(0);
	const [score, setScore] = useState<number>(0);
	const [isFinished, setIsFinished] = useState<boolean>(false);

	function newScore(): void {
		setScore((prevScore) => prevScore - 1);
	}
	function newHighScore(highScore: number): void {
		setHighScore((prevHighScore) => (prevHighScore < highScore ? highScore : prevHighScore));
	}
	function newRandomNumber(): void {
		const generateNumber = Math.floor(Math.random() * 20) + 1;
		setRandomNumber(generateNumber);
		setIsFinished(false);
	}
	function gameFinished(condition: boolean): void {
		setIsFinished(condition);
	}

	const gameCTX = {
		score,
		newScore,
		highScore,
		newHighScore,
		randomNumber,
		newRandomNumber,
		isFinished,
		gameFinished,
	};

	return <GameInitialContext.Provider value={gameCTX}>{children}</GameInitialContext.Provider>;
};
