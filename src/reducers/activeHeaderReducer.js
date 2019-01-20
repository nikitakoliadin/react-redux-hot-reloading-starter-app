export default function (state = null, action) {
    switch (action.type) {
        case "HEADER_SELECTED":
            return action.payload;
        default:
            return state;
    }
};
