// import React, { useState, useEffect } from "react";
// import "./App.css";

// const tabData = [
//   {
//     id: 1,
//     title: "Alex",
//     content: "Full Stack Web Developer",
//     name: "Alex",
//     period: "December 2015 - Present",
//     exp: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.",
//     btn: "More Info",
//   },
//   {
//     id: 2,
//     title: "Nicolas",
//     content: "Front-End Engineer",
//     name: "Nicolas",
//     period: "May 2015 - December 2015",
//     exp: "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.",
//     btn: "More Info",
//   },
//   {
//     id: 3,
//     title: "Roman",
//     content: "Engineering Intern",
//     name: "Roman",
//     period: "May 2014 - September 2015",
//     exp: "Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.",
//     btn: "More Info",
//   },
// ];

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState(1);
//   const [tabContent, setTabContent] = useState("");
//   const [name, setName] = useState("");
//   const [period, setPeriod] = useState("");
//   const [exp, setExp] = useState("");
//   const [btn, setBtn] = useState("");

//   useEffect(() => {
//     const selectedTab = tabData.find((tab) => tab.id === activeTab);
//     setTabContent(selectedTab.content);
//     setName(selectedTab.name);
//     setPeriod(selectedTab.period);
//     setExp(selectedTab.exp);
//     setBtn(selectedTab.btn);
//   }, [activeTab]);

//   return (
//     <div className="tabs-container">
//       <div className="tabs">
//         {tabData.map((tab) => (
//           <button
//             key={tab.id}
//             className={`tab-btn ${tab.id === activeTab ? "active" : ""}`}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             {tab.title}
//           </button>
//         ))}
//       </div>
//       <div className="content">
//         <h3>{tabContent}</h3>
//         <h4>{name}</h4>
//         <h5>{period}</h5>
//         <p>{exp}</p>
//         <button>{btn}</button>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="app">
//       <h1>Experience</h1>
//       <div className="line"></div>
//       <Tabs />
//     </div>
//   );
// };

// export default App;
// import { FaAngleDoubleRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./App.css";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();

    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                {/* <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight> */}
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
