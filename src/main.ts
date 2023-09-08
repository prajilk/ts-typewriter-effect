import "./style.css";
import Typewriter from "./typewriter";

const typewriter = new Typewriter(
    document.querySelector(".whitespace") as HTMLDivElement,
    {
        loop: false,
    }
);

typewriter
    .typeString("Hi, My name is Prajil")
    .pauseFor(1000)
    .typeString("\n\nI am a ")
    .typeString("Full stack developer")
    .deleteChars(20)
    .typeString("MERN stack developer")
    .deleteChars(20)
    .typeString("Front-end developer")
    .deleteChars(19)
    .typeString("Back-end developer")
    .deleteChars(18)
    .pauseFor(150)
    .deleteAll(10)
    .typeString("This is a TypeScript demo of Typewriter effect")
    .pauseFor(1000)
    .typeString("\n\nPlease remember to star this repository.")
    .pauseFor(1000)
    .deleteAll(10)
    .start();
