export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  Node(value = null, next = null) {
    return { value, next };
  }

  append(value) {
    if (this.head === null) {
      this.head = this.Node(value);
      this.tail = this.head;
    } else {
      const newNode = this.Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = this.Node(value, this.head);
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
  }

  size() {
    let numberOfNodes = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      numberOfNodes++;
      currentNode = currentNode.next;
    }
    return numberOfNodes;
  }

  headReturn() {
    return this.head;
  }

  tailReturn() {
    return this.tail;
  }

  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {
    if (this.head === null) return null;
    const removeNode = this.tail;
    let currentNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return removeNode;
    }

    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    this.tail = currentNode;
    this.tail.next = null;
    return removeNode;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let string = "";
    while (currentNode !== null) {
      string += `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    string += "NULL";
    return string;
  }
}

// Pruebas de la lista enlazada en el mismo archivo
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

console.log(list.toString()); // Debería mostrar {10} -> {20} -> {30} -> NULL
console.log("Tamaño de la lista:", list.size()); // Debería mostrar 3
console.log("Contiene 20:", list.contains(20)); // Debería mostrar true
console.log("Contiene 40:", list.contains(40)); // Debería mostrar false
console.log("Valor en índice 1:", list.at(1).value); // Debería mostrar 20
list.pop();
console.log(list.toString()); // Debería mostrar {10} -> {20} -> NULL
