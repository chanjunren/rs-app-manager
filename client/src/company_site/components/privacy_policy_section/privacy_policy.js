import React, { useState } from 'react';

import NavBar from '../navbar';
import SideBar from '../sidebar';
import Footer from '../footer';
import { Link, List, ListItem, ListItemIcon, Typography } from '@material-ui/core';
import PrivacyPolicyStyles from './privacy_policy_styles';
import { withTheme } from '../../../util/theme';
import { MdFiberManualRecord } from 'react-icons/md';

const PrivacyPolicy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const privacyPolicyStyles = PrivacyPolicyStyles();

  return (
    <React.Fragment>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <div style={{ height: "80px" }} />
      <div id="blog" className={privacyPolicyStyles.privacyPolicyContainer}>
        <Typography className={privacyPolicyStyles.privacyPolicyTitle} variant='h3'>
          Privacy Policy
        </Typography>
        <Typography className={privacyPolicyStyles.privacyPolicyText} style={{ textAlign: 'left' }}>
          Last updated 18 Dec 2025
          <br/>
          <br/>
          <em className={privacyPolicyStyles.ExtraInfo}>***For the use of temi without any customized applications developed by Robosolutions, please refer to this&nbsp;  
              <a className={privacyPolicyStyles.WebsiteLink} href="https://www.robotemi.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
                link
              </a>. <br />
          ***For the use of customized applications developed by Robosolutions, please refer to the privacy policy below.</em>
          <br/>
          <br/>
          Robosolutions Pte. Ltd. ("Robosolutions", "we", "us", or "our") is committed to protecting your privacy.<br/>
          This application does NOT collect, store, transmit, or share any personal data. All functionality operates locally on your device.<br/>
          If you have any questions about this privacy notice, please contact us at&nbsp;
          <a href="mailto:enquiries@robosolutions.sg" className={privacyPolicyStyles.WebsiteLink}>
            <em>enquiries@robosolutions.sg</em>
          </a>.
        </Typography>
        <Typography className={privacyPolicyStyles.privacyPolicyHeader} variant='h4' color='secondary'>
          1. WHAT INFORMATION DO WE COLLECT?
        </Typography>
        <Typography className={privacyPolicyStyles.privacyPolicyText}>
          <em>In Short: We do not collect any personal information.</em> <br/>
          The App does not collect, store, transmit, or process any personal data, usage data, analytics data, or identifiers.<br/>
          All features of the App operate locally on your device.
          <List sx={{ listStyleType: 'disc', pl: 4 }}>
            <Typography variant="body2">
              <ListItemIcon sx={{ minWidth: 20 }}>
              <MdFiberManualRecord sx={{ fontSize: 8 }} />
            </ListItemIcon>
              Mobile Device Permissions: The App may request access to certain device features such as the camera, microphone, sensors, or storage.
              These permissions are used solely to enable core functionality of the App and are processed entirely on your device.
              No data accessed through these permissions is collected, stored, or transmitted to Robocore or any third party.
              You may revoke these permissions at any time through your device settings.
            </Typography>
          </List>
        </Typography>
        
        <Typography className={privacyPolicyStyles.privacyPolicyHeader} variant='h4' color='secondary'>
          2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
        </Typography>
        <Typography className={privacyPolicyStyles.privacyPolicyText} >
          <em>In Short: No.</em> <br/>
        Since the App does not collect any personal information, there is no data to share with third parties.
        </Typography>

        <Typography className={privacyPolicyStyles.privacyPolicyHeader} variant='h4' color='secondary'>
          3. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?     
        </Typography>
        <Typography className={privacyPolicyStyles.privacyPolicyText} >
         The App does not collect or transfer any data to external servers or third parties.
        </Typography>

        <Typography className={privacyPolicyStyles.privacyPolicyHeader} variant='h4' color='secondary'>
          4. HOW LONG DO WE KEEP YOUR INFORMATION?
        </Typography>
        <Typography className={privacyPolicyStyles.privacyPolicyText} >
          We do not retain any personal information because no personal data is collected by the App.
        </Typography>

        <Typography className={privacyPolicyStyles.privacyPolicyHeader} variant='h4' color='secondary'>
          5. HOW DO WE KEEP YOUR INFORMATION SAFE?
        </Typography>
        <Typography className={privacyPolicyStyles.privacyPolicyText} >
          Because the App does not collect or store personal information, there is no personal data at risk of breach on our systems.<br/>
            You are responsible for maintaining the security of your own device.
        </Typography>

        <Typography className={privacyPolicyStyles.privacyPolicyHeader} variant='h4' color='secondary'>
          6. DO WE COLLECT INFORMATION FROM MINORS?
        </Typography>
        <Typography className={privacyPolicyStyles.privacyPolicyText} >
          <em>In Short: No.</em> <br/>
        The App does not collect, store, or process any personal information from users of any age, including children under 18 years of age.<br/>
        Since no personal data is collected, there is no risk of personal information being gathered from minors.
        </Typography>

        <Typography className={privacyPolicyStyles.privacyPolicyHeader} variant='h4' color='secondary'>
          7. WHAT ARE YOUR PRIVACY RIGHTS?
        </Typography>
        <Typography className={privacyPolicyStyles.privacyPolicyText} >
          <em>In Short: There is no personal data for us to manage.</em><br/>
        Because the App does not collect, store, or process any personal information, there is no personal data to access, correct, delete, or transfer.<br/>
        If you have questions or concerns about how the App functions or how device permissions are used, you may contact us using the details provided below.
        </Typography>

    
        <Typography className={privacyPolicyStyles.privacyPolicyHeader} variant='h4' color='secondary'>
          8. CONTROLS FOR DO-NOT-TRACK FEATURES
        </Typography>
        <Typography className={privacyPolicyStyles.privacyPolicyText} >
          The App does not track users, monitor browsing activity, or collect analytics data.<br/>
        As such, Do-Not-Track ("DNT") browser or system signals are not applicable to the App.
        </Typography>

        <Typography className={privacyPolicyStyles.privacyPolicyHeader} variant='h4' color='secondary'>
          9. DO WE MAKE UPDATES TO THIS NOTICE?
        </Typography>
        <Typography className={privacyPolicyStyles.privacyPolicyText} >
          Yes, we may update this privacy notice from time to time.<br/>
        Any changes will be reflected by an updated "Revised" date. The updated notice will be effective once it is made available within the App or through our official channels.<br/>
        We encourage users to review this notice periodically.
        </Typography>
        
        <Typography className={privacyPolicyStyles.privacyPolicyHeader} variant='h4' color='secondary'>
          10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </Typography>
        <Typography className={privacyPolicyStyles.privacyPolicyText} >
          If you have questions or comments about this privacy notice, you may contact us at: <br/>
        Email:&nbsp; 
          <a href="mailto:enquiries@robosolutions.sg" className={privacyPolicyStyles.WebsiteLink}>
            <em>enquiries@robosolutions.sg</em>
          </a>
        </Typography>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default withTheme(PrivacyPolicy);