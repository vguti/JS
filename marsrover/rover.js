var myRover = {
  position: [0,0], 
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++
      break;
    case 'E':
      rover.position[0]++
      break;
    case 'S':
      rover.position[1]--
      break;
    case 'W':
      rover.position[0]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--
      break;
    case 'E':
      rover.position[0]--
      break;
    case 'S':
      rover.position[1]++
      break;
    case 'W':
      rover.position[0]++ 
  }
  console.log("New Rover Position:[" + rover.position[0] + ", " + rover.position[1] + "]")
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W'
    break;
    case 'E':
      rover.direction = 'N'
    break;
    case 'S':
      rover.direction = 'E'
    break;
    case 'W':
      rover.direction = 'S'
      break;
  }
  console.log("You changed the direction of the rover to " + rover.direction + ". Rover Position:[" + rover.position[0] + ", " + rover.position[1] + "] ")
}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E'
    break;
    case 'E':
      rover.direction = 'S'
    break;
    case 'S':
      rover.direction = 'W'
    break;
    case 'W':
      rover.direction = 'N'
      break;
    }
    console.log("You changed the direction of the rover to " + rover.direction + ". Rover Position:[" + rover.position[0] + ", " + rover.position[1] + "] ")
}

function getCommands () {
  var arrayOfCommands = [];
  var commands = prompt('What are your commands?');

  for (i = 0; i < commands.length; i++) {
    arrayOfCommands.push(commands[i]);
    if (commands[i] === "f") {
      goForward(myRover);
    } else if (commands[i] === "b") {
      goBack(myRover);
    } else if (commands[i] === "l") {
      turnLeft(myRover);
    } else {
      turnRight(myRover);
    }
  }
}

getCommands();