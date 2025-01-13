import BlogArticles from "./components/BlogArticles";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BlogArticles />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
};

export default App;
