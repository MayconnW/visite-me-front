import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const pluginName = "skeleton";

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: pluginName,
      storage,
      whitelist: ["auth"],
    },
    reducers
  );
  return persistedReducer;
};
