

let name = document.querySelector("#name");
let age = document.querySelector("#age");
let profession = document.querySelector("#profession");
let city = document.querySelector("#city");
let imageURL = document.querySelector("#image");
let bio = document.querySelector("#bio");
let count = 0

document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();

  let container = document.querySelector("#container");
  let card = document.createElement("div");
  card.classList.add("card")

  let img = document.createElement("img");
  img.src = imageURL.value;
  card.append(img);

  let heading = document.createElement("h2");
  heading.innerText = name.value;
  card.append(heading);

  let span = document.createElement("span");
  span.innerText = profession.value;
  span.classList.add("card-profession");
  card.append(span);

  let cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info-div");

  let cardInfoParaAge = document.createElement("p");
  cardInfoParaAge.classList.add("info");
  let cardInfoParaAgeIcon = document.createElement("span")
  cardInfoParaAgeIcon.innerText = "📅";
  let cardInfoParaAgeSpan = document.createElement("span");
  cardInfoParaAgeSpan.innerText = "Age:";
  let cardInfoParaAgeSpan2 = document.createElement("span");
  cardInfoParaAgeSpan2.innerText = age.value;

  cardInfoParaAge.append(
    cardInfoParaAgeIcon,
    cardInfoParaAgeSpan,
    cardInfoParaAgeSpan2,
  );

  // profession

   let cardInfoParaProfession = document.createElement("p");
   cardInfoParaProfession.classList.add("info");
   let cardInfoParaProfessionIcon = document.createElement("span");
   cardInfoParaProfessionIcon.innerText = "👜";
   let cardInfoParaProfessionSpan = document.createElement("span");
   cardInfoParaProfessionSpan.innerText = "Profession:";
   let cardInfoParaProfessionSpan2 = document.createElement("span");
   cardInfoParaProfessionSpan2.innerText = profession.value;

   cardInfoParaProfession.append(
     cardInfoParaProfessionIcon,
     cardInfoParaProfessionSpan,
     cardInfoParaProfessionSpan2,
   );
  
  // city

   let cardInfoParaCity = document.createElement("p");
   cardInfoParaCity.classList.add("info");
   let cardInfoParaCityIcon = document.createElement("span");
   cardInfoParaCityIcon.innerText = "📌";
   let cardInfoParaCitySpan = document.createElement("span");
   cardInfoParaCitySpan.innerText = "City: ";
   let cardInfoParaCitySpan2 = document.createElement("span");
   cardInfoParaCitySpan2.innerText = city.value;
   cardInfoParaCity.append(
     cardInfoParaCityIcon,
     cardInfoParaCitySpan,
     cardInfoParaCitySpan2,
   );
  
   // bio

    let cardInfoParaBio = document.createElement("p");
    cardInfoParaBio.classList.add("info");
    let cardInfoParaBioIcon = document.createElement("span");
    cardInfoParaBioIcon.innerText = "ℹ";
    let cardInfoParaBioSpan = document.createElement("span");
    cardInfoParaBioSpan.innerText = "bio: ";
    let cardInfoParaBioSpan2 = document.createElement("span");
    cardInfoParaBioSpan2.innerText = bio.value;
    cardInfoParaBio.append(
      cardInfoParaBioIcon,
      cardInfoParaBioSpan,
      cardInfoParaBioSpan2,
    );
  
   cardInfo.append(
     cardInfoParaAge,
     cardInfoParaProfession,
     cardInfoParaCity,
     cardInfoParaBio,
   );

   card.append(cardInfo);


   let delBtn = document.createElement("button");
   delBtn.classList.add("delete-bnt");
   delBtn.innerText = "Delete";
    
   delBtn.addEventListener("click",()=>{
    card.remove();
    count = count - 1;
    let countProf = document.querySelector("#numProf");
    countProf.innerText = count;
   });

   card.append(delBtn);

   container.append(card);
   count = count + 1;
  let countProf = document.querySelector("#numProf")
  countProf.innerText = count;
});
