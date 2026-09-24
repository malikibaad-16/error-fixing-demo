import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function validate() {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.'
    return newErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <section className="page contact-page">
      <h1>Contact Us</h1>
      {submitted && <p className="success-message">Thanks! Your message has been received.</p>}
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} />
        {errors.message && <p className="error-text">{errors.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Contact
