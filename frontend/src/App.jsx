import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import ChatWidget from './components/chatbot/ChatWidget.jsx'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App
