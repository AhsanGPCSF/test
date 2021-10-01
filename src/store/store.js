import { createStore, combineReducers } from "redux";

let oneSection = {
    user:[
        {
            name : "Name",
            age : "Age",
            degree : "Degree",
        }
    ]
    
}
function twoSection() {
    return {
        degree : "Degree",
    }
}
function updateOneSetion(oldData = oneSection, newData) {

    oldData = {...oldData};
    if (newData.type == "Add_NAME") {
        oldData.user.push(newData);
    }
    if (newData.type == "DELETE_DATA") {
        oldData.user.splice(newData.myIndex,1);
    }
    if (newData.type == "NAME_CHANGE") {
        oldData.user[0].name = newData.name;
        oldData.user[0].age = newData.age;
        oldData.user[0].degree = newData.degree;
    }
    return oldData;
}

let allReducers = combineReducers({updateOneSetion,twoSection});
let mystore = createStore(allReducers);
export default mystore;