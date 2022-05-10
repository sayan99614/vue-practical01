import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
export default {
  namespaced: true,
  state() {
    return {
      token: "",
      email: "",
      refreshToken: "",
      expiresIn: "",
      userId: "",
    };
  },
  actions,
  mutations,
  getters,
};
