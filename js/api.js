import { NASA_KEY } from "./config.js";
//api 1 get random emoji
export const getRandomEmoji = ()=> {
    return fetch("https://emojihub.yurace.pro/api/random")
       .then(response => {
    if (!response.ok) {
        throw new Error("Request failed.");
    }
    return response.json();
});
};
//api 2 get color palette
export const getNasaData = (emojiData) => {
    let date = "2024-01-01";

    if (emojiData.category === "animals and nature") {
        date = "2024-02-01";
    }
    else if (emojiData.category === "food and drink") {
        date = "2024-03-01";
    }
     else if (emojiData.category === "travel and places") {
        date = "2024-04-01";
    }
     else if (emojiData.category === "activities") {
        date = "2024-05-01";
    }
     else if (emojiData.category === "objects") {
        date = "2024-06-01";
    }

    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${date}`;

    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("NASA request failed.");
        }
        return response.json();
    });
};