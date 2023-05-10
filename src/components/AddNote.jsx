import { useState } from "react"
import AddIcon from "@mui/icons-material/Add"
import Fab from "@mui/material/Fab"
import Zoom from "@mui/material/Zoom"

const AddNote = (props) => {
	const [newNote, setNewNote] = useState({ noteTitle: "", noteContent: "" })
	const [clicked, setClicked] = useState(false)

	const changeHandler = (e) => {
		const { value, name } = e.target

		setNewNote({ ...newNote, [name]: value })
	}

	const addNote = (e) => {
		e.preventDefault()
		props.onAdd(newNote)
		setNewNote({ noteTitle: "", noteContent: "" })
	}

	const clickHandler = () => {
		setClicked(true)
	}

	return (
		<div>
			<form onSubmit={addNote} className='create-note'>
				{clicked && (
					<input
						onChange={changeHandler}
						value={newNote.noteTitle}
						name='noteTitle'
						placeholder='Title'
					/>
				)}
				<textarea
					onClick={clickHandler}
					onChange={changeHandler}
					value={newNote.noteContent}
					name='noteContent'
					placeholder='Take a note...'
					rows={clicked ? "3" : "1"}
				/>
				<Zoom in={clicked ? true : false}>
					<Fab onClick={addNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	)
}

export default AddNote
