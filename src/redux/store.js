import { createStore, combineReducers } from "redux";
import { balanceReducer } from "./balanceSlice.js";
import { localeReducer } from "./localeSlice.js";

// const initialState = {
//   balance: {
//     value: 100,
//   },
//   locale: {
//     lang: "uk",
//   },
// };

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localeReducer,
});

export const store = createStore(rootReducer);
// const rootReducer = (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value + action.payload,
//         },
//       };
//     case "balance/withdraw":
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value - action.payload,
//         },
//       };
//     case "locale/changeLang":
//       return {
//         ...state,
//         locale: {
//           ...state.locale,
//           lang: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
