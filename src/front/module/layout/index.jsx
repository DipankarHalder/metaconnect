import { Sidebar } from 'front/features';

export const Layout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="app-main-wrapper">{children}</div>
    </div>
  );
};
