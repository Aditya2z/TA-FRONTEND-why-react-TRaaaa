var root = document.getElementById("root");

let fruits = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

function handleClick(event, props) {
  // if(event.target.innerText === "Click Me") {
  //     alert(`Hello!`);
  //     root.innerHTML = '';
  //     ReactDOM.render(<Button name = "How can I help you?" />, root);
  // }
  // if(event.target.innerText === "How can I help you?") {
  //     alert(`To learn React use https://reactjs.org`);
  //     alert(`React and ReactDOM works together`);
  //     alert(`Babel helps in writing JSX`);
  //     root.innerHTML = '';
  //     let got =
  //     <div>
  //     <Button name = "Arya" className = "GOT"/>
  //     <Button name = "John" className = "GOT"/>
  //     <Button name = "Bran" className = "GOT"/>
  //     </div>
  //     ReactDOM.render( got, root);
  // // }
  // if(props.className) {
  //     alert(`Hello! ${event.target.innerText}`);
  //     root.innerHTML = '';
  //     ReactDOM.render(<Button name = "How can I help you?" />, root);
  // }

  if(event.target.innerText === "Click Me") {
    let got = (
        <div>
          {
          fruits.map((fruit) => {
           return <Button key = {fruit.id} name={fruit.value} />;
          })
          }
        </div>
      );
    
      ReactDOM.render(got, root);
  } else {
    alert(props.name);
  }
}

function Button(props) {
  return (
    <button onClick={(event) => handleClick(event, props)}>{props.name}</button>
  );
}

ReactDOM.render(<Button name="Click Me" />, root);
