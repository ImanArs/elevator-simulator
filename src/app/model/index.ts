class NPC {
  constructor(id, name, patience) {
    this.id = id;
    this.name = name;
    this.patience = patience;
    this.next = null;
    this.prev = null;
  }
}

class NPCList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addNPC(id, name, patience) {
    const newNPC = new NPC(id, name, patience);
    if (!this.head) {
      this.head = this.tail = newNPC;
    } else {
      this.tail.next = newNPC;
      newNPC.prev = this.tail;
      this.tail = newNPC;
    }
    this.size++;
  }

  removeNPC(id) {
    let current = this.head;
    while (current) {
      if (current.id === id) {
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;
        if (current === this.head) this.head = current.next;
        if (current === this.tail) this.tail = current.prev;
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  iterate(callback) {
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
  }
}

export default NPCList;
