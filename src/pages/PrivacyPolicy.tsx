import React from 'react';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Page from '../components/Page';

const PrivacyPage: React.FC = () => {
  return (
    <Page title="Privacy Policy - Electricl Expo" description="Learn about our privacy policy">
      <div>
        <PrivacyPolicy />
      </div>
    </Page>
  );
};

export default PrivacyPage;
