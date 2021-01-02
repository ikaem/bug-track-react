// src\components\layout\layout.component.tsx

import Header from "./header.component";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
