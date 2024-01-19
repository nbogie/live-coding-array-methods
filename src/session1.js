import { hiragana } from "../data/hiragana.js";
import { simpsonsEpisodes } from "../data/simpsons.js";
import { elementsData } from "../data/elements.js";

function isSeason4(episodeObj) {
    return episodeObj.season === 4;
}

const season4EpObjects = simpsonsEpisodes.filter(isSeason4);

const season4EpNames = season4EpObjects.map((epObj) => epObj.name);

console.log(season4EpNames);
