import { useEffect, useState } from "react";

export default function EjemploApi() {
  const [jokes, setJokes] = useState([]);


  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/programming?amount=10")
      .then(res => res.json())
      .then(json => {
        setJokes(json.jokes);
        console.log(json.jokes)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      {jokes.map((joke) => (
        <p key={joke.id}>
          {joke.type === "single"
            ? joke.joke
            : `${joke.setup} ${joke.delivery}`}
        </p>
      ))}
    </>
  )
}