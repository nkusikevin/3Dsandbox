import { Suspense } from "react";
import { useGLTF } from "drei";
import type { NextPage } from "next";
import { Canvas } from "react-three-fiber";

const Modal = () => {
	const gltf = useGLTF("./scene.gltf", true);
	return <primitive object={gltf.scene} dispose={null} />;
};

const Home: NextPage = () => {
	return (
		<div>
			<Canvas camera={{ postion: [0, 0, 120], fov: 70 }}>
				<Suspense fallback={null}>
					<Modal />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default Home;
