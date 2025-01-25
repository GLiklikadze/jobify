// import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-12 max-h-32">
      <div className="mx-auto space-y-2 rounded-t-3xl border-t-2 border-primary px-4 py-6 text-center text-muted-foreground">
        <p>© 2024 Jobify. All rights reserved.</p>
        <div className="space-x-4">
          <Link to="" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
