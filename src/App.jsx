import classes from './App.module.css';
import myPhoto from "./assets/myPhoto.jpg";


function App() {
  return (
    <>
      <div className={classes.card}>
        <section>
          <img className={classes.img} src={myPhoto} alt="My picture" />
        </section>
        <section>
          <h2>Alicja Begović</h2>
          <h3>junior frontend developer</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus sunt
            voluptatibus, nisi vitae dignissimos voluptates expedita fugiat.
            Tempora facere aut autem dignissimos at dolorum culpa voluptate
            eaque, placeat perspiciatis amet.
          </p>
          <p>My social media: LinkedIn, Facebook, github</p>
        </section>
      </div>
    </>
  );
}

export default App;
