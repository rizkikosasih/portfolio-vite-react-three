import { Html } from "@react-three/drei"

const Loader = () => {
  return (
    <Html>
      <div className="position relative top-[50%] left-[-50%] sm:left-[50%]">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
      </div>
    </Html>
  )
}

export default Loader
