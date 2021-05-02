import React from 'react'
import { Link } from "@reach/router"

function Form () {
    
    

    return(
<div class=" bg-gradient-to-tr from-purple-800 to-blue-400 ">
<div class="flex items-center h-screen w-full bg-teal-lighter  ">
<div class="w-full bg-white rounded shadow-lg p-8m-4  md:max-w-2xl md:mx-auto mt-10">
<h1 class="block w-full text-center text-xl font-bold text-hamid mb-6 mt-10 " style={{ fontWeight: "600" }}>Sélectionnez le type de l'activité :</h1>
<form>



<div class="w-full flex justify-between flex wrap ">
 <div class="m-1 h-30 w-50 ">
 <img
                  alt="..."
                  src="https://images.theconversation.com/files/282104/original/file-20190701-105182-1q7a7ji.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"></img>
               
              
                <div class="pt-6 text-center ">
                
  <input type="radio" id="id1" name="Groceries" value="Groceries"
     ></input>
  <label class="text font-bold" for="Groceries">Groceries</label>
              </div>
            </div>    
         
            <div class="m-1 h-30 w-50 ">
 <img
                  alt="..."
                  src="https://images.theconversation.com/files/282104/original/file-20190701-105182-1q7a7ji.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"></img>
               
              
                <div class="pt-6 text-center ">
                
  <input type="radio" id="id2" name="Groceries" value="Groceries"
     ></input>
  <label class="text font-bold" for="Groceries">Groceries</label>
              </div>
            </div>  

      <div class="m-1  h-30 w-50 ">
            <img
                  alt="..."
                  src="https://images.theconversation.com/files/282104/original/file-20190701-105182-1q7a7ji.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"></img>
                <div class="pt-6 text-center mt-0">
                <input type="radio" id="id3" name="Groceries" value="Groceries"
     ></input>
  <label class="text font-bold" for="Groceries">Groceries</label>
              </div>
      </div>
      </div>  
      <div class="w-full flex justify-between flex wrap ">
 <div class="m-1 ">
 <img
                  alt="..."
                  src="https://media-eu.viva-images.com/vivastreet_ma/clad/32/7/217694946/vip2x/1.jpg?dt=51e43e32ad451db5028aae4b2847ce43"></img>
                <div class="pt-6 text-center ">
                <input type="radio" id="id4" name="Baby-Sitting" value="Baby-Sitting"
     ></input>
  <label class="text font-bold" for="Baby-Sitting">Baby-Sitting</label>
              </div>
            </div>  
            <div class="m-1 ">
 <img
                  alt="..."
                  src="https://media-eu.viva-images.com/vivastreet_ma/clad/32/7/217694946/vip2x/1.jpg?dt=51e43e32ad451db5028aae4b2847ce43"></img>
                <div class="pt-6 text-center">
                <input type="radio" id="id5" name="Baby-Sitting" value="Baby-Sitting"
     ></input>
  <label class="text font-bold" for="Baby-Sitting">Baby-Sitting</label>
              </div>
            </div>  
         
            <div class="m-2 ">
            <img
                  alt="..."
                  src="https://media-eu.viva-images.com/vivastreet_ma/clad/32/7/217694946/vip2x/1.jpg?dt=51e43e32ad451db5028aae4b2847ce43"></img>
                <div class="pt-6 text-center mt-0">
                <input type="radio" id="id6" name="Baby-Sitting" value="Baby-Sitting"
     ></input>
  <label class="text font-bold" for="Baby-Sitting">Baby-Sitting</label>
  
              </div>
      </div>
      </div>  
      
    <div class="">
     
    <Link to="/form2" >
    <button className="  m-3 p-3 text-white w-80 font-semibold text-lg   bg-gradient-to-r from-blue-400 to-purple-500  md:w-80  rounded-2xl  ">Suivant</button>
          </Link>
 
  
      </div> 
      
</form>



</div>
</div>
</div>
)
}
export default Form;