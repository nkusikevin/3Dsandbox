import { Suspense } from "react";
import { useGLTF } from "drei";
import type { NextPage } from "next";
import { Canvas } from "react-three-fiber";
import Floor from "../components/Floor";

const Home: NextPage = () => {
	return (
		<div>
			<Canvas camera={{ postion: [0, 0, 120], fov: 70 }}>
				{/* <Suspense fallback={null}></Suspense> */}
				<Floor />
			</Canvas>
		</div>
	);
};

export default Home;
