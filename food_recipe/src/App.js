import './App.css';
import './key';
import Axios from "axios";
import {useState} from "react";
import Recipe_Catalog from './Recipe_Catalog';

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");

  const YOUR_APP_ID = "aaa7e05c";
  const YOUR_APP_KEY = "e99f84d1658f6d4f9f4516bd83497ce5";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;
  
  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  
  return (
    <div className="app">
      <h1>Food Recipe Book</h1>
      <form className='app__searchForm' onSubmit={onSubmit}>
        <input className='app__input' type="text" placeholder='Enter Ingredients' value={query} onChange={(e)=>setquery(e.target.value)} />
        <input className='app__submit' type="submit" value="Search" />
        <select className='app__healthLabels'>
            <option onClick={() => sethealthLabels("vegan")}>Vegan</option>
            <option onClick={() => sethealthLabels("vegetarian")}>Vegetarian</option>
            <option onClick={() => sethealthLabels("paleo")}>Paleo</option>
            <option onClick={() => sethealthLabels("diary-free")}>Diary-free</option>
            <option onClick={() => sethealthLabels("gluten-free")}>Gluten-free</option>
            <option onClick={() => sethealthLabels("wheat-free")}>Wheat-free</option>
            <option onClick={() => sethealthLabels("low-sugar")}>Low-sugar</option>
            <option onClick={() => sethealthLabels("egg-free")}>Egg-free</option>
            <option onClick={() => sethealthLabels("peanut-free")}>Peanut-free</option>
            <option onClick={() => sethealthLabels("tea-nut-free")}>Tea-nut-free</option>
            <option onClick={() => sethealthLabels("soy-free")}>Soy-free</option>
            <option onClick={() => sethealthLabels("fish-free")}>Fish-free</option>
            <option onClick={() => sethealthLabels("shellfish-free")}>Shellfish-free</option>
        </select>
      </form>

      <div className='app__recipes'>
        {recipes.map(recipe => {
          return <Recipe_Catalog recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;
