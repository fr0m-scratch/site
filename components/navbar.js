import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import doggo from "../public/beagle.png";

export default function NavBar({ currPage, blogPost }) {
  const active = { opacity: 1 };
  const notActive = { opacity: 0.4 };

  return (
    <div className={blogPost ? styles.blogPostBar : styles.nonBlogPostBar}>
      <div className={styles.outerBar}>
        <Link href="/">
          <div className={styles.wrapper}>
            <img src={doggo} alt="Dog Illustration" className={styles.logo} />
          </div>
        </Link>
        <ul className={styles.listStyle}>
          <Link href="/about">
            <li
              className={styles.horizontal}
              style={currPage == "about" ? active : notActive}
            >
              About
            </li>
          </Link>
          {/* <Link href="/projects">
            <li
              className={styles.horizontal}
              style={currPage == "projects" ? active : notActive}
            >
              Projects
            </li>
          </Link> */}
          <Link href="https://fr0m-scratch.notion.site/fr0m-scratch/Linear-Algebra-Note-e9f5b1caa119472dae1012fff9f14799">
            <li
              className={styles.horizontal}
              style={currPage == "LA note" ? active : notActive}
            >
              LA note
            </li>
          </Link>
          {/* <Link href="/writing">
            <li
              className={styles.horizontal}
              style={currPage == "writing" ? active : notActive}
            >
              Writing
            </li>
          </Link> */}
          {/*<Link href="/changelog">
            <li
              className={styles.horizontal}
              style={currPage == "changelog" ? active : notActive}
            >
              Changelog
            </li>
          </Link>*/}
          {/* <Link href="/values">
            <li
              className={styles.horizontal}
              style={currPage == "values" ? active : notActive}
            >
              Values
            </li>
          </Link> */}
        </ul>
        <hr className={styles.line} />
      </div>
    </div>
  );
}
