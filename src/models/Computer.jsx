import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

export function Computer(props) {
	const group = useRef();
	const { nodes, materials } = useGLTF("computer/scene.gltf");
	const [direction, setDirection] = useState(1);

	useFrame(() => {
		group.current.rotation.y += 0.002 * direction; // Измените скорость вращения по вашему усмотрению

		// Проверяем, достигла ли модель определенного угла
		if (
			group.current.rotation.y >= Math.PI / 4 ||
			group.current.rotation.y <= -Math.PI / 4
		) {
			// Инвертируем направление вращения
			setDirection(direction * -1);
		}
	});

	return (
		<group ref={group} {...props} dispose={null}>
			{/* Вставляем вашу 3D модель */}
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
					<group name="root">
						<group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
							<group name="������������������_3">
								<mesh
									name="Object_10"
									geometry={nodes.Object_10.geometry}
									material={materials["Scene_-_Root"]}
								/>
							</group>
							<group name="����������_0">
								<mesh
									name="Object_4"
									geometry={nodes.Object_4.geometry}
									material={materials["Scene_-_Root"]}
								/>
							</group>
							<group name="������������_������������������_1">
								<mesh
									name="Object_6"
									geometry={nodes.Object_6.geometry}
									material={materials["Scene_-_Root"]}
								/>
							</group>
							<group name="������������������_2">
								<mesh
									name="Object_8"
									geometry={nodes.Object_8.geometry}
									material={materials["Scene_-_Root"]}
								/>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}
