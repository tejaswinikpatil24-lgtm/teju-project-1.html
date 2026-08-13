function Card(props){
  console.log(props);
return<>
  <div id="card">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tNlu2PFCG5ePoWYoqr6xQCnvfcbdR2HPT-VzqrKEXA&s=10"
      alt=""
    />
    <p>
      <b>Name: </b>{props.name || "N/A"}
    </p>
    <p>
      <b>Age:</b>20
      </p>
    <p>
      <b>Course: </b>Frontend{" "}
    </p>
    <p>
      <b>City: </b> Buldana
    </p>
    <button style={{width:"100%"}}>Online</button>

  </div>
</>;
}
export default Card;