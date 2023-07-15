import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import GoToTopButton from './components/GoToTopButton';
import Exhibit from './pages/Exhibit';
import Visit from './pages/Visit';
import PrivacyPage from './pages/PrivacyPolicy';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './components/BlogDetailPage';
import ExhibitorRegistrationPage from './components/ExhibtorRegisteration';
// import Speak from './pages/Speak';
// import Partner from './pages/Partner';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route  path="/" Component={Home} />
        <Route path="/exhibit" Component={Exhibit} />
        <Route path="/visit" Component={Visit} />
        <Route path="/privacy" Component={PrivacyPage} />
        <Route path="/blog" Component={BlogPage} />
        <Route  path="/blog/:id" Component={BlogDetailPage} />
        <Route path="/exhibitor-register" Component={ExhibitorRegistrationPage} />
        {/*
        <Route path="/partner" component={Partner} />
         */}
      </Switch>
      <GoToTopButton/>
      <Footer />
    </Router>
  );
};

export default App;
