const container = document.querySelector('.container');
const heading = document.querySelector('h1');
const walk = 500; //500px

// update text shadow of heading based on mouse position
function updateTextShadow(event) {
  // get width and height of screen
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  // console.log('width: ' + width, 'height: ' + height);
  // get mouse positions
  let offSetX = event.offsetX;
  let offSetY = event.offsetY;
  // add offsetTop and offsetLeft if we mousemove on heading
  if (this !== event.target) {
    offSetX += event.target.offsetLeft;
    offSetY += event.target.offsetTop;
  }

  // console.log('offsetX: ' + offSetX, 'offsetY: ' + offSetY);
  // set x y text shadow range between -250 and 250
  const xWalk = Math.round((offSetX / width * walk) - (walk / 2));
  const yWalk = Math.round((offSetY / height * walk) - (walk / 2));
  // console.log('xWalk: ' + xWalk, 'yWalk: ' + yWalk);

  // heading.style.textShadow =
  //   xWalk + 'px ' + yWalk + 'px 0 rgba(255, 0, 0, 0.7), ' +
  //   (xWalk * -1) + 'px ' + yWalk + 'px 0 rgba(0, 255, 0, 0.7), ' +
  //   yWalk + 'px ' + (xWalk * -1) + 'px 0 rgba(0, 255, 255, 0.7), ' +
  // (yWalk * -1) + 'px ' + xWalk + 'px 0 rgba(255, 0, 255, 0.7)';
  // set textshadow
  heading.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 0, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 0, 0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 255, 0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(255, 0, 255, 0.7)`
}

container.addEventListener('mousemove', updateTextShadow);