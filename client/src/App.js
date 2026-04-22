import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress, Alert, Divider } from '@mui/material';
import NotesTable from './components/NotesTable';
import { fetchNotes } from './api';


function App() {
  const [notes, setNotes] = useState([]);
  const [allnotes,setAllNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query,setQuery] = useState(" ");

  useEffect(() => {
    fetchNotes()
      .then((data) => {
        setNotes(data);
        setAllNotes(data);
        setLoading(false);

      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filteredNotes = allnotes.filter(note=> note._id.includes(value));
    setNotes(filteredNotes);
    console.log(filteredNotes);


  }


  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        QuickNotes Pro
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && <Alert severity="error">{error}</Alert>}


      {!loading && !error && <NotesTable notes={notes} />}
      <Divider sx={{ my: 4 }} />
      {/* TODO: Implement the UI for the corresponding question set */}
      <h1>Notes Inventory </h1>
      <div>
        <h2> enter id:</h2>
        <input type="text" placeholder="Enter the ID here" onChange={handleSearch}/>
        <button onClick = {handleSearch}>] Search </button>
        
      </div>

    </Container>
  );
}

export default App;
