import './App.css';
import { useState } from 'react';
import { HiMusicalNote } from "react-icons/hi2";



function App() {
  const [selectedButton, setSelectedButton] = useState('About');
  const [selectedMonth, setSelectedMonth] = useState(''); // For Monthly Comparison buttons
  const [selectedDecision, setSelectedDecision] = useState(''); // For Affect Of Decision buttons
  const [selectedGraph, setSelectedGraph] = useState('Line'); // Default to Line
  const [selectedMood, setSelectedMood] = useState('Mood1'); // Default to Mood1
  const [selectedConclusion, setSelectedConclusion] = useState(false); // Default to false




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
        <div className="header-left">
          <HiMusicalNote className="musical-note-icon" />
          <h1>Music Listening Time Analysis</h1>
          <HiMusicalNote className="musical-note-icon" />
        </div>
        <div className="author-text">By: Amna Amir Zeb</div>
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

          <button
            className={selectedButton === 'Conclusion' ? 'selected' : ''}
            onClick={() => handleButtonClick('Conclusion')} // Toggle Comparison state
          >
            Conclusion
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
              <p className='EOP'>{dataCollectionTxt4}</p>
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
                  <div>
                    <h1 className='Graph-Title'>Average Monthly Listening Time Analysis</h1>
                    <img src={require('./Graphs/AllMonths2.png')} alt="All Months Graph" className="graph-image" />
                    <p>{process.env.REACT_APP_ALL_GRAPH}</p>
                </div>                  
                )}
                {selectedMonth === 'September' && (
                  <div>
                    <h1 className='Graph-Title'>September Listening Time Analysis</h1>
                    <img src={require('./Graphs/September.png')} alt="September Graph" className="graph-image" />
                    <p>{process.env.REACT_APP_SEPT_GRAPH}</p>
                  </div>
                )}
                {selectedMonth === 'October' && (
                  <div>
                    <h1 className='Graph-Title'>October Listening Time Analysis</h1>
                    <img src={require('./Graphs/October.png')} alt="October Graph" className="graph-image" />
                    <p>{process.env.REACT_APP_OCT_GRAPH1}</p>
                    <p>{process.env.REACT_APP_OCT_GRAPH2}</p>
                  </div>
                )}
                {selectedMonth === 'November' && (
                  <div>
                    <h1 className='Graph-Title'>November Listening Time Analysis</h1>
                    <img src={require('./Graphs/November.png')} alt="November Graph" className="graph-image" />
                    <p>{process.env.REACT_APP_NOV_GRAPH1}</p>
                    <p>{process.env.REACT_APP_NOV_GRAPH2}</p>
                    <p>{process.env.REACT_APP_NOV_GRAPH3}</p>
                  </div>
                )}
                {selectedMonth === 'December' && (
                  <div>
                    <h1 className='Graph-Title'>December Listening Time Analysis</h1>
                    <img src={require('./Graphs/December.png')} alt="December Graph" className="graph-image" />
                    <p>{process.env.REACT_APP_DEC_GRAPH1}</p>
                    <p>{process.env.REACT_APP_DEC_GRAPH2}</p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {selectedButton === 'Affect Of Decision' && (
            <div className="affect-of-decision">
              <div className="button-container">
                <button
                  className={selectedGraph === 'Line' ? 'selected-graph' : ''}
                  onClick={() => setSelectedGraph('Line')}
                >
                  Listening Time Before vs. After
                </button>
                <button
                  className={selectedGraph === 'Trend' ? 'selected-graph' : ''}
                  onClick={() => setSelectedGraph('Trend')}
                >
                  Observe Trend
                </button>
                <button
                  className={selectedGraph === 'Histogram' ? 'selected-graph' : ''}
                  onClick={() => setSelectedGraph('Histogram')}
                >
                  Observe Histogram
                </button>
              </div>
              <div className="graph-display">
                {selectedGraph === 'Line' && (
                  <div>
                    <h1 className='Graph-Title'>Listening Time Before & After Making Decision</h1>
                    <img
                      src={require('./Graphs/Decision1.png')}
                      alt="Line Graph"
                      className="graph-image"
                    />
                    <p>{process.env.REACT_APP_DECISION1_1}</p>
                    <p>{process.env.REACT_APP_DECISION1_2}</p>
                    <p>{process.env.REACT_APP_DECISION1_3}</p>
                  </div>
                )}
                {selectedGraph === 'Trend' && (
                  <div>
                    <h1 className='Graph-Title'>Trend Of Listening Time Before & After Making Decision</h1>
                    <img
                      src={require('./Graphs/Decision3.png')}
                      alt="Trend Graph"
                      className="graph-image"
                    />
                    <p>{process.env.REACT_APP_DECISION2_1}</p>
                    <p>{process.env.REACT_APP_DECISION2_2}</p>
                    <p>{process.env.REACT_APP_DECISION2_3}</p>
                    <p>{process.env.REACT_APP_DECISION2_4}</p>
                  </div>
                )}
                {selectedGraph === 'Histogram' && (
                  <div>
                    <h1 className='Graph-Title'>Histogram Listening Time Analysis</h1>
                    <img
                      src={require('./Graphs/Decision2.png')}
                      alt="Histogram Graph"
                      className="graph-image"
                    />
                    <p>{process.env.REACT_APP_DECISION3_1}</p>
                    <p>{process.env.REACT_APP_DECISION3_2}</p>
                    <p>{process.env.REACT_APP_DECISION3_3}</p>
                    <p>{process.env.REACT_APP_DECISION3_4}</p>
                  </div>
                )}
              </div>
            </div>
          )}



          {selectedButton === 'Mood' && (
            <div className="affect-on-mood">
              <div className="button-container">
                <button
                  className={selectedMood === 'Mood1' ? 'selected-mood' : ''}
                  onClick={() => setSelectedMood('Mood1')}
                >
                  Scatter Plot
                </button>
                <button
                  className={selectedMood === 'Mood2' ? 'selected-mood' : ''}
                  onClick={() => setSelectedMood('Mood2')}
                >
                  Box Plot
                </button>
              </div>
              <div className="mood-display">
                {selectedMood === 'Mood1' && (
                  <div>
                    <h1 className='Graph-Title'>Affect Of Listening Time On Mood</h1>
                    <img
                      src={require('./Graphs/Mood1.png')}
                      alt="Mood Graph 1"
                      className="mood-image"
                    />
                    <p>{process.env.REACT_APP_MOOD1_1}</p>
                    <p>{process.env.REACT_APP_MOOD1_2}</p>
                    <p>{process.env.REACT_APP_MOOD1_3}</p>
                    <p>{process.env.REACT_APP_MOOD1_4}</p>
                  </div>
                )}
                {selectedMood === 'Mood2' && (
                  <div>
                    <h1 className='Graph-Title'>Distribution Of Listening Time Based On Mood</h1>
                    <img
                      src={require('./Graphs/Mood2.png')}
                      alt="Mood Graph 2"
                      className="mood-image2"
                    />
                    <p>{process.env.REACT_APP_MOOD2_1}</p>
                    <p>{process.env.REACT_APP_MOOD2_2}</p>
                    <p>{process.env.REACT_APP_MOOD2_3}</p>
                    <p>{process.env.REACT_APP_MOOD2_4}</p>
                  </div>
                )}
              </div>
            </div>
          )}


          {selectedButton === 'Top Songs/Artist' && (
            <div className="top-songs">
              <h1>Top 5 Most Listened To Songs:-</h1>
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

              <h1>Top 5 Most Listened To Artists:-</h1>
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

          {selectedButton == "Conclusion" && (
            <div className="conclusion-text">
              <h2 className='conclusion-h2'>Before Decision:</h2>
              <p className='conclusion-p'>Average Daily Listening Time: 1:40:20</p>
              <p className='conclusion-p'>Average Weekly Listening Time: 11:42:22</p>

              <h2 className='conclusion-h2'>After Decision:</h2>
              <p className='conclusion-p'>Average Daily Listening Time: 0:28:33</p>
              <p className='conclusion-p'>Average Weekly Listening Time: 3:19:53</p>

              <h1 className='conclusion-h1'>Conclusion:</h1>
              <p className='conclusion'>{process.env.REACT_APP_CONCLUSION_1}</p>
              <p className='conclusion'>{process.env.REACT_APP_CONCLUSION_2}</p>
              <p className='conclusion'>{process.env.REACT_APP_CONCLUSION_3}</p>            
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;