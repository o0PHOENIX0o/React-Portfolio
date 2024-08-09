import React from 'react'

// import GitHubLogo from '../../assets/logos/github.svg'
// import LinkedinLogo from '../../assets/logos/linkedin.svg'
import resume from '../../assets/logos/resume.svg'

function Footer() {
    const handleDownload = () => {
        window.location.href = 'path/to/your/resume.pdf'; // Change this to your resume path
      };

  return (
    <div className="Footer">
        
        <div className='content'>
            <p>&copy; 2024 Ujjwal.</p>
            <p>Built with passion and dedication.</p>
        </div>
        
         <div className="resume" onClick={handleDownload}>
            <img src={resume} alt="resume" />
            <p>Resume</p>
        </div>

    </div>
  );
}

export default Footer;
