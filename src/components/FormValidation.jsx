import React, { useState } from "react";

const FormValidation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState({});
 
  const validateForm = () => {
    let errorObj = {};

    if (!firstName.trim()) {
      errorObj.firstName = "First name is required";
    }
    if (!lastName.trim()) {
      errorObj.lastName = "Last name is required";
    }
    if (!email.trim()) {
      errorObj.email = "Email is required";
    } else if (!email.includes("@") || !email.includes(".com")) {
      errorObj.email = "Please enter a valid email address";
    }
    if (!phoneNumber.trim()) {
      errorObj.phoneNumber = "Phone number is required";
    } else if (phoneNumber.length !== 10) {
      errorObj.phoneNumber = "Phone number must be 10 digits long";
    }

    setError(errorObj);
    return Object.keys(errorObj).length === 0; // returns true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", firstName, lastName, email, phoneNumber);
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Signup-Form Validation </h1>

        {isSubmitted ? (
          <h1>Registration Successful!</h1>
        ) : (
          <form name="myform" id="myform" onSubmit={handleSubmit}>
            <div
              style={{
                margin: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: 4,
                borderStyle: "groove",
                padding: 25,
                width: 400,
              }}
            >
              {/* First & Last Name */}
              <div>
                <label
                  htmlFor="firstName"
                  style={{ display: "block", marginBottom: 3 }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  name="First Name"
                  id="firstName"
                  value={firstName}
                  style={{
                    height: 30,
                    padding: 7,
                    fontWeight: 550,
                    width: 350,
                    marginBottom: 10,
                    fontSize: 15,
                  }}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setError((prevError) => ({ ...prevError, firstName: "" }));
                  }}
                />
                {error.firstName && (
                  <p style={{ color: "red" }}> {error.firstName}</p>
                )}

                <label
                  htmlFor="lastName"
                  style={{ display: "block", marginBottom: 3 }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  name="Last Name"
                  id="lastName"
                  value={lastName}
                  style={{
                    height: 30,
                    padding: 7,
                    fontWeight: 550,
                    width: 350,
                    marginBottom: 10,
                    fontSize: 15,
                  }}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setError((prevError) => ({ ...prevError, lastName: "" }));
                  }}
                />
                {error.lastName && (
                  <p style={{ color: "red" }}> {error.lastName}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="emailAddress"
                  style={{ display: "block", marginBottom: 3 }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="Email Address"
                  id="email"
                  value={email}
                  placeholder="Enter your email address"
                  style={{
                    height: 30,
                    padding: 7,
                    fontWeight: 550,
                    width: 350,
                    marginBottom: 10,
                    fontSize: 15,
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError((prevError) => ({ ...prevError, email: "" }));
                  }}
                />
                {error.email && <p style={{ color: "red" }}> {error.email}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  style={{ display: "block", marginBottom: 3 }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="Phone Number"
                  id="phone"
                  value={phoneNumber}
                  placeholder="Phone number"
                  title="Phone number should be 10 digits"
                  maxLength={10}
                  style={{
                    height: 30,
                    padding: 7,
                    fontWeight: 550,
                    width: 350,
                    marginBottom: 10,
                    fontSize: 15,
                  }}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setError((prevError) => ({
                      ...prevError,
                      phoneNumber: "",
                    }));
                  }}
                />
                {error.phoneNumber && (
                  <p style={{ color: "red" }}> {error.phoneNumber}</p>
                )}
              </div>

              <button type="submit" style={{ padding: 10 }}>
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default FormValidation;
