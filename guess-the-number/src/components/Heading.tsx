import React from "react";

const Heading: React.FC<{ restartGame: () => void }> = ({ restartGame }) => {
	return (
		<>
			<div className="flex justify-between">
				<button
					onClick={restartGame}
					className="border font-press-start text-3xl px-5 py-3 mt-4 ml-4 text-mist-900 bg-white"
				>
					Again!
				</button>
				<h2 className="font-press-start text-sm mt-4 mr-4 text-white">
					(Between 1 and 20)
				</h2>
			</div>
		</>
	);
};

export default Heading;
