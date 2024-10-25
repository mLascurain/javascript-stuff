const HashMap = function (loadFactor = 0.75) {
  const map = {};
  let count = 0;

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  function set(key, value) {
    if (!map[hash(key)]) {
      count++;
    }
    map[hash(key)] = value;

    if (count / Object.keys(map).length > loadFactor) {
      console.log("Redimensionando el hash map...");
    }
  }

  function get(key) {
    if (map[hash(key)]) {
      return map[hash(key)];
    } else {
      return null;
    }
  }

  function has(key) {
    if (map[hash(key)]) {
      return true;
    } else {
      return false;
    }
  }

  function remove(key) {
    if (map[hash(key)]) {
      delete map[hash(key)];
      count--;
    }
  }

  function length() {
    return Object.keys(map).length;
  }

  function clear() {
    for (let key in map) {
      delete map[key];
    }
  }

  function keys() {
    return Object.keys(map);
  }

  function values() {
    return Object.values(map);
  }

  function entries() {
    return Object.entries(map);
  }

  return { hash, set, get, has, remove, length, clear, keys, values, entries };
};

// Crear una nueva instancia del hash map con un factor de carga de 0.75
const myHashMap = HashMap(0.75);

// Ejemplo de uso
myHashMap.set("Carlos", "I am Carlos.");
myHashMap.set("Carla", "I am Carla.");
myHashMap.set("Hector", "I am Hector.");
myHashMap.set("Jose", "I am Jose.");
console.log(myHashMap.length()); // Output: 2
console.log(myHashMap.keys()); // Output: ['Carlos', 'Carla']
console.log(myHashMap.values()); // Output: ['I am Carlos.', 'I am Carla.']
console.log(myHashMap.entries()); // Output: [['Carlos', 'I am Carlos.'], ['Carla', 'I am Carla.']]
console.log(myHashMap.has("Carlos")); // Output: true
console.log(myHashMap.length());
console.log("=======================================================");
myHashMap.remove("Carlos");
console.log(myHashMap.keys()); // Output: ['Carla']
console.log(myHashMap.values()); // Output: ['I am Carla.']
console.log(myHashMap.entries()); // Output: [['Carla', 'I am Carla.']]
console.log(myHashMap.has("Carlos")); // Output: true
console.log(myHashMap.length());
