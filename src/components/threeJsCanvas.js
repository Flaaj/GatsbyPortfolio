import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const ThreeJsCanvas = () => {
    useEffect(() => {}, []);

    return (
        <Canvas className="canvas">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {new Array(1000).fill(0).map((_, i) => (
                <Star key={i} position={randomPosition()} />
            ))}
        </Canvas>
    );
};

export default ThreeJsCanvas;

const Star = ({ position }) => {
    const mesh = useRef();
    useEffect(() => {
        mesh.current.t     =    Math.random();
        mesh.current.mult  = ~~(Math.random() * 10);
        mesh.current.speed =    Math.random();
        if      (mesh.current.speed >  0.99) mesh.current.speed *=  5;
        else if (mesh.current.speed > 0.995) mesh.current.speed *= 25;
    }, []);

    useFrame(() => {
        try {
            mesh.current.t += 0.01 * mesh.current.mult;
            mesh.current.position.x =
                mesh.current.position.x + 0.001 < 15
                    ? mesh.current.position.x +
                      (Math.sin(mesh.current.t) * 0.3) / 1000 +
                      mesh.current.speed / 1000
                    : -15;
            mesh.current.position.y =
                mesh.current.position.y + 0.001 < 15
                    ? mesh.current.position.y +
                      (Math.cos(mesh.current.t) * 0.3) / 1000 +
                      mesh.current.speed / 1000
                    : -15;
        } catch(err) {
            console.log(err)
        }
    });
    return (
        <mesh position={position} ref={mesh}>
            <sphereGeometry attach="geometry" args={[0.02, 10, 10]} />
            <meshStandardMaterial color={"grey"} />
        </mesh>
    );
};

const randomPosition = () => [
    Math.random() * 30 - 15,
    Math.random() * 30 - 15,
    Math.random() * 10 - 10,
];
// const randomDimensions = () => [Math.random(), Math.random(), Math.random()];
// const colors = ["red", "blue", "green", "yellow"];
// const randomColor = () => {
//     return colors[~~(Math.random() * 5)];
// };
