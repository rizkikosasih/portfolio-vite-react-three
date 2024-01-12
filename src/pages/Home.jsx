import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import Loader from "../components/Loader"
import Island from "./../models/Island"
import Sky from "./../models/Sky"
import Bird from "./../models/Bird"
import Plane from "./../models/Plane"

{/* <div className="absolute top-28 left-0 right-0 z-10 items-center justify-center flex">
  Hello World!
</div> */}

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false)

  const adjustIslandForScreenSize = () => {
    let screenScale = [1, 1, 1]
    let screenPosition = [0, -6.5, -43.4]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    }
    return [screenScale, screenPosition]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3]
      screenPosition = [0, -4, -4]
    }
    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition] = adjustIslandForScreenSize()
  const [planeScale, planePosition] = adjustPlaneForScreenSize()

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 1, 10]} intensity={2} />
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <hemisphereLight
            skyColor={"#b1e1ff"}
            groundColor={"#000000"}
            intensity={1}
          />

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
            rotation={[0, 20.1, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
