import { useEffect, useRef, useState, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader from './../components/Loader';
import Alert from './../components/Alert';
import Cat from '../models/Cat';
import { catSize } from '../constants/index';
import useAlert from '../hooks/useAlert';

const Contact = () => {
  const formRef = useRef();
  const canvasRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('Sleeping');
  const [currentSize, setCurrentSize] = useState('xlMax');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => setCurrentAnimation('Sitting');

  const handleBlur = (e) => setCurrentAnimation('Sleeping');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('Walk');

    /** Sending Email Use @emailjs/browser */
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Rizki Kosasih',
          message: form.message,
          form_email: form.email,
          to_email: 'rizkikosasih1997@gmail.com'
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({ text: 'Message sent successfully!', type: 'success' });
        setForm({ name: '', email: '', message: '' });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation('Sleeping');
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('Sleeping');
        console.warn(error);
        showAlert({ text: 'I didnt received your message', type: 'danger' });
      });
  };

  /* adjust for screen size */
  useEffect(() => {
    if (window.innerWidth <= 480) {
      setCurrentSize('smMax');
    } else if (window.innerWidth <= 768) {
      setCurrentSize('mdMax');
    } else if (window.innerWidth <= 1024) {
      setCurrentSize('lgMax');
    } else {
      setCurrentSize('xlMax');
    }

    return () => adjustForScreenSize;
  }, []);

  const adjustForScreenSize = () => {
    let screenPosition = catSize[currentSize][currentAnimation]['position'];
    let screenRotation = catSize[currentSize][currentAnimation]['rotation'];
    let screenScale = catSize[currentSize][currentAnimation]['scale'];
    return [screenPosition, screenRotation, screenScale];
  };

  const [positionScene, rotationScene, scaleScene] = adjustForScreenSize();

  const createBubble = () => {
    var output = [];
    for (let i = 0; i < 30; i++) {
      output.push(<div key={'bubble-' + i} className="bubble"></div>);
    }
    return output;
  };

  return (
    <section className="max-container relative" style={{ paddingBottom: '1rem' }}>
      {alert.show && <Alert {...alert} />}

      <h1 className="head-text mt-5">Get In Touch</h1>

      <div className="flex md:flex-row flex-col-reverse items-center pb-6">
        <div className="flex flex-col w-full md:flex-shrink-0 md:flex-grow-0 md:w-1/2">
          <form
            className="w-full flex flex-col gap-7 mt-10"
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

        <div className="flex flex-col w-full md:flex-shrink-0 md:flex-grow-0 md:w-1/2 absolute top-1/3 -z-10 md:relative md:z-[1]">
          <Canvas
            ref={canvasRef}
            camera={{
              // position: [0, 0, 5],
              fov: 35,
              near: 0.1,
              far: 1000
            }}
            className="flex justify-center items-center"
            resize={{ scroll: true, debounce: 0 }}
            shadows
            linear
          >
            <Suspense fallback={<Loader />}>
              <directionalLight intensity={2.5} position={[0, 0, 1]} />
              <ambientLight intensity={1} />

              <Cat
                currentAnimation={currentAnimation}
                position={positionScene}
                rotation={rotationScene}
                scale={scaleScene}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="absolute -bottom-[5%] left-0 right-0 z-[1]">{createBubble()}</div>
    </section>
  );
};

export default Contact;
