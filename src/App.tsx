import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Academic from './components/Academic';
import Publications from './components/Publications';
import Photography from './components/Photography';
import Teaching from './components/Teaching';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main>
        <Hero isVisible={isVisible.home} />
        <About isVisible={isVisible.about} />
        <Academic isVisible={isVisible.academic} />
        <Publications isVisible={isVisible.publications} />
        <Photography isVisible={isVisible.photography} />
        <Teaching isVisible={isVisible.teaching} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
