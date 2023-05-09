import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NotesList from "./components/NotesList"
import AddNote from "./components/AddNote"

const App = () => {
	const [notes, setNotes] = useState([])

	const addNote = (note) => {
		setNotes([...notes, note])
		console.log(notes)
	}

	const deleteNote = (id) => {
		setNotes((prevState) => {
			return prevState.filter((note, index) => {
				return index !== id
			})
		})
	}

	return (
		<>
			<Header />
			<AddNote onAdd={addNote} />
			<NotesList notes={notes} deleteNote={deleteNote} />
			<Footer />
		</>
	)
}

export default App
