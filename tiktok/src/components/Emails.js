import React, { useState } from "react";
import { debounce } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./Emails.scss";

const validate = (email) => {
  const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

  return expression.test(String(email).toLowerCase());
};

const Emails = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [joinClicked, setJoinClicked] = useState(false);

  const onChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  async function saveEmail() {
    await fetch("https://xbj38ux4bi.execute-api.us-east-1.amazonaws.com/MisodopeAPI_Staging/StoreEmails", {
      body: JSON.stringify({ email }),
      method: "POST",
    }).then(() => {
      setSent(true);
    });
  }

  const onClick = () => {
    if (validate(email)) {
      setJoinClicked(true);
      const debounced = debounce(saveEmail, 1000);

      debounced();
    }
  };
  //Comment
  const loader = <FontAwesomeIcon className="emails__loader" icon={faSpinner} size="1x" color="white" rotation={90} />;

  const emailInput = (
    <div className="emails__container">
      <input type="email" onChange={onChange} placeholder="Your Email" />
      <button onClick={onClick} disabled={joinClicked}>
        {joinClicked ? loader : "Join"}
      </button>
    </div>
  );

  const emailSuccess = (
    <div className="emails__success">
      <span>Thanks! Stay tuned.</span>
    </div>
  );

  const renderEmail = sent ? emailSuccess : emailInput;

  return (
    <>
      <div className="main__join">
        Join our family and subscribe for more content.
      </div>
      <div className="emails">{renderEmail}</div>;
    </>
  )
};

export default Emails;
