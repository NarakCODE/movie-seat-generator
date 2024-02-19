import React, { useState } from 'react';
import AvailableSeat from './assets/available-seat.png';
import BookedSeat from './assets/booked-seat.png';

const App = () => {
	const [seats, setSeats] = useState([]);

	const generateRandomSeats = () => {
		const tempSeats = [];
		let tempAvailable = 0;
		let tempBooked = 0;

		for (let i = 0; i < 3; i++) {
			const line = [];
			for (let j = 0; j < 6; j++) {
				const rand = Math.floor(Math.random() * 2);
				line.push(rand);
				if (rand === 0) {
					tempAvailable++;
				} else {
					tempBooked++;
				}
			}
			tempSeats.push(line);
		}

		setSeats(tempSeats);
		setAvailable(tempAvailable);
		setBooked(tempBooked);
	};

	const [available, setAvailable] = useState(0);
	const [booked, setBooked] = useState(0);

	return (
		<div className="text-center my-10">
			<h2 className="text-2xl font-bold">Movie theater seat</h2>
			<p>Available Seats: {available}</p>
			<p>Booked Seats: {booked}</p>

			<div className="max-w-[1000px] px-10 mx-auto py-10">
				{seats.map((line, i) => (
					<div key={i} className="flex items-center justify-center">
						{line.map((seat, j) => (
							<div key={j}>
								{seat === 0 ? (
									<span>
										<img
											src={AvailableSeat}
											alt="Available Seat"
											className="w-[100px] h-[100px] object-cover"
										/>
										<p className="text-green-500">Available</p>
									</span>
								) : (
									<span>
										<img
											src={BookedSeat}
											alt="Booked Seat"
											className="w-[100px] h-[100px] object-cover"
										/>
										<p className="text-red-500">Booked</p>
									</span>
								)}
							</div>
						))}
					</div>
				))}
			</div>

			<button
				className="px-10 py-2 bg-white text-black rounded-xl"
				onClick={generateRandomSeats}
			>
				Generate
			</button>
		</div>
	);
};

export default App;
