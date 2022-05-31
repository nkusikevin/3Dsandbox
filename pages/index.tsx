import { Suspense } from "react";
import { useGLTF } from "drei";
import type { NextPage } from "next";
import { Canvas } from "react-three-fiber";
import Box from "../components/Box";
import LightBulb from "../components/Light";
import Floor from "../components/Floor";
import OrbitControls from "../components/OrbitControls";
import css from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={css.scene}>
			<Canvas
				shadows={true}
				className={css.canvas}
				camera={{
					position: [-6, 7, 7],
				}}>
				{/* <Suspense fallback={null}></Suspense> */}
				<ambientLight color={"white"} intensity={0.2} />
				<LightBulb position={[0, 3, 0]} />

				<Box rotateX={3} rotateY={0.2} />
				<OrbitControls />
				<Floor position={[0, -1, 0]} />
			</Canvas>
		</div>
	);
};

export default Home;
