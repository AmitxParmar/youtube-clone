import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Feed, VideoDetail, ChannelDetail, SearchFeed, Navbar } from "./components";

const App = () => {
  return ( 
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000', color: 'red' }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  )
}

export default App;
