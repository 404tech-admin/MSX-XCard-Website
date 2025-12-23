export const useGlobalStates = () => {
  // wallet states
  const c_wallet_type = useState("c_wallet_type", () => null);
  const c_wallet_address = useState("c_wallet_address", () => null);
  const c_wallet_data = useState("c_wallet_data", () => null);

  // user states
  const c_user_once = useState("c_user_once", () => null);

  // dashboard states
  const c_last_login = useState("c_last_login", () => null);
  const c_current_login = useState("c_current_login", () => null);
  const c_selected_coin = useState("c_selected_coin", () => null);

  return {
    c_wallet_type,
    c_wallet_address,
    c_wallet_data,
    c_user_once,
    c_last_login,
    c_current_login,
    c_selected_coin,
  };
};
