export const saveStateToLocalStorage = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch {
        console.log("Could not save state");
    }
};

export const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return; //возвращает undefined
        }
        return JSON.parse(serializedState);
    } catch {
        return;
    }
};