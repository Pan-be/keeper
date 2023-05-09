import { useState } from "react"

const AddNote = (props) => {
	const [newNote, setNewNote] = useState({ noteTitle: "", noteContent: "" })

	const changeHandler = (e) => {
		const { value, name } = e.target

		setNewNote({ ...newNote, [name]: value })
	}

	const addNote = (e) => {
		e.preventDefault()
		props.onAdd(newNote)
		setNewNote({ noteTitle: "", noteContent: "" })
	}

	return (
		<form onSubmit={addNote}>
			<input
				onChange={changeHandler}
				value={newNote.noteTitle}
				name='noteTitle'
			/>
			<textarea
				onChange={changeHandler}
				value={newNote.noteContent}
				name='noteContent'
			/>
			<button>Add</button>
		</form>
	)
}

export default AddNote
