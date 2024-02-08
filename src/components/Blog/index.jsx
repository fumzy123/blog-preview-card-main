// Import Images
import blogImage from '../../assets/images/illustration-article.svg';
import profilePic from '../../assets/images/image-avatar.webp';

// Import Styles
import styles from './blog.module.css';

function Blog() {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogImageWrapper}>
        <img
          className={styles.blogImage}
          src={blogImage}
          alt="blog-image"
        ></img>
      </div>

      <p className={styles.blogTag}>Learning</p>
      <p className={styles.blogPubDate}>Published 21 Dec 2023</p>
      <h3 className={styles.blogTitle}>HTML & CSS foundations</h3>
      <p className={styles.blogDescription}>
        These languages are the backbone of every website, defining
        structure, content, and presentation
      </p>
      <div className={styles.authorContainer}>
        <img
          className={styles.authorProfilePic}
          src={profilePic}
        ></img>
        <p className={styles.authorName}>Greg Hooper</p>
      </div>
    </div>
  );
}

export default Blog;
