import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button type="submit" className="btn btn-primary btn-block">
      {isSubmitting ? (
        <>
          <span className="loader loader-spinner"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;
