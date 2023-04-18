import { useState } from "react";
import { Link } from "react-router-dom";

function SelectParagraphTime({ typingData }) {
  const [paragraph, setParagraph] = useState("");
  const [time, setTime] = useState("");

  const handleSelect = (event) => {
    const { name, value} = event.target;
    if (name === "paragraph") {
      setParagraph(value);
    } else if (name === "time") {
      setTime(value);
    }
  };

  return (
    <div>
      <h1>Select Paragraph and Time</h1>
      <label htmlFor="paragraph">Select Paragraph:</label>
      <select name="paragraph" id="paragraph" onChange={handleSelect}>
        {typingData.map((item) => {
          return (
            <option key={item.id} value={item.paragraph}>
              {item.title}
            </option>
          );
        })}
      </select>
      <br />
      <label htmlFor="time">Select Time:</label>
      <select name="time" id="time" onChange={handleSelect}>
        <option value="">--Select Time--</option>
        <option value="12">2 Minutes</option>
        <option value="300">5 Minutes</option>
        <option value="600">10 Minutes</option>
        <option value="900">15 Minutes</option>
        <option value="1800">30 Minutes</option>
      </select>
      <br />
      {paragraph && time && (
        <Link to={"/typing-test"} state={{ paragraph: paragraph, time: time }}>
          Start Typing Test
        </Link>
      )}
    </div>
  );
}

export default SelectParagraphTime;
