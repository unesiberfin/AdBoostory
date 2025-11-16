document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quoteForm"); // or quoteFormModal
  const thankYou = document.getElementById("thankYouPopup");
  const closeThankYou = document.getElementById("closeThankYou");

  if (!form || !thankYou) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop normal redirect

    const formData = new FormData(form);

    try {
      // Send form data to FormSubmit
      await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      // If we reach here, assume success:
      form.reset();
      thankYou.classList.add("active");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again in a moment.");
    }
  });

  closeThankYou.addEventListener("click", () => {
    thankYou.classList.remove("active");
  });

  // Optional: close on overlay click
  thankYou.addEventListener("click", (e) => {
    if (e.target === thankYou) {
      thankYou.classList.remove("active");
    }
  });
});


