import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Signal, signal, ViewChild } from '@angular/core';
import { Mackbook } from '../../../core/services/mackbook/mackbook';
import { NgtsOrbitControls } from 'angular-three-soba/controls';
import { gltfResource, textureResource } from 'angular-three-soba/loaders';
import * as THREE from 'three';
import { StudioLight } from '../studio-light/studio-light';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_10: THREE.Mesh
    Object_16: THREE.Mesh
    Object_20: THREE.Mesh
    Object_22: THREE.Mesh
    Object_30: THREE.Mesh
    Object_32: THREE.Mesh
    Object_34: THREE.Mesh
    Object_38: THREE.Mesh
    Object_42: THREE.Mesh
    Object_48: THREE.Mesh
    Object_54: THREE.Mesh
    Object_58: THREE.Mesh
    Object_66: THREE.Mesh
    Object_74: THREE.Mesh
    Object_82: THREE.Mesh
    Object_96: THREE.Mesh
    Object_107: THREE.Mesh
    Object_123: THREE.Mesh
    Object_127: THREE.Mesh
  }
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial
    zhGRTuGrQoJflBD: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    lmWQsEjxpsebDlK: THREE.MeshStandardMaterial
    LtEafgAVRolQqRw: THREE.MeshStandardMaterial
    iyDJFXmHelnMTbD: THREE.MeshStandardMaterial
    eJObPwhgFzvfaoZ: THREE.MeshStandardMaterial
    nDsMUuDKliqGFdU: THREE.MeshStandardMaterial
    CRQixVLpahJzhJc: THREE.MeshStandardMaterial
    YYwBgwvcyZVOOAA: THREE.MeshStandardMaterial
    SLGkCohDDelqXBu: THREE.MeshStandardMaterial
    WnHKXHhScfUbJQi: THREE.MeshStandardMaterial
    fNHiBfcxHUJCahl: THREE.MeshStandardMaterial
    LpqXZqhaGCeSzdu: THREE.MeshStandardMaterial
    gMtYExgrEUqPfln: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshStandardMaterial
    JvMFZolVCdpPqjj: THREE.MeshStandardMaterial
    sfCQkHOWyrsLmor: THREE.MeshStandardMaterial
    ZCDwChwkbBfITSW: THREE.MeshStandardMaterial
  }
}



@Component({
  selector: 'app-scene-graph',
  imports: [NgtsOrbitControls, StudioLight],
  templateUrl: './scene-graph.html',
  styleUrl: './scene-graph.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SceneGraph {
  mackbook = inject(Mackbook);
  gltf = gltfResource<GLTFResult>(() => '/models/macbook.glb');
  texture = textureResource(() => '/screen.png');
  Math = Math;
}
