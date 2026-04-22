import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress, Alert, Divider } from '@mui/material';
import NotesTable from './components/NotesTable';
import { fetchNotes } from './api';

function App() {
  const [notes, setNotes] = useState([]);
  const [allnotes,setAllNotes] = useStste([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query,setQuery] = useState(" ");

  useEffect(() => {
    fetchNotes()
      .then((data) => {
        setNotes(data);
        setLoading(false);

      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  const handleuser = async()=>{
    fetch('http://localhost:5004/api/Notes/:id');
    try{
      const query = req.query.query;
      const data = res.json();
      return res.status(200).json(data);
    }
    catch(err){
      return res.status(500).json("error notes not found");
    }
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

    </Container>
  );
}

export default App;
