import { motion } from 'framer-motion';
import { styled } from 'styled-components';

interface IconButtonProps {
  children?: React.ReactNode;
  className?: string;
  animate?: any;
  transition?: any;
}

export default function IconButton(props: IconButtonProps) {
  const { children, className, animate, transition } = props;
  return (
    <Holder animate={animate} transition={transition} className={className}>
      {children}
    </Holder>
  );
}

const Holder = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
  &:hover {
    background-color: #ffffff24;
  }
`;
