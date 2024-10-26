//Create Custom React Element Structure

const reactElement = {
  tagType: "a",
  props: {
    href: "https://react.dev/",
    target: "_blank",
  },
  children: "Click here to learn React in detail",
};

// Create container in which above react element should be injected
const customConatiner = document.querySelector("#root");

// Create custom function which takes two arguments and render react element.

function customeRenderInStaticStyle(reactElement, container) {
  //Step-1: create document element for react tag type
  const domElement = document.createElement(reactElement.tagType);

  //Step-2: Add props attribute in domElement
  domElement.setAttribute("href", reactElement.props["href"]); // One way to read value of Object
  domElement.setAttribute("target", reactElement.props.target); // This another way to ready value of object

  //Step-3: Add children to dom element
  domElement.innerHTML = reactElement.children;

  //Final Step: add dom element in container
  container.appendChild(domElement);
}

const customeRenderInDynamicStyle = (reactElement, container) => {
  //Step-1: create document element for react tag type
  const domElement = document.createElement(reactElement.tagType);

  //Step-2: Loop over prop object to set attribute dynamically in dom element
  Object.keys(reactElement.props).forEach((propKey) => {
    domElement.setAttribute(propKey, reactElement.props[propKey]);
  });

  //Step-3: Add children to dom element
  domElement.innerHTML = reactElement.children;

  //Final Step: add dom element in container
  container.appendChild(domElement);
};

//customeRenderInStaticStyle(reactElement, customConatiner);
customeRenderInDynamicStyle(reactElement, customConatiner);
