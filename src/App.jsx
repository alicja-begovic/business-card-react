import classes from "./App.module.css";
import myPhoto from "./assets/myPhoto.jpg";

function App() {
  return (
    <>
      <div className={classes.main}>
        <section className={classes.main_img}>
          <img className={classes.img} src={myPhoto} alt="My picture" />
        </section>
        <section className={classes.person}>
          <h2 className={classes.basicName}>Alicja Begović</h2>
          <h3>junior frontend developer</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus sunt
            voluptatibus, nisi vitae dignissimos voluptates expedita fugiat.
            Tempora facere aut autem dignissimos at dolorum culpa voluptate
            eaque, placeat perspiciatis amet.
          </p>
          <div className={classes.test}>
          <p className={classes.socialMedia}>
            <a className={classes.spaceBetween} href="https://www.linkedin.com/in/alicja-begovi%C4%87-472424232/">LinkedIn</a>
            <a className={classes.spaceBetween} href="https://github.com/alicja-begovic" >GitHub</a>
            
          </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
