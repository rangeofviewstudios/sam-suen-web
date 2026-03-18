import Image from "next/image";
import styles from "./TeamCard.module.css";

interface TeamCardProps {
  name: string;
  funFact: string;
  role: string;
  imageSrc: string;
}

export default function TeamCard({ name, funFact, role, imageSrc }: TeamCardProps) {
  return (
    <div className={styles.card}>
      {/* Corner brackets */}
      <span className={`${styles.corner} ${styles.cornerTL}`} />
      <span className={`${styles.corner} ${styles.cornerTR}`} />
      <span className={`${styles.corner} ${styles.cornerBL}`} />
      <span className={`${styles.corner} ${styles.cornerBR}`} />

      {/* Photo + halftone overlay */}
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={name}
          width={280}
          height={360}
          className={styles.photo}
          unoptimized
        />
        <div className={styles.halftone} />
      </div>

      {/* Text */}
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.meta}>
          <span className={styles.funFact}>{funFact}</span>
          <span className={styles.role}>[{role}]</span>
        </p>
      </div>
    </div>
  );
}
