const TextInput = (props) => {
  return React.createElement(
   "div",
   { className: "demo" },
   React.createElement(
     "label",
     null,
     props.header,
     ":"
   ),
   React.createElement("input", { type: "text" })
  );
};

const EmailInput = () => {
  return React.createElement(
    "div",
    { className: "demo" },
    React.createElement(
      "label",
      null,
      "Email:"
    ),
    React.createElement("input", { type: "email" })
  );
};

const ContactForm = () => {
  return React.createElement(
   "form",
   { className: "demo" },
   React.createElement(TextInput, { header: "First Name" }),
   React.createElement(TextInput, { header: "Last Name" }),
   React.createElement(TextInput, { header: "Middle Name" }),
   React.createElement(EmailInput, null),
   React.createElement(TextInput, { header: "Phone Number" }),
   React.createElement(TextInput, { header: "Address" }),
   React.createElement(TextInput, { header: "State" }),
   React.createElement(TextInput, { header: "Country" })
  );
};

ReactDOM.render(React.createElement(ContactForm, null), document.getElementById("root"));
