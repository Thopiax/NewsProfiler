import _ from "lodash";
import { sleep } from "../src/util";

// Registration
browser.runtime.onInstalled.addListener(({previousVersion}) => {
    console.log('NewsProvider installed: v.', previousVersion);
});

const scrollPosition = {};

const handleMessage = (message, sender, sendResponse) => {
    if (message.event === 'scroll') {
        if (_.isUndefined(scrollPosition[sender.tab.id])) scrollPosition[sender.tab.id] = [];

        scrollPosition[sender.tab.id].push(message.data.scrollY);
    }
};

// Message Handling
browser.runtime.onMessage.addListener(handleMessage);

// History Collection
// var searching = browser.history.search({
//     text: "",
//     startTime: 0,
//     maxResults: 1
// });

