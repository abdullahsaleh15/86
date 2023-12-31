import React from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "react-three-fiber";
import { useRef, useEffect } from "react";

const INITIAL_MTL = new THREE.MeshPhongMaterial({
  color: new THREE.Color(0xf1f1f1),
  shininess: 10
});

const INITIAL_MAP = [
  { childID: "Wood", mtl: INITIAL_MTL },
  { childID: "MainBox", mtl: INITIAL_MTL },
  { childID: "InnerBox", mtl: INITIAL_MTL },
  { childID: "ChocolateHolder", mtl: INITIAL_MTL },
  { childID: "CustomizedSticker", mtl: INITIAL_MTL }
];

const initColor = (parent, type, mtl) => {
  parent.traverse((o) => {
    if (o.isMesh && o.name.includes(type)) {
      o.castShadow = true;
      o.receiveShadow = true;
      o.material = mtl;
      o.nameID = type;
    }
  });
};

const ChairMesh = ({ newMaterialOpt }) => {
  const { scene: theModel } = useLoader(GLTFLoader, "box.gltf");
  const chair = useRef(theModel);

  useEffect(
    () => void setMaterial(newMaterialOpt.activeOption, newMaterialOpt.newMTL),
    [newMaterialOpt.newMTL]
  );

  useEffect(() => {
    if (theModel) {
      for (let object of INITIAL_MAP) {
        initColor(theModel, object.childID, object.mtl);
      }
    }
  }, [theModel]);

  const setMaterial = (type, mtl) => {
    theModel.traverse((o) => {
      if (o.isMesh && o.nameID != null) {
        if (o.nameID === type) {
          o.material = mtl;
        }
      }
    });
  };

  return (
    <primitive
      ref={chair}
      object={theModel}
      scale={[2, 2, 2]}
      rotation={[0, Math.PI, 0]}
      position={[0, -1, 0]}
      receiveShadow
      castShadow
    ></primitive>
  );
};

export default ChairMesh;
