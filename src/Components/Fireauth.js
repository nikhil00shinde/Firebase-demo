import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
function Fireauth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState("");

	let create = async () => {
		let res = await auth.createUserWithEmailAndPassword(email, password);
	};

	useEffect(() => {
		//event listener hain onAuthStateChanged
		let unsub = auth.onAuthStateChanged((user) => {
			console.log(user);
			setUser(user);
		});
		return () => {
			unsub();
		};
	}, []);

	let logout = async () => {
		await auth.signOut();
	};

	let signIn = async () => {
		await auth.signInWithEmailAndPassword(email, password);
	};

	return (
		<>
			{user == null ? (
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label htmlFor="password">Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button onClick={signIn}>Sign In</button>
				</div>
			) : (
				<>
					<div>{user.email}</div>
					<button onClick={logout}>Logout</button>
				</>
			)}
		</>
	);
}

export default Fireauth;
