var currentStore = undefined;

export default {
    init(store){
        currentStore = store;
    },
    getStore(){
        return currentStore;
    }
};