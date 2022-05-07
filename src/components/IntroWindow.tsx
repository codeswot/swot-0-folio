import "../styles/IntroWindow.css";
export const IntroWindow = () => {
  return (
    <div className="intro-container">
      <div className="intro-header">
        <div className="control" style={{ backgroundColor: "#FF0000" }}></div>
        <div className="control" style={{ backgroundColor: "#FAFF00" }}></div>
        <div className="control" style={{ backgroundColor: "#64FFDA" }}></div>
      </div>
      <div className="intro-body">
        <h2>
          $: Hi 👋, I am Codeswot <br /> I Turn code into Stuff,
        </h2>
        <h3>
          Your Friendly neighbourhood developer! With great power comes great
          responsibilities. Hard work, studies and constant coding I have
          acquired the awesome power of developing
        </h3>
        <div className="interactive-section">
          <div className="qoutes-section">
            <h4>$: “Always believe in you ability to achieve greatness”</h4>
            <h4>___Mubarak I.</h4>
          </div>
          <button className="know-button">{'>'}Know me_</button>
        </div>
      </div>
    </div>
  );
};
