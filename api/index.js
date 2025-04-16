export default async function handler(req, res) {
  if (req.method === "POST") {
    const GAS_URL = "https://script.google.com/macros/s/AKfycbymaxrWbsX1-JaVeBUzTEMRYG6xZLP0AJko29LK1uShhz-ldAa_1bTdViD8jOrPSBvx/exec"; // <-- сюда вставь свой URL

    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const result = await response.text();
    res.status(200).send("OK");
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
