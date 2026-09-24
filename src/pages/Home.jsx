import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <section className="page home-page">
      <h1>ErrorFix Demo</h1>
      <p>Welcome! This is a small demo site used to test an AI error-fixing agent.</p>
      <button type="button" onClick={() => navigate('/products')}>
        View Products
      </button>
    </section>
  )
}

export default Home
