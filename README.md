# DSA210_TermProject

## Music Listening Time and Mood Analysis: Before and After Reduction Decision

### Project Overview

This project explores my music listening habits and their correlation with my mood before and after I decided to reduce the time spent on listening to music. By analyzing my YouTube Music data over a period of four months (September to December 2024), I aim to uncover trends in listening habits, evaluate the impact of my decision on music consumption, and investigate potential changes in my mood associated with different levels of listening activity.

---

## Dataset

### **Source:**  
YouTube Music listening history.

### **Time Period:**  
September 2024 to December 2024.

### **Data Description:**  
The dataset includes the following key information:  
- **Date and time:** Exact timestamps of each listening session.  
- **Duration:** Total time spent during each session.  
- **Type of music:** Includes details such as genre, mood, or playlist category.  
- **Frequency:** Number of listening sessions per day.  
- **Mood Data:** A manually maintained record of my daily mood, rated on a scale from 1 (low) to 10 (high), alongside brief notes to provide context.

**Note:** While the raw dataset will not be shared for privacy reasons, all analysis scripts and summaries of the derived data will be provided in the repository.

---

## Project Objectives

### **1. Exploratory Data Analysis (EDA):**
- **Understand listening patterns:** Analyze how often and how long I listened to music over time.  
- **Peak listening hours:** Identify the time of day when I listened most frequently.  
- **Genre preferences:** Explore trends in genre or mood-specific music choices.

### **2. Mood Analysis:**
- **Mood vs. Music Correlation:** Examine how daily music consumption (duration and frequency) correlates with my mood ratings.  
- **Pre- and Post-Decision Comparison:** Quantify differences in mood patterns before and after reducing my music listening time.

### **3. Visualizations:**
- **Listening Time Trends:** Create visualizations to show total listening time per week/month.  
- **Mood and Music Interaction:** Represent the relationship between mood ratings and listening habits using scatter plots, heatmaps, or time series charts.

### **4. Share Findings:**  
The results will be shared through:  
- A detailed **report or website** (decision pending).  
- A **GitHub repository** hosting scripts, visualizations, and summaries.

---

## Project Plan

### **1. Data Preparation:**  
- Export YouTube Music history as a JSON or CSV file.  
- Import mood data from my manual record.  
- Clean and preprocess the data to ensure consistency (e.g., format timestamps, standardize mood ratings, remove incomplete entries).  

### **2. Exploratory Data Analysis (EDA):**  
- **Listening Data:**  
  - Calculate total and average listening time per day, week, and month.  
  - Identify trends, such as increases or decreases in listening activity.  
  - Detect anomalies, such as unusually high or low listening days.  
- **Mood Data:**  
  - Analyze daily mood patterns and any observable trends over time.  
  - Investigate potential triggers or influences on mood based on brief notes.  

### **3. Visualization:**  
- Use Python libraries such as Matplotlib and Seaborn to create:  
  - Line plots for total listening time per week and month.  
  - Scatter plots to visualize the relationship between mood and music listening time.  
  - Heatmaps to represent peak listening hours and their correlation with mood scores.  

### **4. Report and Presentation:**  
- Summarize findings in an interactive website showcasing key insights.  
- Include visualizations and explanations for all significant trends and patterns.

### **5. GitHub Repository:**  
- Upload analysis scripts, visualizations, and derived data summaries.  
- Ensure clear documentation, including:  
  - Well-structured directories.  
  - A `.gitignore` file to exclude sensitive data.  
  - A README file to explain the project objectives, steps, and outcomes.

### **6. Peer Evaluation:**  
- Review classmates' projects and provide constructive feedback to enhance learning.

---

## Tools & Techniques

### **Programming Languages:**  
- Python  

### **Libraries:**  
- Pandas, Matplotlib, Seaborn, and Scikit-learn  

### **Version Control:**  
- Git and GitHub  

### **Visualization Tools:**  
- Python plotting libraries, with possible use of Tableau for advanced visualizations.  

---

## Expected Outcomes

### **1. Insights into Listening Habits:**  
- Clear trends showing changes in music listening time before and after my decision.  
- Detailed analysis of genre preferences and peak listening times.  

### **2. Mood and Music Correlation:**  
- A quantified relationship between mood ratings and music consumption patterns.  
- Evidence of any positive or negative impacts on mood after reducing listening time.  

### **3. Repository for Sharing:**  
- A user-friendly GitHub repository containing:  
  - Python scripts for data analysis and visualization.  
  - Well-documented explanations of methods and findings.

### **4. Presentation-Ready Visuals:**  
- Informative charts and graphs that effectively communicate the analysis results.

---

By combining quantitative data analysis with subjective mood tracking, this project provides a holistic view of how my listening habits and well-being interact over time.  
