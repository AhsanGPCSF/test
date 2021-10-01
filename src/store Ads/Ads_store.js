import {combineReducers, createStore } from "redux";

let adsArray = {
ads:[
    {
        pic:"/images/aloAnde.jpg",
        name: "Alo Andy",
        price:70,
    },
    {
        pic:"/images/aloMatar.jpg",
        name: "Alo Matar",
        price:100,
    },
    {
        pic:"/images/biryani.jpg",
        name: "Biryani",
        price:200,
    },
    {
        pic:"/images/daalChana.jpg",
        name: "Daal Chana",
        price:120,
    },
    {
        pic:"/images/drumSticks.jpg",
        name: "Drum Sticks",
        price:150,
    },
    {
        pic:"/images/friedRice.jpg",
        name: "Fried Rice",
        price:180,
    },
    {
        pic:"/images/karahi.jpg",
        name: "karahi",
        price:350,
    },
]
};

function AdsDataContainer(oldData= adsArray , newData ) {
    oldData = {...oldData};
    if (newData.type == "CREATE_AD") {
        oldData.ads.push(newData.ads);
        console.log(newData.ads);
    }
    if (newData.type == "DELETE_AD") {
        oldData.ads.splice(newData.index, 1);
    }
    return oldData;
}

let allReducers = combineReducers({AdsDataContainer});
let myAdsStore = createStore(allReducers);
export default myAdsStore;