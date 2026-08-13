let container = document.querySelector("#container");
let data =  [];
function ApiCall(){
fetch("https://jsonplaceholder.typicode.com/users")
.then(resp=>resp.json())
.then(users=>
    users.forEach((user,index)=>{
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

let h2 = document.createElement("h2");
h2.innerText = "Leanne Graham"

cardDiv.innerHTML = `
  <h2>${user.name}</h2
   <p><strong>Username:</strong>${user.username}</p>
            <p><strong>Email:</strong>${user.email}</p>
            <p><strong>City:</strong>${user.address.city}</p>
            <p><strong>Zipcode:</strong>${user.address.zipcode}</p>
            `;

            container.append(cardDiv);
            data.push(user);
            }),
);
}
ApiCall();

            document.querySelector("#search").addEventListener("change",()=>{
           let  inputVal = document.querySelector("#search").value;
             if(inputVal=== ""){
                data = []
                 document.querySelectorAll(".card").forEach((card) => card.remove());
             ApiCall()
             }else{
                     let find  = data.find((item)=>
            item.username.toLowerCase().includes(inputVal.toLowerCase())
        );
        

        
         document.querySelectorAll(".card").forEach((card)=> card.remove());

         
         let cardDiv = document.createElement("div");
         cardDiv.classList.add("card");

         let h2 = document.createElement("h2");
         h2.innerText = "Leanne Graham";

         cardDiv.innerHTML = `
         <h2>${find.name}</h2
         <p><strong>Username:</strong>${find.username}</p>
            <p><strong>Email:</strong>${find.email}</p>
            <p><strong>City:</strong>${find.address.city}</p>
            <p><strong>Zipcode:</strong>${find.address.zipcode}</p>
            `;
            container.append(cardDiv);
    }
          });

          