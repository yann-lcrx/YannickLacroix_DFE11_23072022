import styles from "../styles/components/Tag.module.scss";

/**
 * Chip element for stay tags
 * @param {{content: string}} props
 * @returns
 */
function Tag({ content }) {
  return <li className={styles.Tag}>{content}</li>;
}

export default Tag;
