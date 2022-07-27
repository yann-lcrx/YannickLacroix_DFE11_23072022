import { useState } from "react";
import styles from "../styles/components/DropdownSection.module.scss";

/**
 * Togglable dropdown menu with a title and text content
 * @param {{title: string, content: ReactNode}} props
 * @returns JSX
 */
function DropdownSection({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleKeyboard = (event) => event.key === " " && handleToggle();

  return (
    <section
      className={styles.DropdownSection}
      tabIndex={0}
      onKeyUp={handleKeyboard}
    >
      <header onClick={handleToggle}>
        <h2>{title}</h2>
        <div>
          {isOpen ? (
            <img src="/arrowup.svg" alt="fermer le menu déroulant" />
          ) : (
            <img src="/arrowdown.svg" alt="ouvrir le menu déroulant" />
          )}
        </div>
      </header>
      {isOpen && <div className={styles.content}>{content}</div>}
    </section>
  );
}

export default DropdownSection;
