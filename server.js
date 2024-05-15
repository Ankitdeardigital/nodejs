import http from 'http';
const PORT = 8000;



const server = http.createServer(async (req, res) => {
  
    res.end('<h1> hello world </h1>');
  
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});