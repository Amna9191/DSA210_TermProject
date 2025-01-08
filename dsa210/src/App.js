import './App.css';
import { useState } from 'react';

function App() {
  const [selectedButton, setSelectedButton] = useState('About');
  const [selectedMonth, setSelectedMonth] = useState(''); // For Monthly Comparison buttons
  const [selectedDecision, setSelectedDecision] = useState(''); // For Affect Of Decision buttons

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    if (buttonName === 'Monthly Comparison') {
      setSelectedMonth('All'); // Set 'All' by default when 'Monthly Comparison' is selected
    } else {
      setSelectedMonth(''); // Reset selectedMonth when not in Monthly Comparison
    }

    if (buttonName === 'Affect Of Decision') {
      setSelectedDecision('Comparison'); // Set 'Comparison' by default when 'Affect Of Decision' is selected
    } else {
      setSelectedDecision(''); // Reset selectedDecision when not in Affect Of Decision
    }
  };

  const handleMonthClick = (monthName) => {
    setSelectedMonth(monthName);
  };

  const handleDecisionClick = (decisionName) => {
    setSelectedDecision(decisionName);
  };

  const purposeText = process.env.REACT_APP_PURPOSE_TEXT;
  const dataCollectionTxt1 = process.env.REACT_APP_DATA_COLLECTION_TEXT1;
  const dataCollectionTxt2 = process.env.REACT_APP_DATA_COLLECTION_TEXT2;
  const dataCollectionTxt3 = process.env.REACT_APP_DATA_COLLECTION_TEXT3;
  const dataCollectionTxt4 = process.env.REACT_APP_DATA_COLLECTION_TEXT4;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Listening Time Analysis</h1>
      </header>
      <main>
        <div className="button-container">
          <button
            className={selectedButton === 'About' ? 'selected' : ''}
            onClick={() => handleButtonClick('About')}
          >
            About
          </button>

          <button
            className={selectedButton === 'Monthly Comparison' ? 'selected' : ''}
            onClick={() => handleButtonClick('Monthly Comparison')}
          >
            Monthly Comparison
          </button>

          <button
            className={selectedButton === 'Affect Of Decision' ? 'selected' : ''}
            onClick={() => handleButtonClick('Affect Of Decision')}
          >
            Affect Of Decision
          </button>

          <button
            className={selectedButton === 'Mood' ? 'selected' : ''}
            onClick={() => handleButtonClick('Mood')}
          >
            Affect On Mood
          </button>

          <button
            className={selectedButton === 'Top Songs/Artist' ? 'selected' : ''}
            onClick={() => handleButtonClick('Top Songs/Artist')}
          >
            Top Songs/Artist
          </button>          
        </div>
        
        <div className="content">
          {selectedButton === 'About' && (
            <div className="purpose-text">
              <h2>Motivation:-</h2>
              <p>{purposeText}</p>
              <h2>Data Collection:-</h2>
              <p>{dataCollectionTxt1}</p>
              <p>{dataCollectionTxt2}</p>
              <p>{dataCollectionTxt3}</p>
              <p>{dataCollectionTxt4}</p>
            </div>
          )}
          {selectedButton === 'Monthly Comparison' && (
            <div className="monthly-comparison">
              <div className="button-container">
                <button
                  className={selectedMonth === 'All' ? 'selected-month' : ''}
                  onClick={() => handleMonthClick('All')}
                >
                  All
                </button>
                <button
                  className={selectedMonth === 'September' ? 'selected-month' : ''}
                  onClick={() => handleMonthClick('September')}
                >
                  September
                </button>
                <button
                  className={selectedMonth === 'October' ? 'selected-month' : ''}
                  onClick={() => handleMonthClick('October')}
                >
                  October
                </button>
                <button
                  className={selectedMonth === 'November' ? 'selected-month' : ''}
                  onClick={() => handleMonthClick('November')}
                >
                  November
                </button>
                <button
                  className={selectedMonth === 'December' ? 'selected-month' : ''}
                  onClick={() => handleMonthClick('December')}
                >
                  December
                </button>
              </div>
              <div className="graph-display">
                {selectedMonth === 'All' && (
                  <img src={require('./Graphs/AllMonths2.png')} alt="All Months Graph" className="graph-image" />                  
                )}
                {selectedMonth === 'September' && (
                  <img src={require('./Graphs/September.png')} alt="September Graph" className="graph-image" />
                )}
                {selectedMonth === 'October' && (
                  <img src={require('./Graphs/October.png')} alt="October Graph" className="graph-image" />
                )}
                {selectedMonth === 'November' && (
                  <img src={require('./Graphs/November.png')} alt="November Graph" className="graph-image" />
                )}
                {selectedMonth === 'December' && (
                  <img src={require('./Graphs/December.png')} alt="December Graph" className="graph-image" />
                )}
              </div>
            </div>
          )}
          {selectedButton === 'Affect Of Decision' && (
            <div className="affect-of-decision">                        
              <div className="graph-display">
                <div className="comparison-container">
                  <div className="comparison-item">
                    <img src={require('./Graphs/Decision1.png')} alt="Decision 1" className="comparison-image" />
                    <p className="comparison-text">This is the text for Decision 1. Explain its significance here.</p>
                  </div>
                  <div className="comparison-item">
                    <img src={require('./Graphs/Decision3.png')} alt="Decision 2" className="comparison-image" />
                    <p className="comparison-text">This is the text for Decision 2. Highlight key points here.</p>
                  </div>
                  <div className="comparison-item">
                    <img src={require('./Graphs/Decision2.png')} alt="Decision 3" className="comparison-image" />
                    <p className="comparison-text">This is the text for Decision 3. Add relevant details here.</p>
                  </div>
                </div>              
              </div>
            </div>
          )}
          {selectedButton === 'Mood' && (
            <div className="affect-on-mood">
              <div className="mood-container">
                <div className="mood-item">
                  <img src={require('./Graphs/Mood1.png')} alt="Mood Graph 1" className="mood-image" />
                  <p className="mood-text">This is the description for Mood Graph 1. Explain its relevance here.</p>
                </div>
                <div className="mood-item">
                  <img src={require('./Graphs/Mood2.png')} alt="Mood Graph 2" className="mood-image" />
                  <p className="mood-text">This is the description for Mood Graph 2. Provide details about the graph here.</p>
                </div>
              </div>
            </div>
          )}

          {selectedButton === 'Top Songs/Artist' && (
            <div className="top-songs">
              <h2>Top 5 Most Listened To Songs:-</h2>
              <div className="top-songs-header">
                <span><h3>Songs Title</h3></span>
                <span><h3>No. Times Listened</h3></span>
              </div>
              <ol className="song-list">
                <li><span>1. Tere Sang Ishq Hua</span><span className="count">21</span></li>
                <li><span>2. O Maahi</span><span className="count">20</span></li>
                <li><span>3. Khoobsurat (From "Stree 2")</span><span className="count">19</span></li>
                <li><span>4. Tainu Khabar Nahi (From "Munjya")</span><span class="count">18</span></li>
                <li><span>5. Gore Gore Mukhde Pe (From "Ishq Vishk Rebound")</span><span class="count">17</span></li>
              </ol>

              <h2>Top 5 Most Listened To Artists:-</h2>
              <div className="top-artist-header">
                <span><h3>Artist Name</h3></span>
                <span><h3>No. Songs Listened By Them</h3></span>
              </div>
              <ol className="artist-list">
                <li><span>1. Arijit Singh</span><span className="count">137</span></li>
                <li><span>2. Sachin Jigar</span><span className="count">74</span></li>
                <li><span>3. Vishal Mishra</span><span className="count">70</span></li>
                <li><span>4. Pritam</span><span className="count">63</span></li>
                <li><span>5. One Direction</span><span className="count">59</span></li>
              </ol>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;