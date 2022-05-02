const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
   tree = [];
  root() {
    return this.tree.length ? { data: this.tree[0] } : null;
  }

  add(data) {
      this.tree.push(data);
  }

  has(data) {
      return this.tree.includes(data);
  }

  find(data) {
      const findEl = this.tree.find((el) => el === data);
      return findEl ? { data: findEl } : null;
  }

  remove(data) {
      this.tree = this.tree.filter((el) => el !== data);
  }

  min() {
      const result = Math.min(...this.tree)
      return result;
  }

  max() {
      const result = Math.max(...this.tree)
      return result;
  }
}

module.exports = {
  BinarySearchTree
};