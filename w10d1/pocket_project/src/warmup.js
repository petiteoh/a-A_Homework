
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let pTag = document.createElement('p');
    let newContent = document.createTextNode(string);
    const children = htmlElement.children;
    if (children) {
        Array.from(children).forEach((child) => {
            htmlElement.removeChild(child);
        });
        pTag.appendChild(newContent);
        htmlElement.appendChild(pTag);
    } else {
        pTag.appendChild(newContent);   
        htmlElement.appendChild(pTag); 
    };
};

htmlGenerator('Welcome To the Pocket Project Marathon', partyHeader);


// function addElement () { 
//   // create a new div element 
//   var newDiv = document.createElement("div"); 
//   // and give it some content 
//   var newContent = document.createTextNode("Hi there and greetings!"); 
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);