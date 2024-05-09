const storeId = import.meta.env.VITE_STORE_ID;
const token = `Bearer ${import.meta.env.VITE_TOKEN}`;

export default async function fetchApi(url: string, method: string = "GET"): Promise<any> {
  const response = await fetch(`https://app.ecwid.com/api/v3/${storeId}/${url}`, {
    method: method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}