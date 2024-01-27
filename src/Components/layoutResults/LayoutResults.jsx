import React from "react";
import { Button } from "../ul/button/Button";
// import { useReducer } from 'react'

import { useState } from "react";
import { Modal } from "../modal/Modal";
import { Input } from "../ul/input/Input";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { Card } from "../card/Card";
// import { createPortal } from "react-dom";

// const modalYess = true;
// const modalNot = false;
// const handleModal = (state, arick) => {
//   return state.arick = true;
// }

export const LayoutResults = () => {
	// const [state, defults] = useReducer(handleModal, modalYess);
	const [state, setState] = useState(false);
	const modalYess = () => setState(!state);
	const modalNoo = () => setState(false);
	const [fetchz, setFetchz] = useState([]);
	const [valueInput, setInputValue] = useState("");
	const url = `https://crudcrud.com/api/b13483dca0ee4e17b89cbb900f88cbdd/users`;
	async function postUsers() {
		const data = {
			value1: valueInput,
		};
		setFetchz([data, fetchz]);
		setInputValue("");
		try {
			await fetch(url, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(data),
			});
			getUsers();
		} catch (e) {
			console.error(e);
		}
	}
	const getUsers = async () => {
		try {
			const res = await fetch(url);
			const dataResult = await res.json();
			setFetchz(dataResult);
		} catch (e) {
			console.error(e);
		}
	};
	// const deleteUsers = async (id) => {
	// 	try {
	// 		await fetch(`${url}/${id}`, {
	// 			method: 'DELETE',
	// 			headers: {
	// 				'Content-Type' : 'application/json',
	// 			}
	// 		});
	// 		getUsers();
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// }
	const deleteUsers = async (id) => {
		try {
			await fetch(`${url}/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});
			getUsers();
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			{state &&
				createPortal(
					<Modal isOpen={modalNoo}>
						<div>
							<label>Возросы ?</label>
							<Input type="text" value={valueInput} setData={setInputValue} />
							<p>Lorem, ipsum dolor.</p>
							<Button onClick={() => postUsers()}>Add</Button>
						</div>
					</Modal>,
					document.getElementById("modal")
				)}
			<div>
				<div>
					<Button onClick={modalYess}>Modal!</Button>
				</div>
			</div>
			<div>
				<Card
					fetchz={fetchz}
					setFetchz={setFetchz}
					onClickButtons={() => deleteUsers()}
				/>
			</div>
		</>
	);
};
