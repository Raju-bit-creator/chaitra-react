import React from "react";

const Alert = (props) => {
  //   console.log("thsi is props alert", props.alert);

  return (
    <div>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type}:</strong> {props.alert.message}
        </div>
      )}
    </div>
  );
};

export default Alert;
