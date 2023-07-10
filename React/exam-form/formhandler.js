document.addEventListener("DOMContentLoaded", () => {
  // Fetch the data from the database.json file
  fetch("database.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const formApp = document.querySelector(".form-app");

      const form = document.createElement("form");
      form.id = "exam-form";
      form.action = "formhandler.php";
      form.method = "POST";
      form.enctype = "multipart/form-data";

      const formFields = [
        {
          label: "Event name:",
          type: "text",
          placeholder: "Event name",
          name: "eventName",
          required: true,
        },
        {
          label: "Event short description:",
          type: "text",
          placeholder: "Short description",
          name: "eventShortDescr",
          required: true,
        },
        {
          label: "Event long description:",
          type: "textarea",
          placeholder: "Long description, max 500 char.",
          name: "eventLongtDescr",
          required: true,
          maxlength: 500,
        },
        {
          label: "Date:",
          type: "date",
          name: "eventDate",
          required: true,
        },
        {
          label: "Start time:",
          type: "time",
          name: "eventStartTime",
          required: true,
        },
        {
          label: "End time:",
          type: "time",
          name: "eventEndTime",
          required: true,
        },
        {
          label: "Event location:",
          type: "text",
          placeholder: "Event location",
          name: "eventLocation",
          required: true,
        },
        {
          label: "Your name:",
          type: "text",
          placeholder: "Your name, only your first or last name, not both",
          name: "userName",
          required: true,
        },
        {
          label: "Categories:",
          type: "select",
          name: "categories",
          multiple: true,
          options: data.categories || [], // Provide empty array if data.categories is not available
        },
        {
          label: "",
          type: "text",
          name: "newCategory",
          placeholder: "Enter a new category",
        },
      ];

      formFields.forEach((field) => {
        const label = document.createElement("label");
        label.textContent = field.label;

        if (field.type === "textarea") {
          const textarea = document.createElement("textarea");
          textarea.placeholder = field.placeholder || "";
          textarea.name = field.name;
          if (field.required) {
            textarea.required = true;
          }
          if (field.maxlength) {
            textarea.maxLength = field.maxlength;
          }
          label.appendChild(textarea);
        } else if (field.type === "select") {
          const select = document.createElement("select");
          select.name = field.name;
          if (field.multiple) {
            select.multiple = true;
            field.options.forEach((option) => {
              const optionElement = document.createElement("option");
              optionElement.value = option.catergoryID || ""; // Provide empty string if option.catergoryID is not available
              optionElement.textContent = option.catergoryName || ""; // Provide empty string if option.catergoryName is not available
              select.appendChild(optionElement);
            });
          }
          label.appendChild(select);
        } else {
          const input = document.createElement("input");
          input.type = field.type;
          input.placeholder = field.placeholder || "";
          input.name = field.name;
          if (field.required) {
            input.required = true;
          }
          if (field.maxlength) {
            input.maxLength = field.maxlength;
          }
          label.appendChild(input);
        }

        form.appendChild(label);
      });

      const btnContainer = document.createElement("div");
      btnContainer.classList.add("btn-container");

      const resetBtn = document.createElement("button");
      resetBtn.setAttribute("type", "reset");
      resetBtn.textContent = "Reset";

      const submitBtn = document.createElement("button");
      submitBtn.setAttribute("type", "submit");
      submitBtn.textContent = "Submit";

      btnContainer.appendChild(resetBtn);
      btnContainer.appendChild(submitBtn);

      form.appendChild(btnContainer);
      formApp.appendChild(form);
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
      const formApp = document.querySelector(".form-app");
      const errorMessage = document.createElement("p");
      errorMessage.textContent =
        "Failed to fetch data. Please try again later.";
      formApp.appendChild(errorMessage);
    });
});
