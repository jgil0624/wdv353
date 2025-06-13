async function getPokemonData(id) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/ppokemon/ ${ id }");
    const data1 = await response.json();
    const name = data1.name;
    const height = data1.height;
    const weight = data1.weight;
    const types = data1.types.map((t) => t.type.name);

    //second API call pokemon species
    const response2 = await fetch(
      "https://pokeapi.co/api/v2/pokemon-species/${id}"
    );
    const data2 = await response2.json();

    //find Engllish flavor text
    const flavorTextEntry = data2.flavor_text_entries.find(
      (entry) => entry.language.name === "en"
    );
    const flavorText = flavorEntry
      ? flavorEntry.flavor_text.replace(/\n|\f/g, "")
      : "No flavor text found";
    const habitat = data2.habitat ? data2.habitat.name : "Unknown";
    const isLegendary = data2.is_legendary;

    //return compiled object
    return {
      name,
      height,
      weight,
      types,
      flavorText,
      habitat,
      isLegendary,
    };
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}
// This function picks a random pokemon id
async function assignmentTask() {
  const randomId = Math.floor(Math.random() * 151) + 1;
  const result = await getPokemonData(randomId);
  console.log(result);
}

//Run the assignment function
assignmentTask();
