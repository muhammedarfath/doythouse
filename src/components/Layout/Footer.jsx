import React from "react";

function Footer() {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Made with <span className="text-red-500">❤️</span> by{" "}
              <a
                href="https://www.creative-tim.com"
                className="text-blueGray-500 hover:text-blueGray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Glimmer Tech inc.
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
