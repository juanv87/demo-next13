import React from "react";
interface Props {
  width: number;
  height: number;
  weight: number;
}
const HambCSS = ({ width, height, weight }: Props) => {
  return (
    <>
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <style jsx>{`
        .hamburger-lines {
          display: block;
          height: ${height}px;
          width: ${width}px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }

        .hamburger-lines .line {
          display: block;
          height: ${weight}px;
          width: 100%;
          border-radius: 10px;
          background: var(--rojoprensa);
          transition: width 0.1s ease-in-out;
        }

        .hamburger-lines .line2 {
          width: ${width - 5}px;
        }
        .hamburger-lines:hover .line1 {
          width: ${width - 5}px;
          transition: width 0.1s ease-in-out;
        }
        .hamburger-lines:hover .line2 {
          width: ${width}px;
          transition: width 0.1s ease-in-out;
        }
        .hamburger-lines:hover .line3 {
          width: ${width - 5}px;
          transition: width 0.1s ease-in-out;
        }
      `}</style>
    </>
  );
};
export default HambCSS;
