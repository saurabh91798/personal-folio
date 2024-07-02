'use client'; 

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/assets/resume/Saurabh-resume.pdf'; 
  link.download = 'Your_CV.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DownloadCV = () => {
  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={downloadCV}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadCV;