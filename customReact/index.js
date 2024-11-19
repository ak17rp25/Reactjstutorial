function customRender(reactElement, root){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    root.appendChild(domElement);
}

// const reactElement = {
//     type:'a',
//     props:{
//         href:'https://www.google.com/',
//         target:'_blank'
//     },
//     children:'Click me to Visit Google'
// }
const root = document.getElementById('root');

customRender(reactElement, root);