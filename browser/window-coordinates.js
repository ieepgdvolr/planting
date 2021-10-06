
//var special = document.getElementById('rec5');
  var special = document.querySelector('.special');
              special.addEventListener('click', (event) => {
                const rect = special.getBoundingClientRect();
                console.log(rect);
                special.innerHTML = `${event.clientX},${event.clientY}
                                    : ${event.pageX},${event.pageY}`;
               
              })