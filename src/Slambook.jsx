import './Slambook.css';
import React from 'react';
function Slambook()
{
    return(
        <div>
        <box>
           <form>
               <legend>SLAMBOOK</legend>
               <label for = "name">Name: </label>
               <input type="text" id="name" placeholder= "Enter your name" /> <br/>
               <label for="Nickname">Nickname:</label>
               <input type="text" id="Nickname" placeholder="Enter your nickname"/> <  br/>
               <label for="Dob">Dob:</label> 
               <input type="date" id="Dob"/> <br/>
               <label for="address">Address:</label>
               <textarea input type ="text" id="address" placeholder="Enter your address"></textarea> <br/>
               <label for="Phone Number">Phone Number:</label>
               <input type="number" id="Phone Number" placeholder="+91" /> <br/>
               <label for = "Memories">Memories:</label>
               <textarea input type= "text" id ="Memories" Placeholder="Share your Sweet Memories"></textarea> <br/>
               <label for="gender">Gender:</label>
               <input type="radio" id="male" name="gender"/> 
               <label for="male">Male</label>
               <input type="radio" id="female" name="gender"/>
               <label for="female">Female</label> <br/>
               <label for="fav_act">Fav Actor:</label> <br/>
               <input type="checkbox" id="fav_act" />
               <label for="Ajith">Ajith</label>
               <input type="checkbox" id="fav_act" />
               <label for="Vijay">Vijay</label>
               <input type="checkbox" id="fav_act" />
               <label for="suriya">Suriya</label>
               <input type="checkbox" id="fav_act" />
               <label for="jayam ravi">Jayam Ravi</label>
               <input type="checkbox" id="fav_act" />
               <label for="Dhanush">Dhanush</label><br/>
               <label for="Schooling">Schooling:</label> 
               <select id="School">
                <option> Select school</option>
                <option> Green Valley High School </option> <br/>
                <option >ABC High School</option> <br/>
                <option>Lotus Matric High School</option><br/>
                <option>Malar International School</option><br/>
                </select> <br/>
                <br/>
                <button type="submit">SUBMIT</button>
           </form>
           </box>
        </div>
   )

}
export default Slambook;