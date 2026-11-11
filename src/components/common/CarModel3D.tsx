"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { RotateCw } from "lucide-react";

export type VehicleTypeId = "hatchback" | "sedan" | "suv" | "large-car" | "mini-bus";

interface CarModel3DProps {
  vehicleId: VehicleTypeId | string;
  categoryName?: string;
  className?: string;
  autoRotate?: boolean;
  interactive?: boolean;
  height?: number | string;
}

/**
 * High-Fidelity 3D Automotive Studio Renderer using Three.js
 * Builds accurate, photorealistic 3D vehicle models matching the FRD:
 * 1. Hatchback (Maruti Alto / Swift / WagonR)
 * 2. Sedan (Swift Dzire / Toyota Etios / Honda Amaze)
 * 3. SUV (Mahindra Bolero / Scorpio / Maruti Brezza)
 * 4. Large car (Toyota Innova Crysta / Kia Carens / Maruti Ertiga)
 * 5. Mini bus (Tempo Traveller / Force Urbania)
 */
export const CarModel3D: React.FC<CarModel3DProps> = ({
  vehicleId,
  categoryName,
  className = "",
  autoRotate = true,
  interactive = true,
  height = 190,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 280;
    const h = typeof height === "number" ? height : container.clientHeight || 190;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup (Automotive 3/4 perspective beauty angle)
    const camera = new THREE.PerspectiveCamera(34, width / h, 0.1, 100);
    camera.position.set(3.4, 1.45, 3.8);
    camera.lookAt(0, 0.42, 0);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 4. Studio Lighting Rig
    // Soft Ambient Studio Fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    // Key Light (Warm Sunlight Studio Spot)
    const keyLight = new THREE.DirectionalLight(0xfffaed, 2.6);
    keyLight.position.set(5, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0004;
    scene.add(keyLight);

    // Rim Light (Sharp Cool Sky Highlight from rear)
    const rimLight = new THREE.DirectionalLight(0xcae8ff, 1.8);
    rimLight.position.set(-5, 4, -5);
    scene.add(rimLight);

    // Underbody Warm Gold Fill (CabJatra Golden Signature)
    const goldBounce = new THREE.DirectionalLight(0xd9a52b, 0.7);
    goldBounce.position.set(0, -2, 2.5);
    scene.add(goldBounce);

    // 5. Shared PBR Automotive Materials
    // Deep Metallic British Racing / Emerald Car Paint with Clearcoat
    const bodyPaint = new THREE.MeshPhysicalMaterial({
      color: 0x073b3a,
      metalness: 0.88,
      roughness: 0.16,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      reflectivity: 0.95,
    });

    // Dark Tinted Automotive Glass
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x091617,
      metalness: 0.95,
      roughness: 0.05,
      transmission: 0.35,
      transparent: true,
      opacity: 0.92,
    });

    // High Polish Chrome
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf8f8f8,
      metalness: 0.98,
      roughness: 0.08,
    });

    // Gold Badges / Accents
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd9a52b,
      metalness: 0.9,
      roughness: 0.18,
    });

    // Rubber Tires
    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x181818,
      roughness: 0.88,
      metalness: 0.08,
    });

    // Alloy Wheels / Rims
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xd6dbdf,
      metalness: 0.92,
      roughness: 0.18,
    });

    // LED Projector Headlights
    const headlightMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 0.9,
      roughness: 0.05,
    });

    // LED Taillights
    const taillightMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 0.85,
      roughness: 0.08,
    });

    // Odisha Commercial Yellow Plate
    const yellowPlateMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.35,
      metalness: 0.2,
    });

    // 6. Ground Shadow Disc
    const shadowGeo = new THREE.PlaneGeometry(5.2, 3.0);
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(128, 128, 15, 128, 128, 115);
      gradient.addColorStop(0, "rgba(0,0,0,0.72)");
      gradient.addColorStop(0.45, "rgba(0,0,0,0.32)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }
    const shadowTexture = new THREE.CanvasTexture(canvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.01;
    scene.add(shadowPlane);

    // 7. Helper to create precision wheels
    const createWheel = (radius: number, width: number) => {
      const wheelGroup = new THREE.Group();
      // Outer rubber tire
      const tireGeo = new THREE.CylinderGeometry(radius, radius, width, 24);
      const tireMesh = new THREE.Mesh(tireGeo, tireMat);
      tireMesh.rotation.z = Math.PI / 2;
      tireMesh.castShadow = true;
      wheelGroup.add(tireMesh);

      // Alloy rim face
      const rimGeo = new THREE.CylinderGeometry(radius * 0.68, radius * 0.68, width * 1.02, 16);
      const rimMesh = new THREE.Mesh(rimGeo, rimMat);
      rimMesh.rotation.z = Math.PI / 2;
      wheelGroup.add(rimMesh);

      // Gold center hub
      const capGeo = new THREE.CylinderGeometry(radius * 0.24, radius * 0.24, width * 1.05, 12);
      const capMesh = new THREE.Mesh(capGeo, goldMat);
      capMesh.rotation.z = Math.PI / 2;
      wheelGroup.add(capMesh);

      return wheelGroup;
    };

    // 8. Vehicle Construction Group
    const carGroup = new THREE.Group();
    const normalizedType = vehicleId.toLowerCase();

    // -------------------------------------------------------------
    // BUILD 3D AUTOMOTIVE MODELS FOR ALL 5 CATEGORIES
    // -------------------------------------------------------------
    if (normalizedType.includes("hatchback")) {
      // ===== 1. HATCHBACK (Maruti Alto, Swift, WagonR) =====
      const bodyWidth = 1.55;
      const bodyLength = 3.1;
      const wheelRadius = 0.3;
      const wheelWidth = 0.22;

      // Lower Body
      const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(bodyLength, 0.48, bodyWidth), bodyPaint);
      lowerBody.position.set(0, 0.42, 0);
      lowerBody.castShadow = true;
      carGroup.add(lowerBody);

      // Sloped Hood
      const hood = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.34, bodyWidth * 0.96), bodyPaint);
      hood.position.set(1.05, 0.52, 0);
      hood.rotation.z = -0.1;
      hood.castShadow = true;
      carGroup.add(hood);

      // Compact Cabin
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.54, bodyWidth * 0.88), glassMat);
      cabin.position.set(-0.15, 0.88, 0);
      cabin.castShadow = true;
      carGroup.add(cabin);

      // Roof
      const roof = new THREE.Mesh(new THREE.BoxGeometry(1.58, 0.07, bodyWidth * 0.86), bodyPaint);
      roof.position.set(-0.15, 1.18, 0);
      carGroup.add(roof);

      // Rear Spoiler
      const spoiler = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.05, bodyWidth * 0.88), bodyPaint);
      spoiler.position.set(-0.98, 1.2, 0);
      carGroup.add(spoiler);

      // Headlights & Taillights
      const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.22), headlightMat);
      hlLeft.position.set(1.55, 0.52, 0.52);
      const hlRight = hlLeft.clone();
      hlRight.position.z = -0.52;
      carGroup.add(hlLeft, hlRight);

      const tlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.2, 0.14), taillightMat);
      tlLeft.position.set(-1.55, 0.62, 0.58);
      const tlRight = tlLeft.clone();
      tlRight.position.z = -0.58;
      carGroup.add(tlLeft, tlRight);

      // Odisha Yellow Plates
      const frontPlate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.1, 0.32), yellowPlateMat);
      frontPlate.position.set(1.57, 0.32, 0);
      const rearPlate = frontPlate.clone();
      rearPlate.position.set(-1.57, 0.32, 0);
      carGroup.add(frontPlate, rearPlate);

      // Wheels
      const track = bodyWidth * 0.48;
      const fL = createWheel(wheelRadius, wheelWidth);
      fL.position.set(0.9, wheelRadius, track);
      const fR = createWheel(wheelRadius, wheelWidth);
      fR.position.set(0.9, wheelRadius, -track);
      const rL = createWheel(wheelRadius, wheelWidth);
      rL.position.set(-0.9, wheelRadius, track);
      const rR = createWheel(wheelRadius, wheelWidth);
      rR.position.set(-0.9, wheelRadius, -track);
      carGroup.add(fL, fR, rL, rR);
    } else if (normalizedType.includes("suv") && !normalizedType.includes("large")) {
      // ===== 2. SUV (Mahindra Bolero, Scorpio, Maruti Brezza) =====
      const bodyWidth = 1.72;
      const bodyLength = 3.7;
      const wheelRadius = 0.38;
      const wheelWidth = 0.26;

      // Higher Ground Clearance Chassis
      const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(bodyLength, 0.56, bodyWidth), bodyPaint);
      lowerBody.position.set(0, 0.6, 0);
      lowerBody.castShadow = true;
      carGroup.add(lowerBody);

      // Muscular Square Hood
      const hood = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.42, bodyWidth * 0.98), bodyPaint);
      hood.position.set(1.28, 0.74, 0);
      hood.castShadow = true;
      carGroup.add(hood);

      // Chrome Grille & Front Skid Plate
      const grille = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.32, bodyWidth * 0.75), chromeMat);
      grille.position.set(1.85, 0.64, 0);
      const skidPlate = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.1, bodyWidth * 0.7), chromeMat);
      skidPlate.position.set(1.75, 0.36, 0);
      carGroup.add(grille, skidPlate);

      // Upright Boxy Cabin
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.15, 0.64, bodyWidth * 0.88), glassMat);
      cabin.position.set(-0.25, 1.18, 0);
      cabin.castShadow = true;
      carGroup.add(cabin);

      // SUV Roof
      const roof = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.08, bodyWidth * 0.86), bodyPaint);
      roof.position.set(-0.25, 1.52, 0);
      carGroup.add(roof);

      // Roof Rails
      const railLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.8, 8), chromeMat);
      railLeft.rotation.z = Math.PI / 2;
      railLeft.position.set(-0.25, 1.6, 0.6);
      const railRight = railLeft.clone();
      railRight.position.z = -0.6;
      carGroup.add(railLeft, railRight);

      // Headlights & Taillights
      const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.16, 0.3), headlightMat);
      hlLeft.position.set(1.82, 0.74, 0.58);
      const hlRight = hlLeft.clone();
      hlRight.position.z = -0.58;
      carGroup.add(hlLeft, hlRight);

      const tlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.15), taillightMat);
      tlLeft.position.set(-1.85, 0.9, 0.68);
      const tlRight = tlLeft.clone();
      tlRight.position.z = -0.68;
      carGroup.add(tlLeft, tlRight);

      // Odisha Yellow Plates
      const frontPlate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.38), yellowPlateMat);
      frontPlate.position.set(1.87, 0.4, 0);
      const rearPlate = frontPlate.clone();
      rearPlate.position.set(-1.87, 0.42, 0);
      carGroup.add(frontPlate, rearPlate);

      // Heavy SUV Wheels
      const track = bodyWidth * 0.52;
      const fL = createWheel(wheelRadius, wheelWidth);
      fL.position.set(1.15, wheelRadius, track);
      const fR = createWheel(wheelRadius, wheelWidth);
      fR.position.set(1.15, wheelRadius, -track);
      const rL = createWheel(wheelRadius, wheelWidth);
      rL.position.set(-1.15, wheelRadius, track);
      const rR = createWheel(wheelRadius, wheelWidth);
      rR.position.set(-1.15, wheelRadius, -track);
      carGroup.add(fL, fR, rL, rR);
    } else if (normalizedType.includes("large")) {
      // ===== 3. LARGE CAR / MPV (Toyota Innova Crysta, Kia Carens, Maruti Ertiga) =====
      const bodyWidth = 1.76;
      const bodyLength = 4.2;
      const wheelRadius = 0.34;
      const wheelWidth = 0.25;

      // Lower Body
      const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(bodyLength, 0.54, bodyWidth), bodyPaint);
      lowerBody.position.set(0, 0.52, 0);
      lowerBody.castShadow = true;
      carGroup.add(lowerBody);

      // Aerodynamic Sloping Nose
      const hood = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.4, bodyWidth * 0.96), bodyPaint);
      hood.position.set(1.48, 0.62, 0);
      hood.rotation.z = -0.12;
      hood.castShadow = true;
      carGroup.add(hood);

      // Chrome Shield Grille
      const grille = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.35, bodyWidth * 0.8), chromeMat);
      grille.position.set(2.1, 0.5, 0);
      carGroup.add(grille);

      // 3-Row Panoramic Glass Cabin
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.65, 0.6, bodyWidth * 0.88), glassMat);
      cabin.position.set(-0.3, 1.08, 0);
      cabin.castShadow = true;
      carGroup.add(cabin);

      // Long Roof
      const roof = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.08, bodyWidth * 0.85), bodyPaint);
      roof.position.set(-0.3, 1.4, 0);
      carGroup.add(roof);

      // Dual Chrome Roof Rails
      const railLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 2.2, 8), chromeMat);
      railLeft.rotation.z = Math.PI / 2;
      railLeft.position.set(-0.3, 1.47, 0.62);
      const railRight = railLeft.clone();
      railRight.position.z = -0.62;
      carGroup.add(railLeft, railRight);

      // Headlights & Taillights
      const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.15, 0.3), headlightMat);
      hlLeft.position.set(2.08, 0.62, 0.62);
      const hlRight = hlLeft.clone();
      hlRight.position.z = -0.62;
      carGroup.add(hlLeft, hlRight);

      const tlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.32, 0.2), taillightMat);
      tlLeft.position.set(-2.1, 0.8, 0.68);
      const tlRight = tlLeft.clone();
      tlRight.position.z = -0.68;
      carGroup.add(tlLeft, tlRight);

      // Odisha Yellow Plates
      const frontPlate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.38), yellowPlateMat);
      frontPlate.position.set(2.12, 0.36, 0);
      const rearPlate = frontPlate.clone();
      rearPlate.position.set(-2.12, 0.4, 0);
      carGroup.add(frontPlate, rearPlate);

      // 4 Wheels
      const track = bodyWidth * 0.5;
      const fL = createWheel(wheelRadius, wheelWidth);
      fL.position.set(1.3, wheelRadius, track);
      const fR = createWheel(wheelRadius, wheelWidth);
      fR.position.set(1.3, wheelRadius, -track);
      const rL = createWheel(wheelRadius, wheelWidth);
      rL.position.set(-1.3, wheelRadius, track);
      const rR = createWheel(wheelRadius, wheelWidth);
      rR.position.set(-1.3, wheelRadius, -track);
      carGroup.add(fL, fR, rL, rR);
    } else if (normalizedType.includes("mini") || normalizedType.includes("bus") || normalizedType.includes("traveller")) {
      // ===== 4. MINI BUS / TEMPO TRAVELLER (Force Urbania, Tempo Traveller) =====
      const bodyWidth = 1.85;
      const bodyLength = 4.8;
      const wheelRadius = 0.38;
      const wheelWidth = 0.28;

      // Lower Van Body
      const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(bodyLength, 0.8, bodyWidth), bodyPaint);
      lowerBody.position.set(0, 0.72, 0);
      lowerBody.castShadow = true;
      carGroup.add(lowerBody);

      // Front Cab
      const cab = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.68, bodyWidth * 0.96), bodyPaint);
      cab.position.set(1.85, 0.86, 0);
      cab.rotation.z = -0.06;
      cab.castShadow = true;
      carGroup.add(cab);

      // High Roof Panoramic Windows
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.78, bodyWidth * 0.9), glassMat);
      cabin.position.set(-0.3, 1.48, 0);
      cabin.castShadow = true;
      carGroup.add(cabin);

      // High Roof Shell
      const roof = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.14, bodyWidth * 0.92), bodyPaint);
      roof.position.set(-0.3, 1.9, 0);
      carGroup.add(roof);

      // Roof AC Compressor Pod
      const acUnit = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.18, bodyWidth * 0.58), chromeMat);
      acUnit.position.set(-0.2, 2.05, 0);
      carGroup.add(acUnit);

      // Commercial Chrome Grille
      const grille = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.45, bodyWidth * 0.82), chromeMat);
      grille.position.set(2.42, 0.68, 0);
      carGroup.add(grille);

      // Headlights & Taillights
      const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.3, 0.28), headlightMat);
      hlLeft.position.set(2.38, 0.78, 0.68);
      const hlRight = hlLeft.clone();
      hlRight.position.z = -0.68;
      carGroup.add(hlLeft, hlRight);

      const tlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.52, 0.16), taillightMat);
      tlLeft.position.set(-2.42, 1.0, 0.72);
      const tlRight = tlLeft.clone();
      tlRight.position.z = -0.72;
      carGroup.add(tlLeft, tlRight);

      // Odisha Yellow Plates
      const frontPlate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.14, 0.44), yellowPlateMat);
      frontPlate.position.set(2.44, 0.4, 0);
      const rearPlate = frontPlate.clone();
      rearPlate.position.set(-2.44, 0.42, 0);
      carGroup.add(frontPlate, rearPlate);

      // Wheels
      const track = bodyWidth * 0.51;
      const fL = createWheel(wheelRadius, wheelWidth);
      fL.position.set(1.5, wheelRadius, track);
      const fR = createWheel(wheelRadius, wheelWidth);
      fR.position.set(1.5, wheelRadius, -track);
      const rL = createWheel(wheelRadius, wheelWidth);
      rL.position.set(-1.5, wheelRadius, track);
      const rR = createWheel(wheelRadius, wheelWidth);
      rR.position.set(-1.5, wheelRadius, -track);
      carGroup.add(fL, fR, rL, rR);
    } else {
      // ===== 5. SEDAN (DEFAULT / STANDARD) (Swift Dzire, Toyota Etios, Honda Amaze) =====
      const bodyWidth = 1.65;
      const bodyLength = 3.95;
      const wheelRadius = 0.32;
      const wheelWidth = 0.24;

      // Lower Body
      const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(bodyLength, 0.5, bodyWidth), bodyPaint);
      lowerBody.position.set(0, 0.46, 0);
      lowerBody.castShadow = true;
      carGroup.add(lowerBody);

      // Sleek Hood
      const hood = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.36, bodyWidth * 0.96), bodyPaint);
      hood.position.set(1.32, 0.56, 0);
      hood.rotation.z = -0.09;
      hood.castShadow = true;
      carGroup.add(hood);

      // Classic Sedan Boot Deck (3 large bags capacity)
      const boot = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.34, bodyWidth * 0.94), bodyPaint);
      boot.position.set(-1.5, 0.56, 0);
      boot.rotation.z = 0.05;
      boot.castShadow = true;
      carGroup.add(boot);

      // Executive Cabin (Raked aerodynamic glass)
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.56, bodyWidth * 0.88), glassMat);
      cabin.position.set(-0.1, 0.98, 0);
      cabin.castShadow = true;
      carGroup.add(cabin);

      // Roof
      const roof = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.07, bodyWidth * 0.86), bodyPaint);
      roof.position.set(-0.1, 1.28, 0);
      carGroup.add(roof);

      // Chrome Grille
      const grille = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.3, bodyWidth * 0.8), chromeMat);
      grille.position.set(1.98, 0.45, 0);
      carGroup.add(grille);

      // Projector Headlights & Taillights
      const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.14, 0.28), headlightMat);
      hlLeft.position.set(1.95, 0.56, 0.55);
      const hlRight = hlLeft.clone();
      hlRight.position.z = -0.55;
      carGroup.add(hlLeft, hlRight);

      const tlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.18, 0.2), taillightMat);
      tlLeft.position.set(-1.98, 0.64, 0.62);
      const tlRight = tlLeft.clone();
      tlRight.position.z = -0.62;
      carGroup.add(tlLeft, tlRight);

      // Odisha Yellow Commercial Plates
      const frontPlate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.11, 0.36), yellowPlateMat);
      frontPlate.position.set(2.0, 0.32, 0);
      const rearPlate = frontPlate.clone();
      rearPlate.position.set(-2.0, 0.35, 0);
      carGroup.add(frontPlate, rearPlate);

      // Wheels
      const track = bodyWidth * 0.49;
      const fL = createWheel(wheelRadius, wheelWidth);
      fL.position.set(1.22, wheelRadius, track);
      const fR = createWheel(wheelRadius, wheelWidth);
      fR.position.set(1.22, wheelRadius, -track);
      const rL = createWheel(wheelRadius, wheelWidth);
      rL.position.set(-1.22, wheelRadius, track);
      const rR = createWheel(wheelRadius, wheelWidth);
      rR.position.set(-1.22, wheelRadius, -track);
      carGroup.add(fL, fR, rL, rR);
    }

    scene.add(carGroup);

    // Initial 3/4 beauty angle
    carGroup.rotation.y = Math.PI * 0.28;

    // -------------------------------------------------------------
    // INTERACTION HANDLING (Mouse Drag & Touch Rotate)
    // -------------------------------------------------------------
    let isDragging = false;
    let prevMouseX = 0;
    let targetRotationY = carGroup.rotation.y;
    let animId: number;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      prevMouseX = clientX;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const deltaX = clientX - prevMouseX;
      prevMouseX = clientX;
      targetRotationY += deltaX * 0.012;
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 2000);
    };

    if (interactive) {
      const dom = renderer.domElement;
      dom.addEventListener("mousedown", onPointerDown);
      window.addEventListener("mousemove", onPointerMove);
      window.addEventListener("mouseup", onPointerUp);
      dom.addEventListener("touchstart", onPointerDown, { passive: true });
      window.addEventListener("touchmove", onPointerMove, { passive: true });
      window.addEventListener("touchend", onPointerUp);
    }

    // -------------------------------------------------------------
    // ANIMATION LOOP
    // -------------------------------------------------------------
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (autoRotate && !isDragging) {
        targetRotationY += 0.0038;
      }

      carGroup.rotation.y += (targetRotationY - carGroup.rotation.y) * 0.08;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = typeof height === "number" ? height : container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        const dom = renderer.domElement;
        dom.removeEventListener("mousedown", onPointerDown);
        window.removeEventListener("mousemove", onPointerMove);
        window.removeEventListener("mouseup", onPointerUp);
        dom.removeEventListener("touchstart", onPointerDown);
        window.removeEventListener("touchmove", onPointerMove);
        window.removeEventListener("touchend", onPointerUp);
      }
      renderer.dispose();
      scene.clear();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [vehicleId, autoRotate, interactive, height]);

  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`}>
      {/* 3D WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-full cursor-grab active:cursor-grabbing flex items-center justify-center"
        style={{ height: typeof height === "number" ? `${height}px` : height }}
      />

      {/* Sleek Minimal 360 Indicator (Bottom Right - Floor Corner) */}
      <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/35 backdrop-blur-md border border-white/10 text-white/80 text-[8.5px] font-bold pointer-events-none shadow-xs">
        <RotateCw className="w-2.5 h-2.5 text-[#D9A52B]" />
        <span>360°</span>
      </div>
    </div>
  );
};
