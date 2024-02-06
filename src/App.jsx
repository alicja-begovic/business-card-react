import classes from "./App.module.css";
import myPhoto from "./assets/myPhoto.jpg";

function App() {
  return (
    <>
      <main className={classes.main}>
        <section className={classes.main_img}>
          <img className={classes.img} src={myPhoto} alt="My picture" />
        </section>
        <section className={classes.person}>
          <h2 className={classes.basicName}>Alicja Begović</h2>
          <h3 className={classes.position}>
            <i>junior frontend developer</i>
          </h3>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et, maxime architecto tenetur culpa voluptas mollitia, facilis quidem eum nobis repellat libero voluptatibus, esse aspernatur labore! Iste quaerat at non!
          </p>
          <div className={classes.test}>
            <p className={classes.socialMedia}>
              <a
                className={classes.spaceBetween}
                href="https://www.linkedin.com/in/alicja-begovi%C4%87-472424232/"
              >
                <strong>LinkedIn</strong>
              </a>
              <a
                className={classes.spaceBetween}
                href="https://github.com/alicja-begovic"
              >
                <strong>GitHub</strong>
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
