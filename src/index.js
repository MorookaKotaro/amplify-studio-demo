import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import { NavBar, HeroLayout1, Features2x2, MarketingPricing, FeaturesText2x2, MarketingFooter } from './ui-components';
Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <AmplifyProvider>
      <NavBar />
      <HeroLayout1 imageUrl="https://picsum.photos/1440/1128" />
      <FeaturesText2x2 />
      <Features2x2 />
      <MarketingPricing />
      <MarketingFooter />
    </AmplifyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
