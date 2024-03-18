import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { IoPlayCircleOutline, IoPauseCircleOutline } from 'react-icons/io5';
import Loader from '../components/Loader';
import Island from './../models/Island';
import Sky from './../models/Sky';
import Bird from './../models/Bird';
import Plane from './../models/Plane';
import HomeInfo from './../components/HomeInfo';
import bgMusic from './../assets/musics/evening-improvisation.mp3';

const Home = () => {
  const audioRef = useRef(new Audio(bgMusic));
  audioRef.current.volume = 1;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayMusic, setIsPlayMusic] = useState(false);

  const handlebtnAudioClick = (e) => {
    setIsPlayMusic(!isPlayMusic);
    e.currentTarget.blur();
  };

  useEffect(() => {
    if (isPlayMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, []);

  const adjustIslandForScreenSize = () => {
    let screenScale = [1, 1, 1];
    let screenPosition = [0, -6.5, -43.4];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }
    return [screenScale, screenPosition];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 items-center justify-center flex">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ fov: 75, near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 1, 10]} intensity={2} />
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <hemisphereLight skyColor={'#b1e1ff'} groundColor={'#000000'} intensity={1} />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 2.1, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-3">
        <button
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium bg-gray-900 text-white rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-800"
          onClick={handlebtnAudioClick}>
          <span className="relative p-1 transition-all ease-in duration-75 bg-gray-900 rounded-full group-hover:bg-opacity-0">
            {!isPlayMusic ? (
              <IoPlayCircleOutline className="w-8 h-8" />
            ) : (
              <IoPauseCircleOutline className="w-8 h-8" />
            )}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Home;
