const toys = [
  {
    id: 1,
    inStock: true,
    upc: 2425323324,
    name: "Wooden Blocks",
    ageRange: [0, 100],
    category: "blocks",
    brand: "Mattel",
    franchise: null,
    battery: false,
  },
  {
    id: 2,
    inStock: false,
    upc: 2425323325,
    name: "Wooden Chess Set",
    ageRange: [5, 100],
    category: "games",
    brand: "Chess Master",
    franchise: null,
    battery: false,
  },
  {
    id: 3,
    inStock: true,
    upc: 2425323326,
    name: "Cat Lover's Jigsaw Puzzle",
    ageRange: [5, 100],
    category: "puzzles",
    brand: "Ridley's",
    franchise: null,
    battery: false,
  },
];


const toyPrices = new Map();
toyPrices.set(toys[0], 5.00);
toyPrices.set(toys[1], 20.0);
toyPrices.set(toys[2], 15.0);



const rubiksCube = {
  id: 4,
  inStock: true,
  upc: 630509932818,
  name: "Rubik's Cube",
  ageRange: [8, 100],
  category: "puzzles",
  gender: "all",
  brand: "Hasbro",
  franchise: null,
  battery: false,
};

const giantGiraffe = {
  id: 5,
  inStock: false,
  upc: 490860221248,
  name: "Melissa & Doug Giant Giraffe - Lifelike Stuffed Animal",
  ageRange: [3, 100],
  category: "stuffed animals",
  brand: "Hasbro",
  franchise: null,
  battery: false,
};

// toys.push(rubiksCube);
// toys.push(giantGiraffe);

// for (const toy of toys) {
//   console.log(`The ${toy.name} by ${toy.brand} is $${toy.price}`);
// }

// for (const toy of toys) {
//   toy.price *= 1.05;
//   console.log(`The ${toy.name} costs $${toy.price}`);
// }

const toyToFind = 2;

// for (const toy of toys) {
//   if (toy.id === toyToFind) {
//     console.log(toy.name, toy);
//   }
// }

function addToyToInventory(toyObject, price) {
  const index = toys.length - 1
  const maxId = toys[index].id;
  const id = maxId + 1;

  toyObject.id = id;

  toys.push(toyObject);
  toyPrices.set(toyObject, price)
}

const uno = {
  inStock: false,
  upc: 887961219722,
  name: "UNO Card Game - Retro Edition",
  ageRange: [7, 100],
  category: "games",
  brand: "Mattel",
  franchise: null,
  battery: false,
}
addToyToInventory(rubiksCube, 10.99);
addToyToInventory(giantGiraffe, 79.99);
addToyToInventory(uno, 5.99);
const toyNames = []
toys.forEach(toy => toyNames.push(toy.name))
console.log(toyNames)


const removeProduct = (id) => {
  for (let i = 0; i < toys.length; i++) {
    if(toys[i].id === id) {
      console.log(`removing ${toys[i].name}`)
      toys.splice(i, 1)
      break;
    }
  }
  
}

// const removeProduct2 = (id) => {
//   for (let i = 0; id >= toys[i].id; i++) {
//     console.log(i)
//     if(toys[i].id === id) {
//       console.log(`removing ${toys[i].name}`)
//       toys.splice(i, 1)
//     }
//   }
  
// }

removeProduct(2);
// removeProduct2(2)
console.log(toys)

// for (const toy of toys) {
//   console.log(`${toy.name} costs $${toyPrices.get(toy)}`)
// }




for (let [toyObject, price] of toyPrices) {
  console.log(`${toyObject.name} costs $${price}.`)
}
