import { Html } from "@react-three/drei"
import { Vortex } from "react-loader-spinner"

const Loader = () => {
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
  return (
    <Html>
      <div style={style}>
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      </div>
    </Html>
  )
}

export default Loader
