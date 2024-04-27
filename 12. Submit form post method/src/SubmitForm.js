const SUBMIT_URL = "https://www.greatfrontend.com/api/questions/contact-form";

export default async function submitForm(event) {
  event.preventDefault(); //stops the default action of an element from happening

  const { action, method } = event.target;

  try {
    if (action !== SUBMIT_URL) {
      alert("Incorrect form action value");
      return;
    }

    if (method.toLowerCase() !== "post") {
      alert("Incorrect form method value");
      return;
    }

    const formData = new FormData(event.target);
    const response = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const text = await response.text();
    alert(text);
  } catch (_) {
    alert("Error submitting form!");
  }
}
