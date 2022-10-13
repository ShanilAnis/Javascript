// class Animal {
//   constructor(color = "yellow", energy) {
//     this.color = color;
//     this.energy = energy;
//   }
//   isActive() {
//     if (this.energy > 0) {
//       this.energy -= 20;
//       console.log(this.energy);
//     } else {
//       this.sleep();
//     }
//   }
//   sleep() {
//     this.energy += 20;
//     console.log("Energy is increasing currently at: ", this.energy);
//   }
//   getColor() {
//     console.log(this.color);
//   }
// }

// class Cat extends Animal {
//   constructor(
//     sound = "meow",
//     canJumpHigh = true,
//     canClimbTrees = true,
//     color,
//     energy
//   ) {
//     super(color, energy);
//     this.sound = sound;
//     this.canJumpHigh = canJumpHigh;
//     this.canClimbTrees = canClimbTrees;
//   }
//   makeSound() {
//     console.log(this.sound);
//   }
// }

// class Bird extends Animal {
//   constructor(sound = "chirp", canFly = true, color, energy) {
//     super(color, energy);
//     this.sound = sound;
//     this.canFly = canFly;
//   }
//   makeSound() {
//     console.log(this.sound);
//   }
// }

// class HouseCat extends Cat {
//   constructor(
//     houseCatSound = "hiss",
//     sound,
//     canJumpHigh,
//     canClimbTrees,
//     color,
//     energy
//   ) {
//     super(sound, canJumpHigh, canClimbTrees, color, energy);
//     this.houseCatSound = houseCatSound;
//   }
//   makeSound(option) {
//     if (option) {
//       super.makeSound();
//       {
//       }
//       console.log(this.houseCatSound);
//     }
//   }
// }

// class Tiger extends Cat {
//   constructor(
//     tigerSound = "Roar!",
//     sound,
//     canJumpHigh,
//     canClimbTrees,
//     color,
//     energy
//   ) {
//     super(sound, canJumpHigh, canClimbTrees, color, energy);
//     this.tigerSound = tigerSound;
//   }
//   makeSound(option) {
//     if (option) {
//       super.makeSound();
//     }
//     console.log(this.tigerSound);
//   }
// }

// class Parrot extends Bird {
//   constructor(canTalk = false, sound, canFly, color, energy) {
//     super(sound, canFly, color, energy);
//     this.canTalk = canTalk;
//   }
//   makeSound(option) {
//     if (option) {
//       super.makeSound();
//     }
//     if (this.canTalk) {
//       console.log("I'm a talking parrot!");
//     }
//   }
// }
// var penguin = new Bird("shriek", false, "black and white", 200);
// console.log(penguin)

// console.log(penguin.sound)

function longestWord(sentence) {
  let words = sentence.split(" ");
  let headingShow = document.querySelector("h1");
  let smallWord = words[0] ;
  let longWord;
  for (let word of words) {
    console.log(words.length);

    if (words.length < smallWord.length) {
      smallWord = word;
    } else if (word.length > smallWord.length) {
      longWord = word;
    }
    
    headingShow.textContent = `Longest Word is "${longWord}"`;
    // return longWord
    console.log(`Long Word ${longWord}`);
    console.log(`Small Word ${smallWord}`);
    

  }
}

longestWord("This is the value of Pakistan soort strenghtent");
