import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import notes from "./notes"

const App = () => {
	return (
		<>
			<Header />
			{notes.map((note) => {
				return <Note title={note.title} />
			})}
			<Footer />
		</>
	)
}

export default App
