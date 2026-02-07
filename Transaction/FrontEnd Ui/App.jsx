import React, { useEffect } from "react";
import { useState } from "react";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import BankTransfer from "./components/BankTransfer";
import GoogleRedeem from "./components/ReedemCode";
import MobileRecharge from "./components/MobileRecharge";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SendMoney from "./components/SendMoney";
import Transactions from "./components/Transaction";
import PayWithCard from "./components/PayWithCard";
import Balance from "./components/Balance";
import Themes from "./components/Themes";

const App = () => {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("user") ? true : false,
  );

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const [page, setPage] = useState(localStorage.getItem("page") || "dashboard");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  const handleProfile = () => {
    setPage("profile");
  };
  const alts = () => {
    alert("Not available");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("page");
    setIsLogged(false);
    setPage("dashboard");
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      {!isLogged && <LoginPage onLogin={() => setIsLogged(true)} />}

      {isLogged && (
        <>
          {isLogged && (
            <>
              {page !== "profile" && page !== "settings" && (
                <Header onLogout={handleLogout} onProfile={handleProfile} />
              )}
            </>
          )}

          {page === "bank-transfer" && (
            <BankTransfer onBack={() => setPage("dashboard")} />
          )}
          {page === "dashboard" && (
            <Dashboard
              onSendMoney={() => setPage("send")}
              onViewTransactions={() => setPage("transactions")}
              onCheckBalance={() => setPage("balance")}
              onBankTransfer={() => setPage("bank-transfer")}
              mobileRecharge={() => setPage("mobile-recharge")}
              reedem={() => setPage("google-redeem")}
              card={() => setPage("card-pay")}
            />
          )}

          {page === "send" && <SendMoney onBack={() => setPage("dashboard")} />}

          {page === "transactions" && (
            <Transactions
              onBack={() => setPage("dashboard")}
              onViewTransactions={() => setPage("transactions")}
            />
          )}
          {page === "balance" && (
            <Balance onBack={() => setPage("dashboard")} />
          )}
          {page === "profile" && (
            <Profile
              onBack={() => setPage("dashboard")}
              onOpenSettings={() => setPage("settings")}
              ght={alts}
            />
          )}
          {page === "settings" && (
            <Settings
              onBack={() => setPage("profile")}
              onOpen={() => setPage("themes")}
              onLogout={handleLogout}
            />
          )}

          {page === "themes" && (
            <Themes
              theme={theme}
              toggleTheme={toggleTheme}
              onBack={() => setPage("settings")}
            />
          )}
          {page === "mobile-recharge" && (
            <MobileRecharge onBack={() => setPage("dashboard")} />
          )}
          {page === "google-redeem" && (
            <GoogleRedeem onBack={() => setPage("dashboard")} />
          )}
          {page === "card-pay" && (
            <PayWithCard onBack={() => setPage("dashboard")} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
