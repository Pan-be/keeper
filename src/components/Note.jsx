const Note = (props) => {
	const deleteNoteHandler = () => {
		props.deleteNote(props.id)
	}

	return (
		<div className='note'>
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button onClick={deleteNoteHandler}>Delete</button>
		</div>
	)
}

export default Note
