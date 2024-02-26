document.getElementById('downloadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const url = document.getElementById('url').value;
    const format = document.getElementById('format').value;
  
    // The endpoint from RapidAPI for All Media Downloader
    const endpoint = 'https://all-media-downloader.p.rapidapi.com/api';

    // Headers as required by RapidAPI
    const headers = {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '79e744a8c3mshadd880610adbc82p13a470jsn6147afa2a9fe', // Replace with your RapidAPI key
      'X-RapidAPI-Host': 'all-media-downloader.p.rapidapi.com'
    };

    // POST body data as required by the API
    const bodyData = {
      url: url, // The URL to download from
      format: format // The format to download (e.g., 'mp3', 'mp4')
    };
  
    // Fetch call with the correct endpoint and headers
    fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(bodyData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `download.${format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(downloadUrl);
    })
    .catch(error => console.error('Error:', error));
});
