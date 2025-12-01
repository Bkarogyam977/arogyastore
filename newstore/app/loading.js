// app/loading.js
import styles from './loading.module.css';

export default function Loading() {
  const arogyaLetters = ['A', 'R', 'O', 'G', 'Y', 'A'];
  const bharatLetters = ['B', 'H', 'A', 'R', 'A', 'T'];

  // Pre-calculate delays to avoid dynamic class names
  const getDelayClass = (index) => {
    const delays = ['cubeDelay1', 'cubeDelay2', 'cubeDelay3', 'cubeDelay4', 'cubeDelay5'];
    return delays[index % delays.length];
  };

  return (
    <div className={styles.container}>
      {/* Arogya Bharat Text Animation */}
      <div className={styles.textAnimationContainer}>
        {/* Arogya */}
        <div className={styles.wordContainer}>
          {arogyaLetters.map((letter, i) => (
            <div 
              key={`arogya-${i}`} 
              className={`${styles.letterCube} ${styles[getDelayClass(i)]}`}
            >
              {letter}
            </div>
          ))}
        </div>
        
        {/* Bharat */}
        <div className={styles.wordContainer}>
          {bharatLetters.map((letter, i) => (
            <div 
              key={`bharat-${i}`} 
              className={`${styles.letterCube} ${styles[getDelayClass(i)]}`}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>

      {/* Rest of your skeleton loader remains the same */}
      <div className={styles.skeletonLayout}>
        {/* Hero Section Placeholder */}
        <div className={`${styles.skeletonItem} ${styles.heroSection}`}></div>

        {/* Categories Placeholder */}
        <div className={styles.categoryGrid}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`${styles.skeletonItem} ${styles.categoryItem}`}></div>
          ))}
        </div>

        {/* Products Placeholder */}
        <div className={styles.productSection}>
          <div className={`${styles.skeletonItem} ${styles.sectionTitle}`}></div>
          <div className={styles.productGrid}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={styles.productItem}>
                <div className={`${styles.skeletonItem} ${styles.productImage}`}></div>
                <div className={`${styles.skeletonItem} ${styles.productText}`}></div>
                <div className={`${styles.skeletonItem} ${styles.productText} ${styles.halfWidth}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}