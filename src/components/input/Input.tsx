import { useState } from "react";
import "./Input.css";

interface PropsInput {
  setURL: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<PropsInput> = (props) => {
  const [inputText, setInputText] = useState<string>("");
  const [inputLang, setInputLang] = useState<string>("");

  const getSearchURL = () => {
    if (inputText && inputLang) {
      props.setURL(
        `https://newsapi.org/v2/everything?q=${inputText}&language=${inputLang}&apiKey=0d294c999de8492386b01d6ec35a0a30`
      );
    }
  };

  return (
    <section className="section-input">
      <input
        value={inputText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputText(e.target.value.trim().toLowerCase().replace(" ", ""))
        }
        type="text"
        placeholder="Type to search..."
        className="input-padding"
      />
      <select
        value={inputLang}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setInputLang(e.target.value)
        }
        className="input-padding"
      >
        <option value="">Select your language</option>
        <option value="ar">Arabic</option>
        <option value="de">German</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="he">Hebrew</option>
        <option value="it">Italian</option>
        <option value="nl">Dutch</option>
        <option value="no">Norwegian</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
        <option value="sv">Swedish</option>
        <option value="ud">Urdu</option>
        <option value="zh">Chinese (Mandarin)</option>
      </select>
      <button
        onClick={getSearchURL}
        className="input-padding search-btn"
        type="button"
      >
        Search
      </button>
    </section>
  );
};

export default Input;
