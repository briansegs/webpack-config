import "../styles/index.scss"
import Recipes from "./Recipes";
import Black from "../images/Alien_Black_TP.png"
import Green from "../images/Alien_TP.png"

const App = () => {
    return (
        <>
            <section className="hero"></section>
        <main>
            <section>
                <h1>Oh hai O, React</h1>
            </section>
            <img src={Black} alt="black head" width="250px" />
            <img src={Green} alt="Green head" width="250px" />
            <Recipes />
        </main>
        </>
    );
};

export default App