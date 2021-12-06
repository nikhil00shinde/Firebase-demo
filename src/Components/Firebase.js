import React, { useEffect, useState } from "react";
import { database } from "../firebase";

function Firebase() {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");

	let createUserInDB = async () => {
		// let res = await database.users.add({ name, age });
		let res = await database.users.doc("1111111").set({ name, age }); //Create Command

		console.log(res);
	};

	useEffect(async () => {
		let uid = "YQLn83Xp7bcnjRVussus";
		// let data = await database.users.orderBy("createdAt", "desc").get();
		// let data = await database.users.doc(uid).get();

		//onSnapShot //READ
		let data = await database.users.get();
		data.forEach((obj) => console.log(obj.data()));
	});

	let update = async () => {
		let uid = "YQLn83Xp7bcnjRVussus";
		await database.users.doc(uid).update({ name, age }); //UPDATE COMMAND
	};

	let deleter = async () => {
		let uid = "1111111";
		await database.users.doc(uid).delete();
	};
	return (
		<>
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor="age">Age</label>
				<input
					type="number"
					value={age}
					onChange={(e) => setAge(e.target.value)}
				/>
				<button onClick={update}>Create</button>
				<button onClick={deleter}>Delete</button>
			</div>
		</>
	);
}

export default Firebase;
