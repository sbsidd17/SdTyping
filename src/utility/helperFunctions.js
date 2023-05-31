export const getHighlightedWords = (wordsArray, currentIndex, isHighlightOn) => {
    return (
      <div className="flex flex-wrap w-[96%] mx-[2%] my-[10px]">
        {wordsArray.map((word, index) => {
          const isHighlighted = index === currentIndex && isHighlightOn;
          const className = isHighlighted ? "highlighted" : "";
          return (
            <span key={index} className={className}>
              {word}
              {index !== wordsArray.length - 1 && " "}
            </span>
          );
        })}
      </div>
    );
  };

  export   const getWordsArray = (paragraph, setWordsArray) => {
    const wordsArray = paragraph.trim().split(" ");
    setWordsArray(wordsArray);
  };

 