'use strict';

import { getRandomEmoji, getNasaData } from "./api.js";
import { appBtn, showEmptyState, renderEmoji, renderNasa, showError } from "./dom.js";

(()=>{
    const STORAGE_KEY = "emojiNasaData";
    const STORAGE_TIME_KEY = "emojiNasaTime";
    const CACHE_LIMIT = 1000 * 60 * 30;

    const loadData = () => {
        showEmptyState();

        const savedData = localStorage.getItem(STORAGE_KEY);
        const savedTime = localStorage.getItem(STORAGE_TIME_KEY);
        const currentTime = Date.now();

        if (savedData && savedTime && currentTime - Number(savedTime) < CACHE_LIMIT) {
            const parsedData = JSON.parse(savedData);
            renderEmoji(parsedData.emoji);
            renderNasa(parsedData.nasa);
            return;
        }
        getRandomEmoji()
        .then(emojiData => {
            renderEmoji(emojiData);

            return getNasaData(emojiData)
            .then(nasaData => {
                return {
                    emoji: emojiData,
                    nasa: nasaData
                };

            });
        })
        .then(finalData => {
            renderNasa(finalData.nasa);

            localStorage.setItem(STORAGE_KEY, JSON.stringify(finalData));
            localStorage.setItem(STORAGE_TIME_KEY, Date.now().toString());
        })
        .catch(error => {
            console.log(error);
            showError("Something went wrong loading the APIs.");
        });
    };
    loadData();

    appBtn.addEventListener("click", () => {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STORAGE_TIME_KEY);
        loadData();
    
    });
})();