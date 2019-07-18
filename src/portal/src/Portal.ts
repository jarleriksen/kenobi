import { createPortal } from 'react-dom';
import { useMemo, useEffect } from 'react';

let portalRoot;

const Portal = ({ children }) => {
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.setAttribute('kenobi-portal-container', '');
      portalRoot.setAttribute('data-testid', 'kenobi-portal');
      document.body.append(portalRoot);
    }

    portalRoot.appendChild(el);
    return () => {
      portalRoot.removeChild(el);
    };
  }, [el]);

  return createPortal(children, el);
};

export default Portal;
