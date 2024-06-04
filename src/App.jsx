import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import { Computer } from "./models/Computer";

function App() {
	return (
		<Canvas>
			<OrbitControls enableZoom={false} />
			<spotLight
				position={[10, 10, 10]}
				angle={0.3}
				penumbra={1}
				intensity={2}
				castShadow
			></spotLight>
			<ambientLight />
			<Suspense fallback={null}>
				<Computer />
			</Suspense>
			<Environment preset="sunset" />
		</Canvas>
	);
}

export default App;
