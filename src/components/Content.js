import React, { useState } from "react";
import Button from "../components/Button";

const Content = () => {
  const [socials] = useState(["GitHub", "Google", "Twitter"]);
  return (
    <div className="content">
      <div className="sign-in">
        <h2 className="sign-in-heading">Sign in</h2>
        {socials.map((social, key) => <Button key={key} value={social} />)}
      </div>
    </div>
  );
};
export default Content;
