class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    };
};

class Trie {
    constructor() {
        this.root = new Node();
    };

    insertRecur(word) {
        let letter = word[0];
        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        };

        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[letter]);
        };
    };

    insertIter(word) {
        let node = this.root;
        
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];

            if (!(letter in node.children)) {
                node.children[letter] = new Node();
            };

            node = node.children[letter];
        };
        
        node.isTerminal = true;
    };

    searchRecur(word) {
        if (word.length === 0) {
            if (root.isTerminal) {
                return true;
            } else {
                return false;
            };
        };
        
        let letter = word[0];
        if (letter in root.children) {
            return this.searchRecur(word.slice(1), root.children[letter]);
        } else {
            return false;
        };
    };

    searchIter(word) {
        let node = this.root;
        
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];

            if (!(letter in node.children)) {
                return false;
            };

            node = node.children[letter];
        };

        return node.isTerminal;
    };

    wordsWithPrefix(prefix) {

    };
};

module.exports = {
    Node,
    Trie
};