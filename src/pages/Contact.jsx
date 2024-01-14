import { useRef, useState, Suspense } from "react"
import emailjs from "@emailjs/browser"
import { Canvas } from "@react-three/fiber"
import Loader from "./../components/Loader"
import Cat from "../models/Cat"
import catSize from "./../models/CatSize"
import { useEffect } from "react"

const Contact = () => {
  const formRef = useRef()
  const canvasRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('Sleeping')
  const [currentSize, setCurrentSize] = useState('xlMax')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFocus = (e) => setCurrentAnimation('Sitting')

  const handleBlur = (e) => setCurrentAnimation('Sleeping')

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('Walk')

    /** Sending Email Use @emailjs/browser */
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Rizki Kosasih',
        message: form.message,
        form_email: form.email,
        to_email: 'rizkikosasih1997@gmail.com'
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(() => {
      setIsLoading(false)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => {
        setCurrentAnimation('Sleeping')
      }, 3000)
    }).catch((error) => {
      setIsLoading(false)
      setCurrentAnimation('Sleeping')
      console.warn(error)
    })
  }

  /* adjust for screen size */
  useEffect(() => {
    if (window.innerWidth <= 480) {
      setCurrentSize('smMax')
    } else if (window.innerWidth <= 768) {
      setCurrentSize('mdMax')
    } else if (window.innerWidth <= 1024) {
      setCurrentSize('lgMax')
    } else {
      setCurrentSize('xlMax')
    }

    return () => adjustForScreenSize
  }, [])

  const adjustForScreenSize = () => {
    let screenPosition = catSize[currentSize][currentAnimation]['position']
    let screenRotation = catSize[currentSize][currentAnimation]['rotation']
    let screenScale = catSize[currentSize][currentAnimation]['scale']
    return [screenPosition, screenRotation, screenScale]
  }

  const [positionScene, rotationScene, scaleScene] = adjustForScreenSize()

  return (
    <section className="relative flex md:flex-row flex-col items-center max-container">
      <div className="flex flex-col w-full md:flex-shrink-0 md:flex-grow-0 md:w-1/2">
        <h1 className="head-text">Get In Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className="font-semibold text-black-500">Name</label>
          <input
            className="input"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="Your name"
            required
            type="text"
            value={form.name}
          />

          <label className="font-semibold text-black-500">Email</label>
          <input
            className="input"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="example@mail.com"
            required
            type="email"
            value={form.email}
          />

          <label className="font-semibold text-black-500">Message</label>
          <textarea
            className="textarea"
            name="message"
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="Let me know how i can help you?"
            required
            rows={4}
            value={form.message}
          />

          <button
            className="btn"
            disabled={isLoading}
            type="submit"
            onBlur={handleBlur}
            onFocus={handleFocus}
          >
            {isLoading ? 'Sending ...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="flex flex-col w-full md:flex-shrink-0 md:flex-grow-0 md:w-1/2">
        <Canvas
          ref={canvasRef}
          camera={{
            // position: [0, 0, 5],
            fov: 35,
            near: .1,
            far: 1000
          }}
          className="flex justify-center items-center mt-10 md:mt-0"
          resize={{ scroll: true, debounce: 0 }}
          shadows linear
        >
          <Suspense fallback={<Loader />}>
            <directionalLight
              intensity={2.5}
              position={[0, 0, 1]}
            />
            <ambientLight intensity={0.5} />

            <Cat
              currentAnimation={currentAnimation}
              position={positionScene}
              rotation={rotationScene}
              scale={scaleScene}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
