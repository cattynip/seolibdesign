import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';
import { DDSLoader, MTLLoader, OBJLoader } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei';
import { IThreeD } from '@data/websiteData';
import { Box } from '@chakra-ui/react';
import { changeToAngle } from '@libs/math';

interface IThreeDModel {
  src: IThreeD;
}

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = ({ src }: IThreeDModel) => {
  const materials = useLoader(MTLLoader, src.mtlSrc);
  const modelObject = useLoader(OBJLoader, src.objSrc, loader => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useFrame((_state, delta) => {
    modelObject.rotation.z += delta / 10;
  });

  useEffect(() => {
    modelObject.scale.set(1, 1, 1);
    modelObject.rotation.set(changeToAngle(-90), 0, changeToAngle(-90), 'XYZ');
  }, [modelObject]);

  return <primitive object={modelObject} />;
};

const ThreeDModel = ({ src }: IThreeDModel) => {
  return (
    <Box>
      <Canvas
        flat
        linear
        camera={{
          isPerspectiveCamera: true,
          near: 0.001,
          far: 40000,
          position: [120, 120, 0]
        }}
      >
        <Suspense fallback={null}>
          <Scene src={src} />
          <gridHelper scale={25} />
          <axesHelper scale={100} />
          <ambientLight />
          <OrbitControls scale={1.2} />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default ThreeDModel;
