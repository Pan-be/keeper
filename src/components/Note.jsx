import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"

const Note = (props) => {
	const deleteNoteHandler = () => {
		props.deleteNote(props.id)
	}

	return (
		<div className='note'>
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<IconButton onClick={deleteNoteHandler}>
				<DeleteIcon />
			</IconButton>
		</div>
	)
}

export default Note
