
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogs) {
  let dogKeys = Object.keys(dogs);
  let dogValues = Object.values(dogs);
  var dogLinks = [];
  
  dogKeys.forEach((dogKey, idx) => {
    let aTag = document.createElement('a');
    aTag.innerHTML = dogKey;
    aTag.href = dogValues[idx];
    let liTag = document.createElement('li');
    liTag.className = 'dog-link';
    liTag.appendChild(aTag);
    dogLinks.push(liTag);
  });
  // debugger
  // console.log(dogLinks);
  return dogLinks;
}

function attachDogLinks() {
  let results = dogLinkCreator(dogs);
  // debugger
  let ulTag = document.getElementsByClassName('drop-down-dog-list');
  // debugger
  results.forEach((result) => {
    ulTag[0].appendChild(result);
  });
  // debugger;
}

attachDogLinks();