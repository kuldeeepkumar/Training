import React from "react";
import styles from "./example.module.css"; // improt CSS module styles
const TailwindExercise2 = () => {
  return (
    <div className={styles.container}>
      {/* 1. Text Styling and Font Example */}
      <h1 className={styles.title}>CSS in React Example</h1>
      {/* 2. Box Model and Background Example */}
      <div className={styles.box}>This is a styled box</div>
      {/* 3. Flexbox Layout */}
      <div className={styles.flexLayout}>
        <div className={styles.flexItem}>Flex 1</div>
        <div className={styles.flexItem}>Flex 2</div>
      </div>
      {/* 4. Grid Layout */}
      <div className={styles.gridLayout}>
        <div className={styles.gridItem}>Grid 1</div>
        <div className={styles.gridItem}>Grid 2</div>
        <div className={styles.gridItem}>Grid 3</div>
      </div>
      {/* 5. Responsive Box */}
      <div className={styles.responsiveBox}>Resize the screen!</div>
      {/* 6. Hover and Transition */}
      <div className={styles.transitionBox}>Hover over me</div>
      {/* 7. Pseudo-class and Element */}
      <p className={styles.paragraph}>
        This is a paragraph with{" "}
        <span className={styles.highlight}>highlighted text</span>.
      </p>
      {/* 8. Button with Active State */}
      <button className={styles.button}>Click Me</button>
      {/* 9. Form Inputs */}
      <input className={styles.input} type="text" placeholder="Enter text" />
      {/* 10. Variable Color Usage */}
      <div className={styles.variableColorBox}>Using CSS Variables</div>
    </div>
  );
};

export default TailwindExercise2;
