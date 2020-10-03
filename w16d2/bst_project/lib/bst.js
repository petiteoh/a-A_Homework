class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(val, root = new TreeNode(val)) {
        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        }
    }
   
}

module.exports = {
    TreeNode,
    BST
};