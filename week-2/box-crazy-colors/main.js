

  // Function that changes background color based on mouse position
  onmousemove = e => {
    document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, 225`
  }

  // Create variable that references the container element
  let container = document.querySelector('.container')

  // Function that creates a number of boxes equal to the value passed
  function createBoxes(num) {
    container.innerHTML = ''
    for (var i = 0; i < num; i++) {
      container.innerHTML += `<div class="box">${i+1}</div>`
    }
  }

  // Inovke the created function
  createBoxes(10)

  function poop() {
    console.log('sdfs');
  }
