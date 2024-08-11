import React from 'react';
import resumeLogo from '../../assets/logos/resume.svg';

function Footer() {
    const handleDownload = () => {
      window.open('/Resume.pdf', '_blank');
    };

  return (
    <div className="Footer">
        
        <div className='content'>
            <p>&copy; 2024 Ujjwal.</p>
            <p>Built with passion and dedication.</p>
        </div>
        
         <div className="resume" onClick={handleDownload}>
            <img src={resumeLogo} alt="resumeLogo" />
            <p>Resume</p>
        </div>

    </div>
  );
}

export default Footer;
