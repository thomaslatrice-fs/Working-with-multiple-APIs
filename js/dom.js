import { NASA_KEY } from "./config";

const appBtn = document.querySelector("#loadBtn");
const emojiOutput = document.querySelector("#emojiOutput");
const nasaOutput = document.querySelector("#nasaOutput");
const statusOutput = document.querySelector("#statusOutput");

export const showEmptyState = () => {
    statusOutput.textContent = "Loading data....";
    emojiOutput.innerHTML = "<p>No Emoji loaded yet.</p>";
    nasaOutput.innerHTML = "<p>No NASA content loaded yet.</p>";
};

export const renderEmoji = (emojiData) => {
    emojiOutput.innerHTML = "";

    const title = document.createElement("h2");
    const emojiChar = document.createElement("p");
    const category = document.createElement("p");
    const group = document.createElement("p");

    title.textContent = emojiData.name;
    emojiChar.innerHTML = emojiData.htmlCode[0];
    category.textContent = `Category: ${emojiData.category}`;
    group.textContent = `Group: ${emojiData.group}`;

    emojiOutput.appendChild(title);
    emojiOutput.appendChild(emojiChar);
    emojiOutput.appendChild(category);
    emojiOutput.appendChild(group);
};

export const renderNasa = (nasaData) => {
    nasaOutput.innerHTML = "";

    const title = document.createElement("h2");
    const explanation = document.createElement("p");
    const media = document.createElement("img");

    title.textContent = nasaData.title;
    explanation.textContent = nasaData.explanation;

    media.src = nasaData.url;
    media.alt = nasaData.title;
    media.style.maxWidth = "100%";

    nasaOutput.appendChild(title);
    nasaOutput.appendChild(media);
    nasaOutput.appendChild(explanation);
};

export const showError = (message) => {
    statusOutput.textContent = message;
};

export {appBtn};