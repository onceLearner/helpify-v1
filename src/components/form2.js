import React, { useState } from 'react'
import { Link } from "@reach/router"
import "../App.css";
import DateTimePicker from 'react-datetime-picker';
function Form2 () {
    const [value, onChange] = useState(new Date());
    
    const [cards, setCards] = useState([{ id: 1 }])


    return(
       
           
        <div class=" bg-gradient-to-tr from-purple-800 to-blue-400">
        <div class="flex items-center h-screen w-full bg-teal-lighter  ">
        <div class="w-full bg-white rounded shadow-lg p-8m-4  md:max-w-2xl md:mx-auto mt-10">
        
        <form>
        <h1 class="block w-full text-center text-xl font-bold text-hamid mb-6 mt-10 " style={{ fontWeight: "600" }}> Programmons ensemble votre demande</h1>

            <textarea name="comments" id="comments" cols="80" rows="4" class="bg-gray-200  m-8"  placeholder="Description de la demande">
   </textarea>
   <div class="mx-4">
       <div >
       <label class="field-label md:ml-2 text-center font-bold " >Date: 
        </label>
      
        <DateTimePicker   onChange={onChange}
        value={value} required >
   
    
        </DateTimePicker>
   
</div>


<div class="mt-2">

<label class="field-label md:ml-2 text-center font-bold" >Ville: 
        </label>

<select class="mx-2" required>
<option>Séléctionnez une ville </option>
  <option>Marrakech</option>
  <option >Casablanca</option>
  <option >Tanger</option>
  <option > Rabat</option>
</select>
</div>

       <div><label class="field-label md:ml-2 text-center font-bold" >Adresse : 
        </label>
        <input type="text" required></input>
        </div>
        <div><label class="field-label md:ml-2 text-center font-bold" >Répétez : 
        </label>
       
   <div class="mx-8">
       
<div>
  <input type="radio" id="Chaque jour" name="drone" value="Chaque jour"
       ></input>
  <label for="Chaque jour">Chaque jour</label>
</div>

<div>
  <input type="radio" id="Chaque semaine" name="drone" value="dewey"></input>
  <label for="dewey">Chaque semaine</label>
</div>

<div>
  <input type="radio" id="Chaque semaine " name="drone" value="Chaque semaine "></input>
  <label for="Chaque semaine ">Chaque mois </label>
</div>

<div>
  <input type="radio" id="Non répétitive " name="drone" value="Non répétitive"></input>
  <label for="Non répétitive ">Non répétitive </label>
</div>

</div>
</div>
        <Link to="/form" >
    <button  className="  m-3 p-3 text-white w-80 font-semibold text-lg   bg-gradient-to-r from-blue-400 to-purple-500  md:w-80  rounded-2xl  ">Précédent</button>
         
          </Link>
          
          </div>
            </form>
            
           
            </div>
            </div>
            </div>
    )
}
export default Form2;