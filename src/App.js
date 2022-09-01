import {useState} from 'react'
function App() {

  const [name, setName] = useState('Mehmet');
  const [age, setAge] = useState(29);
  const [friends,setFriends] = useState(['Ahmet','Murat']);
  const [address, setAddress] = useState({title:'istanbul', zip:34755})

  return (
    <div >
      <h1>Hello {name}</h1>
      <h2>{age}</h2>
      <button onClick={()=> setName("Ahmet")}>Click</button>
      <button onClick={()=> setAge(33)}>Change</button>


      <hr />

      <br></br>

      <h3>Friends</h3>
      {friends.map((friend,index) => (
        <div key={index}>{friend}</div>
      ))}
      <br />

      <button onClick={() => setFriends(['Ayşe', ...friends])}> New Friends </button>

      <br></br>
      <hr/>

      {address.title} {address.zip}
      <br/>

      <button onClick={()=>setAddress({...address, zip:44444, title:'Ankara'})}> Change the adress </button>

    </div>

  );
}

export default App;
