import { useState } from "react";

const UrlSection = () => {
  const [longURL, setLongURL] = useState("");
  const [originalURL, setOriginalURL] = useState("");
  const [shortLinks, setShortLinks] = useState("");
  const [showAllLinks, setShowAllLinks] = useState(false);
  const [error, setError] = useState("");

  const isValidURL = (url) => {
    //  URL validation
    const urlPattern = /^(http|https):\/\/\S+$/i;
    return urlPattern.test(url);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidURL(longURL)) {
      setError("Please add proper link");
      setShowAllLinks(false);
      return;
    }
    
    const getShortLink = async () => {
      const url = "https://url-shortener-service.p.rapidapi.com/shorten";
      const body = new URLSearchParams({
        url: longURL,
      }) 
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          // "X-RapidAPI-Key": import.meta.env.VITE_SOME_KEY,
          "X-RapidAPI-Key": "8270335a98mshff2fc09f55e7c03p15f4a7jsn3afb95e7043a",
          "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
        },
        body,
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        // console.log(result);
        const link = JSON.parse(result);
        console.log(link["result_url"]);

        setShortLinks(link["result_url"]);
        setShowAllLinks(true);
        setOriginalURL(longURL);
        setLongURL("");
        setError("");
      } catch (error) {
        console.error(error);
        setError("An error occurred while shortening the URL");
        setShowAllLinks(false);
      }
    };
    getShortLink();
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(shortLinks);
  };
  return (
    <section className="urlSection">
      <div className="container">
        <form className="urlShortenForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
          />
          <button className="btn-primary" onClick={handleSubmit}>
            Shorten it!
          </button>
        </form>
        {showAllLinks && (
          <div className="result">
            <div className="links">
              <h6>{originalURL}</h6>
              <p>{shortLinks}</p>
            </div>
            <button className="btn-primary" onClick={copyUrl}>
              Copy
            </button>
          </div>
        )}
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UrlSection;
