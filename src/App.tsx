import HoneyCard from './components/HoneyCard';

function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-2"
      style={{
        background: 'repeating-linear-gradient(135deg,#fffbe6 0 40px,#ffe066 40px 80px,#fffbe6 80px 120px,#ffe066 120px 160px)',
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 0%',
        animation: 'honeyStripes 64s linear infinite',
      }}
    >
      <HoneyCard />
    </div>
  );
}

export default App;
