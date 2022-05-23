import { Suspense } from "react";
import { useGLTF } from "drei";
import type { NextPage } from "next";
import { Canvas } from "react-three-fiber";

const Home: NextPage = () => {
	return (
		<div>
			<Canvas camera={{ postion: [0, 0, 120], fov: 70 }}>
				<Suspense fallback={null}></Suspense>
			</Canvas>
		</div>
	);
};

export default Home;
