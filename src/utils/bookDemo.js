const BOOK_DEMO_URL = "https://york-centre-api.onrender.com/book-demo";
const RETRY_DELAYS = [1200, 2600];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const readResponseBody = async (response) => {
  const text = await response.text();

  if (!text) return {};

  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
};

const shouldRetry = (error, response) => {
  if (!response) return true;
  return response.status === 408 || response.status === 429 || response.status >= 500;
};

export const submitBookDemo = async (payload) => {
  let lastError;

  for (let attempt = 0; attempt <= RETRY_DELAYS.length; attempt += 1) {
    let response;

    try {
      response = await fetch(BOOK_DEMO_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await readResponseBody(response);

      if (response.ok) {
        return data;
      }

      lastError = new Error(data.message || "Failed to submit demo request");

      if (!shouldRetry(lastError, response) || attempt === RETRY_DELAYS.length) {
        throw lastError;
      }
    } catch (error) {
      lastError = error;

      if (!shouldRetry(error, response) || attempt === RETRY_DELAYS.length) {
        throw lastError;
      }
    }

    await wait(RETRY_DELAYS[attempt]);
  }

  throw lastError || new Error("Failed to submit demo request");
};
