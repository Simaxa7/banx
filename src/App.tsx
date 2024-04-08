import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicForm from "./components/BasicForm";
import PaymentDescriptionSection from "./components/paymentDescriptionSection";
import usePayerAccountsData from "./customHooks/usePayerAccountsData";
import LanguageSelect from "./components/LanguageSelect";
import {LanguageProvider} from "./contex/LanguageContext";

function App() {
    const {payerAccountsData, loading} = usePayerAccountsData();

    return (
        <LanguageProvider>
            <div className="App">
                <header className="header">
                    <div className='header-wrapper'>
                        <img src={logo} className="logo" alt="logo"/>
                        <span>React app</span>
                        <LanguageSelect/>
                    </div>
                </header>

                {!loading
                    ? <main className="main">
                        <BasicForm payerAccountsData={payerAccountsData}/>
                        <PaymentDescriptionSection/>
                    </main>
                    : <div>download in progress</div>
                }

                <footer className="footer">
                    <img src={logo} className="logo" alt="logo"/>
                    <span>React app</span>
                </footer>
            </div>
        </LanguageProvider>
    );
}

export default App;
