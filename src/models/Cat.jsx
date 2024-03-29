/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Diskette96 (https://sketchfab.com/diskette96)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cute-little-cat-4f9683c841424010aaeb36b069025667
Title: Cute Little Kitty
*/

import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { a } from '@react-spring/three';
import catScene from './../assets/3d/cat.glb';
import { useThree } from '@react-three/fiber';

const Cat = ({ currentAnimation, ...props }) => {
  const catRef = useRef();
  const { setSize, size } = useThree();
  const { nodes, materials, animations } = useGLTF(catScene);
  const { actions } = useAnimations(animations, catRef);

  useEffect(() => {
    setSize(size.width, 325, true);
    Object.values(actions).forEach((action) => action.stop());
    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <a.group {...props} ref={catRef}>
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <a.group name="root">
            <a.group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <a.group name="Armature_94">
                <a.group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.cute_kitty_material}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <a.group name="Cat_(Form_1)001_93" />
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  );
};

export default Cat;
