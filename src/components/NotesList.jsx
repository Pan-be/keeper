import Note from "./Note"
import notes from "../notes"

const NotesList = () => {
	return notes.map((note) => (
		<Note title={note.title} content={note.content} key={note.key} />
	))
}

export default NotesList
