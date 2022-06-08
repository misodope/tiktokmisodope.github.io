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
  const [error, setError] = useState(null);
  const [joinClicked, setJoinClicked] = useState(false);

  const onChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const saveEmail = async () => {
    const response = await fetch("https://xbj38ux4bi.execute-api.us-east-1.amazonaws.com/MisodopeAPI_Staging/StoreEmails", {
      body: JSON.stringify({ email }),
      method: "POST",
    }).then((response) => response.json());

    if (response.statusCode !== 201) {
      setError(response);
      setSent(false);
      console.error(response);
      return;
    }

    setSent(true);
  };

  const onClick = () => {
    if (validate(email)) {
      setJoinClicked(true);
      const debounced = debounce(saveEmail, 1000);

      debounced();
    }

    //Comment
    const loader = <FontAwesomeIcon className="emails__loader" icon={faSpinner} size="1x" color="white" rotation={90} />;

    const emailInput = (
      <div className="emails__container text-black">
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
      <div className="flex flex-col justify-center items-center mb-3">
        <p>Join our family and subscribe for more content.</p>
        <div className="mt-2">{renderEmail}</div>
      </div>
    );
  };
};

export default Emails;
