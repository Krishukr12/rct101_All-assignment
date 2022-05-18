function App() {
  const [toggle,setToggle]=useState(false);
  return (
    <div className="App">
     <button onClick={()=>setToggle(!toggle)}>
     {toggle ? "Show Todo": "Show Counter"}
     </button>
     {toggle ? <Counter/>: <Todo/>}
    </div>
  );
}