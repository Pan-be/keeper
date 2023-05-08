import { useState } from "react"

const Note = (props) => {
	const [note, setNote] = useState(true)

	const deleteNoteHandler = () => {
		setNote(false)
	}

	return (
		note && (
			<div className='note'>
				<h1>{props.title}</h1>
				<p>{props.content}</p>
				<button onClick={deleteNoteHandler}>X</button>
			</div>
		)
	)
}

export default Note
