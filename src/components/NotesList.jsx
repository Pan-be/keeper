import Note from "./Note"

const NotesList = (props) => {
	return props.notes.map((note, id) => (
		<Note
			title={note.noteTitle}
			content={note.noteContent}
			key={id}
			id={id}
			deleteNote={props.deleteNote}
		/>
	))
}

export default NotesList
