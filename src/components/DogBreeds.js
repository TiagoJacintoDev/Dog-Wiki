export function DogBreeds({ dogs }) {
  return (
    <div>
      {dogs.map(dog => (
        <div key={dog.id}>
          <img src={dog.image.url}></img>
          <h3>{dog.name}</h3>
        </div>
      ))}
    </div>
  );
}
