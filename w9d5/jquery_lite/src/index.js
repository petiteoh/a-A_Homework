const DomNodeCollection = require("./dom_node_collection.js");

window.$l = function(selector) {
    if (selector instanceof HTMLElement) {
        return new DomNodeCollection([selector]); 
    } else {
        const oldNodeList = document.querySelectorAll(selector);
        const nodeList = new DomNodeCollection(oldNodeList);
        return nodeList;
    };
}





