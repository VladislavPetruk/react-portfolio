import React, { useEffect } from "react";
import "./footer.scss";

const Footer = () => {
  const [date, setDate] = React.useState(new Date());

  useEffect(() => {
    const dateYear = setInterval(() => setDate(new Date()), 1000);
    return function clear() {
      clearInterval(dateYear);
    };
  });

  return (
    <footer>
      <div className="container">
        <p>
          Created by Vladyslav Petruk | Copyright © {date.getFullYear()} All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
