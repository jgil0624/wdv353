# Pokemon API Assignment

This assignment uses the [PokeAPI](https://pokeapi.co) and asynchronus JavaScript to fetch and display data about a random Pokemon.

# Features

- Uses `fetch` with `async/await`
- Makes two API requests:
  - `/pokemon/: id` for basic info
- Extracts:
  - name
  - height
  - weight
  - types
  - English flavor text
  - habitat
  - whether it is legendary

# How to Run

Use a browser console or run in Node.js with `node main.js`.

## Output Example

```json
{
  "name": "bulbasaur",
  "height": 7,
  "weight": 69,
  "types": ["grass", "poison"],
  "flavorText": " A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokemon.",
  "habitat": "grassland",
  "isLegendary": false
}
```
