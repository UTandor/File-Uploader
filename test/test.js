const axios = require("axios");

const question =
  "Define the similarities of Mars with Earth? Provide the response in the form of a JavaScript object, comprising a boolean field 'exists' indicating whether the answer is available, the actual answer under 'answer,' and sources presented as strings within an array named 'sources.' Ensure that the sources are exclusively derived from the provided data and quote them verbatim, including their respective headings or sections. Additionally, vary the language used in the response. You are not allowed to use any additinal sources. Only se the data that I have provided. Also note that the object will be like this: { exists: boolean, answer: string, sources: [string]  }. One last point is that you will never ever give your 'answer' in bullets.";
const haha = `Given this data: General Information: Position in the Solar System:  Mars is the fourth planet from the Sun. It lies between Earth and Jupiter. Orbital Characteristics:  Orbital Period: Approximately 687 Earth days. Average Distance from the Sun: About 142 million miles (227 million kilometers). Physical Characteristics:  Diameter: Approximately 6,779 kilometers (4,212 miles), making it the second smallest planet in our solar system after Mercury. Surface Area: Roughly 144.8 million square kilometers. Volume: 163.2 billion cubic kilometers. Mass: 6.39 x 10^23 kg, which is about 0.11 times Earth's mass. Gravity: About 38% of Earth's gravity. Atmosphere: Composition:  The Martian atmosphere is primarily carbon dioxide (about 95.3%). Nitrogen makes up about 2.7%, and the remaining 2% consists of argon, oxygen, water vapor, and trace amounts of other gases. Pressure and Density:  Surface pressure is about 0.6% of Earth's. Atmospheric density is much lower than Earth's due to the thin atmosphere. Surface Features: Topography:  Mars has diverse terrain, including vast plains, massive volcanoes, deep canyons, and polar ice caps. The highest volcano, Olympus Mons, is the tallest in the solar system, reaching about 13.6 miles (22 kilometers) high. Valles Marineris:  A system of canyons that dwarfs the Grand Canyon on Earth, with depths reaching up to 7 miles (11 kilometers) and stretching over 2,500 miles (4,000 kilometers). Polar Ice Caps:  Mars has polar ice caps composed mainly of water and carbon dioxide. The caps shrink and grow with the changing seasons. Moons: Phobos and Deimos: Mars has two small moons, Phobos and Deimos. They are irregularly shaped and are likely captured asteroids. Exploration: Robotic Missions:  Several missions have explored Mars, including rovers like Sojourner, Spirit, Opportunity, Curiosity, and Perseverance. Orbiters like Mars Odyssey, Mars Express, and MAVEN have also provided valuable data. Future Missions:  Planned missions include the Mars Sample Return, a collaborative effort by NASA and the European Space Agency (ESA). Potential for Life: Search for Life:  Mars has been a target in the search for past or present life. Water, considered a crucial ingredient for life, has been found in various forms on Mars. Methane Detection:  Detection of methane in the Martian atmosphere has led to speculation about the possibility of microbial life or geological processes. Human Exploration: Mars Colonization:  There are ongoing discussions and plans for human missions to Mars and the potential colonization of the planet. Challenges:  Human exploration faces significant challenges, including the harsh environment, radiation exposure, and the need for life support systems.. ${question}.`;
const options = {
  method: "POST",
  url: "https://gpts4u.p.rapidapi.com/llama2",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "35698e2ac8mshc23840ab07b4943p109e3fjsn49666b75f544",
    "X-RapidAPI-Host": "gpts4u.p.rapidapi.com",
  },
  data: [
    {
      role: "user",
      content: haha,
    },
  ],
};
const fetchData = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
fetchData();
