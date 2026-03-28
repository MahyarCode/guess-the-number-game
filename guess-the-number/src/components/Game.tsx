import React, { useContext } from "react";

import Heading from "./Heading";
import Title from "./Title";
import { GameInitialContext } from "../store/GameInitialContext";

const Game: React.FC = () => {
	const gameCTX = useContext(GameInitialContext);

	if (!gameCTX) return;

	return (
		<div className="h-screen w-screen bg-mist-900">
			<div>
				<Heading restartGame={gameCTX?.newRandomNumber} />
				<Title answer={gameCTX.randomNumber} isFinished={gameCTX.isFinished} />
			</div>

			<div className="grid grid-cols-2">
				<div className="grid justify-center">
					<input
						type="number"
						className="text-white font-press-start w-56 border rounded-l-md p-2 text-center size-24 text-5xl"
					/>
					<button className=" text-mist-900 font-press-start bg-white w-48 h-12 mt-12 ml-4">
						Check!
					</button>
				</div>
				<div className="ml-12">
					<h1 className="font-press-start text-white p-4 text-xl">Start Guessing...</h1>

					<p className="font-press-start text-white mt-17 text-xl">💯 Score: 20</p>
					<p className="font-press-start text-white mt-5 text-xl">🎖️ HighScore: 0</p>
				</div>
			</div>
		</div>
	);
};

export default Game;
