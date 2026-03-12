import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      tempErrors["name"] = "Please enter your name.";
    }

    if (!formData.email) {
      isValid = false;
      tempErrors["email"] = "Please enter your email address.";
    } else {
      let pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      if (!pattern.test(formData.email)) {
        isValid = false;
        tempErrors["email"] = "Please enter a valid email address.";
      }
    }

    if (!formData.msg) {
      isValid = false;
      tempErrors["msg"] = "Please enter your message.";
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        msg: "",
      });
    }
  };

  return (
    <div className="container">
      <div className="ak-height-50 ak-height-lg-30"></div>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "30px",
          border: "1px solid #eee",
          borderRadius: "4px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {alertMessage && <p>{alertMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
              }}
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
            {errors.name && (
              <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>
            )}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
            )}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="msg"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
              }}
            >
              Message:
            </label>
            <textarea
              name="msg"
              rows="6"
              id="msg"
              value={formData.msg}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
                boxSizing: "border-box",
                resize: "vertical",
              }}
            ></textarea>
            {errors.msg && (
              <p style={{ color: "red", fontSize: "12px" }}>{errors.msg}</p>
            )}
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#5cb85c",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="ak-height-50 ak-height-lg-30"></div>
    </div>
  );
};

export default ContactForm;
