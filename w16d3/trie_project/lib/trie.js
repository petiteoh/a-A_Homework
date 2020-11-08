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

    };

    searchRecur(word) {

    };

    searchIter(word) {

    };

    wordsWithPrefix(prefix) {

    };
};

module.exports = {
    Node,
    Trie
};