import Image from "next/image";
import { ReactNode } from "react";

interface BackgroundWrapperProps {
  children: ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  return (
    <section style={{ position: 'relative', minHeight: '100vh' }}>
      <Image
        src="/background.webp"
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        style={{ zIndex: -1 }}
      />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </section>
  );
};

export default BackgroundWrapper;
