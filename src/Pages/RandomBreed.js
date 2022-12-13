import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeWhitespace } from "../helpers/functions";

export default function RandomBreed({ dogs }) {
  const navigateTo = useNavigate();
  const randomBreeds = dogs.map((dog) => dog.name);
  randomBreeds.sort(function () {
    return 0.5 - Math.random();
  });
  const firstRandomBreed = randomBreeds.find((dog, index) => index === 0);

  useEffect(() => {
    navigateTo(`/dogs/${removeWhitespace(firstRandomBreed)}`);
  }, []);
}
