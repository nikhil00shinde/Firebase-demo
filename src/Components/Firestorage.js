import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
function Firestorage() {
	const [file, setFile] = useState("");

	let upload = () => {
		const uploadTask = storage.ref(`/data/${file.name}`).put(file);
		uploadTask.on("state_changed", fn1, fn2, fn3);
		// fn1 => Progress
		// fn2 => Error
		// fn3 => Success
		function fn1(snapshot) {
			let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log(`Upload is ${progress} done.`);
		}

		function fn2(error) {
			console.log(error);
		}

		function fn3() {
			uploadTask.snapshot.ref.getDownloadURL().then((url) => {
				console.log(url);
			});
		}
	};
	return (
		<div>
			<label htmlFor="file"></label>
			<input
				type="file"
				accept="image/"
				onChange={(e) => setFile(e.target.files[0])}
			/>
			<button onClick={upload}>Upload</button>
		</div>
	);
}

export default Firestorage;
