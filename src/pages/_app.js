import MainLayout from "@/components/Layout/MainLayout";
import { ThemeProvider } from "@/components/Utils/ThemeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>
    </ThemeProvider>
  );
}
