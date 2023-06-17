const text = document.getElementById("text")
navigator.geolocation.getCurrentPosition(success, error, {
    // высокая точность
    enableHighAccuracy: true
  })
  
  function success({ coords }) {
    // получаем широту и долготу
    const { latitude, longitude } = coords
    const position = [latitude, longitude]
     // [широта, долгота]
     setInterval(() => {
    console.log(position)
    text.innerText = position
    }, 1000);
  }
  
  function error({ message }) {
    console.log(message) // при отказе в доступе получаем PositionError: User denied Geolocation
  }

  