import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from './components/pages/Pages';
import Login from './components/pages/Login'; // Import your Login component
import Register from './components/pages/Register';
import Project from './components/pages/Project';
import Pay from './components/pages/Pay';
import Content from './components/pages/Content';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/project/1" element={<Content/>}></Route>
        <Route path='/paytation' element={<Pay/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;

/* function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton /> {/* เรียกใช้ function โดย <ชื่อฟังก์ชัน/> *//* }
/*     </div> /* 
);
/* } */
/* const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
 */
/* 
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
 */
/* import { useState } from 'react';
export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}
function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
} */
/* 
import { useState } from 'react';
export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
} */