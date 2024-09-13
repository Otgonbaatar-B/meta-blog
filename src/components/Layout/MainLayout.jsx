import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useTheme } from "../Utils/ThemeContext";

const MainLayout = ({ children }) => {
  const { isDarkMode, handleThemeToggle } = useTheme();

  return (
    <main className="flex flex-col gap-[100px] bg-gray-night-950 dark:bg-gray-light-950">
      <Header isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
      {children}
      <Footer isDarkMode={isDarkMode} />
    </main>
  );
};

export default MainLayout;
