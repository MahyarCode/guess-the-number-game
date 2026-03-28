import React from "react";

const Title: React.FC<{ answer: number; isFinished: boolean }> = ({ answer, isFinished }) => {
	return (
		<>
			<div className="mb-24">
				<div className="flex justify-center text-4xl font-press-start mt-12">
					<h1 className="flex text-white">Guess My Number</h1>
				</div>
				<div className="flex justify-center relative bg-white h-2 w-screen mt-24">
					<div className="flex items-center justify-center text-center bg-white h-24 w-36 absolute -bottom-10">
						{!isFinished ? (
							<p className="font-press-start text-5xl w-36 text-center">?</p>
						) : (
							<p className="font-press-start text-5xl">{answer}</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Title;
