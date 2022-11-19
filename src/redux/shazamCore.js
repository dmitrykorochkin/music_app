const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2d0f74d985mshf7c1967884d8429p167b19jsn6654f2fa4789',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));