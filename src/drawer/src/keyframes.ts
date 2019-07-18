import { keyframes } from 'styled-components';

export const leftSlideInAnimation = keyframes`
  from {  
    transform: translateX(-100%);
  }

  to { 
    transform: translateX(0);
  }
`;

export const leftSlideOutAnimation = keyframes`
  from {  
    transform: translateX(0);
  }

  to { 
    transform: translateX(-100%);
  }
`;

export const rightSlideInAnimation = keyframes`
  from {  
    transform: translateX(100%);
  }

  to { 
    transform: translateX(0);
  }
`;

export const rightSlideOutAnimation = keyframes`
  from {  
    transform: translateX(0);
  }

  to { 
    transform: translateX(100%);
  }
`;
