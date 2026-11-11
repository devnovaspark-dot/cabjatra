"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { RotateCw, Sparkles, Eye, ShieldCheck } from "lucide-react";

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
 * Procedural 3D Automotive Studio Renderer using Three.js
 * Builds accurate, high-fidelity 3D vehicle geometries matching:
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
  height = 240,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [currentAngle, setCurrentAngle] = useState<"front" | "side" | "rear" | "iso">("iso");

  // Keep ref to car group for button controls
  const carGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const h = typeof height === "number" ? height : container.clientHeight || 240;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup (Perspective automotive studio angle)
    const camera = new THREE.PerspectiveCamera(36, width / h, 0.1, 100);
    camera.position.set(4.5, 2.2, 5.2);

    // 3. Renderer Setup
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
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 4. Studio Lighting Rig
    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    // Key Keylight (Warm Sun / Studio Spot)
    const keyLight = new THREE.DirectionalLight(0xfffaed, 2.4);
    keyLight.position.set(5, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Rim / Fill Light (Cool Sky Reflection)
    const rimLight = new THREE.DirectionalLight(0xd9f2ff, 1.4);
    rimLight.position.set(-6, 4, -5);
    scene.add(rimLight);

    // Subtle Gold Ground Bounce Light (CabJatra Signature Gold)
    const goldBounce = new THREE.DirectionalLight(0xd9a52b, 0.6);
    goldBounce.position.set(0, -2, 2);
    scene.add(goldBounce);

    // 5. Shared Materials
    // Luxury Emerald Body Paint (Clearcoat Metallic)
    const bodyPaint = new THREE.MeshPhysicalMaterial({
      color: 0x073b3a,
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
    });

    // Dark Tinted Glass
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0c1b1c,
      metalness: 0.9,
      roughness: 0.08,
      transmission: 0.45,
      transparent: true,
      opacity: 0.88,
    });

    // Chrome / Trim
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf5f5f5,
      metalness: 0.95,
      roughness: 0.12,
    });

    // Gold Accent
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd9a52b,
      metalness: 0.85,
      roughness: 0.2,
    });

    // Rubber Tires
    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x181818,
      roughness: 0.85,
      metalness: 0.1,
    });

    // Alloy Rims
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xd0d5dd,
      metalness: 0.9,
      roughness: 0.22,
    });

    // LED Headlights (Glowing)
    const headlightMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 0.8,
      roughness: 0.1,
    });

    // LED Taillights (Red Glowing)
    const taillightMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 0.7,
      roughness: 0.1,
    });

    // Odisha Commercial Yellow Plate
    const yellowPlateMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      roughness: 0.4,
      metalness: 0.2,
    });

    // 6. Contact Shadow Disc (Floor Ambient Occlusion)
    const shadowGeo = new THREE.PlaneGeometry(5.5, 3.2);
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(128, 128, 20, 128, 128, 120);
      gradient.addColorStop(0, "rgba(0,0,0,0.75)");
      gradient.addColorStop(0.5, "rgba(0,0,0,0.35)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }
    const shadowTexture = new THREE.CanvasTexture(canvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.02;
    scene.add(shadowPlane);

    // 7. Helper to create a wheel
    const createWheel = (radius: number, width: number) => {
      const wheelGroup = new THREE.Group();
      // Tire
      const tireGeo = new THREE.CylinderGeometry(radius, radius, width, 24);
      const tireMesh = new THREE.Mesh(tireGeo, tireMat);
      tireMesh.rotation.z = Math.PI / 2;
      tireMesh.castShadow = true;
      wheelGroup.add(tireMesh);

      // Rim
      const rimGeo = new THREE.CylinderGeometry(radius * 0.65, radius * 0.65, width * 1.02, 16);
      const rimMesh = new THREE.Mesh(rimGeo, rimMat);
      rimMesh.rotation.z = Math.PI / 2;
      wheelGroup.add(rimMesh);

      // Gold center cap
      const capGeo = new THREE.CylinderGeometry(radius * 0.22, radius * 0.22, width * 1.05, 12);
      const capMesh = new THREE.Mesh(capGeo, goldMat);
      capMesh.rotation.z = Math.PI / 2;
      wheelGroup.add(capMesh);

      return wheelGroup;
    };

    // 8. Vehicle Assembly Group
    const carGroup = new THREE.Group();
    carGroupRef.current = carGroup;

    // Normalizing type
    const normalizedType = vehicleId.toLowerCase();

    // -------------------------------------------------------------
    // BUILD VEHICLE MODELS ACCORDING TO REAL FLEET SPECS
    // -------------------------------------------------------------
    if (normalizedType.includes("hatchback")) {
      // ===== 1. HATCHBACK (Maruti Alto, Swift, WagonR) =====
      // Compact length ~3.4, agile rounded body, rear hatch spoiler
      const bodyWidth = 1.6;
      const bodyLength = 3.3;
      const wheelRadius = 0.32;
      const wheelWidth = 0.24;

      // Lower Chassis
      const lowerBodyGeo = new THREE.BoxGeometry(bodyLength, 0.5, bodyWidth);
      const lowerBody = new THREE.Mesh(lowerBodyGeo, bodyPaint);
      lowerBody.position.set(0, 0.45, 0);
      lowerBody.castShadow = true;
      carGroup.add(lowerBody);

      // Front Hood Sloped Wedge
      const hoodGeo = new THREE.BoxGeometry(1.0, 0.35, bodyWidth * 0.96);
      const hood = new THREE.Mesh(hoodGeo, bodyPaint);
      hood.position.set(1.15, 0.55, 0);
      hood.rotation.z = -0.08;
      hood.castShadow = true;
      carGroup.add(hood);

      // Cabin / Greenhouse (Compact 2-row)
      const cabinGeo = new THREE.BoxGeometry(1.8, 0.55, bodyWidth * 0.88);
      const cabin = new THREE.Mesh(cabinGeo, glassMat);
      cabin.position.set(-0.15, 0.95, 0);
      cabin.castShadow = true;
      carGroup.add(cabin);

      // Hatchback Roof
      const roofGeo = new THREE.BoxGeometry(1.7, 0.08, bodyWidth * 0.86);
      const roof = new THREE.Mesh(roofGeo, bodyPaint);
      roof.position.set(-0.15, 1.25, 0);
      carGroup.add(roof);

      // Rear Roof Spoiler
      const spoilerGeo = new THREE.BoxGeometry(0.3, 0.06, bodyWidth * 0.88);
      const spoiler = new THREE.Mesh(spoilerGeo, bodyPaint);
      spoiler.position.set(-1.05, 1.26, 0);
      carGroup.add(spoiler);

      // Front Headlights
      const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.25), headlightMat);
      hlLeft.position.set(1.65, 0.55, 0.55);
      const hlRight = hlLeft.clone();
      hlRight.position.z = -0.55;
      carGroup.add(hlLeft, hlRight);

      // Rear Taillights
      const tlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.22, 0.15), taillightMat);
      tlLeft.position.set(-1.65, 0.65, 0.62);
      const tlRight = tlLeft.clone();
      tlRight.position.z = -0.62;
      carGroup.add(tlLeft, tlRight);

      // Odisha Yellow Plates
      const frontPlate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.1, 0.35), yellowPlateMat);
      frontPlate.position.set(1.68, 0.35, 0);
      const rearPlate = frontPlate.clone();
      rearPlate.position.set(-1.68, 0.35, 0);
      carGroup.add(frontPlate, rearPlate);

      // 4 Wheels
      const trackWidth = bodyWidth * 0.48;
      const frontWLeft = createWheel(wheelRadius, wheelWidth);
      frontWLeft.position.set(1.0, wheelRadius, trackWidth);
      const frontWRight = createWheel(wheelRadius, wheelWidth);
      frontWRight.position.set(1.0, wheelRadius, -trackWidth);
      const rearWLeft = createWheel(wheelRadius, wheelWidth);
      rearWLeft.position.set(-1.0, wheelRadius, trackWidth);
      const rearWRight = createWheel(wheelRadius, wheelWidth);
      rearWRight.position.set(-1.0, wheelRadius, -trackWidth);
      carGroup.add(frontWLeft, frontWRight, rearWLeft, rearWRight);
    } else if (normalizedType.includes("suv") && !normalizedType.includes("large")) {
      // ===== 2. SUV (Mahindra Bolero, Scorpio, Maruti Brezza) =====
      // High ground clearance, squared muscular hood, roof rails
      const bodyWidth = 1.75;
      const bodyLength = 3.9;
      const wheelRadius = 0.4;
      const wheelWidth = 0.28;

      // Higher ride chassis
      const lowerBodyGeo = new THREE.BoxGeometry(bodyLength, 0.6, bodyWidth);
      const lowerBody = new THREE.Mesh(lowerBodyGeo, bodyPaint);
      lowerBody.position.set(0, 0.65, 0);
      lowerBody.castShadow = true;
      carGroup.add(lowerBody);

      // Front Muscular Square Hood
      const hoodGeo = new THREE.BoxGeometry(1.2, 0.45, bodyWidth * 0.98);
      const hood = new THREE.Mesh(hoodGeo, bodyPaint);
      hood.position.set(1.35, 0.8, 0);
      hood.castShadow = true;
      carGroup.add(hood);

      // Bold Front Grille + Skid Plate
      const grilleGeo = new THREE.BoxGeometry(0.1, 0.35, bodyWidth * 0.75);
      const grille = new THREE.Mesh(grilleGeo, chromeMat);
      grille.position.set(1.96, 0.68, 0);
      const skidPlate = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.12, bodyWidth * 0.7), chromeMat);
      skidPlate.position.set(1.85, 0.38, 0);
      carGroup.add(grille, skidPlate);

      // SUV Cabin (Boxy & High)
      const cabinGeo = new THREE.BoxGeometry(2.3, 0.68, bodyWidth * 0.88);
      const cabin = new THREE.Mesh(cabinGeo, glassMat);
      cabin.position.set(-0.25, 1.25, 0);
      cabin.castShadow = true;
      carGroup.add(cabin);

      // SUV Roof
      const roofGeo = new THREE.BoxGeometry(2.25, 0.08, bodyWidth * 0.86);
      const roof = new THREE.Mesh(roofGeo, bodyPaint);
      roof.position.set(-0.25, 1.6, 0);
      carGroup.add(roof);

      // Rugged Roof Rails (Chrome Bars)
      const railLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.9, 8), chromeMat);
      railLeft.rotation.z = Math.PI / 2;
      railLeft.position.set(-0.25, 1.68, 0.62);
      const railRight = railLeft.clone();
      railRight.position.z = -0.62;
      carGroup.add(railLeft, railRight);

      // Headlights
      const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.18, 0.32), headlightMat);
      hlLeft.position.set(1.92, 0.8, 0.62);
      const hlRight = hlLeft.clone();
      hlRight.position.z = -0.62;
      carGroup.add(hlLeft, hlRight);

      // Rear Taillights (Vertical Pillars)
      const tlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.45, 0.16), taillightMat);
      tlLeft.position.set(-1.95, 0.95, 0.72);
      const tlRight = tlLeft.clone();
      tlRight.position.z = -0.72;
      carGroup.add(tlLeft, tlRight);

      // Odisha Yellow Plates
      const frontPlate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.4), yellowPlateMat);
      frontPlate.position.set(1.98, 0.42, 0);
      const rearPlate = frontPlate.clone();
      rearPlate.position.set(-1.98, 0.45, 0);
      carGroup.add(frontPlate, rearPlate);

      // 4 SUV Heavy Wheels
      const trackWidth = bodyWidth * 0.52;
      const frontWLeft = createWheel(wheelRadius, wheelWidth);
      frontWLeft.position.set(1.2, wheelRadius, trackWidth);
      const frontWRight = createWheel(wheelRadius, wheelWidth);
      frontWRight.position.set(1.2, wheelRadius, -trackWidth);
      const rearWLeft = createWheel(wheelRadius, wheelWidth);
      rearWLeft.position.set(-1.2, wheelRadius, trackWidth);
      const rearWRight = createWheel(wheelRadius, wheelWidth);
      rearWRight.position.set(-1.2, wheelRadius, -trackWidth);
      carGroup.add(frontWLeft, frontWRight, rearWLeft, rearWRight);
    } else if (normalizedType.includes("large")) {
      // ===== 3. LARGE CAR / MPV (Toyota Innova Crysta, Kia Carens, Maruti Ertiga) =====
      // Extended wheelbase ~4.5, 3-row panoramic cabin, aerodynamic sloping hood, captain seating profile
      const bodyWidth = 1.8;
      const bodyLength = 4.4;
      const wheelRadius = 0.36;
      const wheelWidth = 0.26;

      // Lower Chassis
      const lowerBodyGeo = new THREE.BoxGeometry(bodyLength, 0.58, bodyWidth);
      const lowerBody = new THREE.Mesh(lowerBodyGeo, bodyPaint);
      lowerBody.position.set(0, 0.55, 0);
      lowerBody.castShadow = true;
      carGroup.add(lowerBody);

      // Sloping Aerodynamic Front Nose
      const hoodGeo = new THREE.BoxGeometry(1.3, 0.42, bodyWidth * 0.96);
      const hood = new THREE.Mesh(hoodGeo, bodyPaint);
      hood.position.set(1.55, 0.65, 0);
      hood.rotation.z = -0.12;
      hood.castShadow = true;
      carGroup.add(hood);

      // Chrome Front Shield Grille
      const grilleGeo = new THREE.BoxGeometry(0.08, 0.38, bodyWidth * 0.82);
      const grille = new THREE.Mesh(grilleGeo, chromeMat);
      grille.position.set(2.21, 0.52, 0);
      carGroup.add(grille);

      // 3-Row Long Panoramic Cabin
      const cabinGeo = new THREE.BoxGeometry(2.8, 0.64, bodyWidth * 0.88);
      const cabin = new THREE.Mesh(cabinGeo, glassMat);
      cabin.position.set(-0.35, 1.15, 0);
      cabin.castShadow = true;
      carGroup.add(cabin);

      // Long Roof with Chrome Rails
      const roofGeo = new THREE.BoxGeometry(2.75, 0.08, bodyWidth * 0.85);
      const roof = new THREE.Mesh(roofGeo, bodyPaint);
      roof.position.set(-0.35, 1.48, 0);
      carGroup.add(roof);

      const railLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 2.3, 8), chromeMat);
      railLeft.rotation.z = Math.PI / 2;
      railLeft.position.set(-0.35, 1.55, 0.65);
      const railRight = railLeft.clone();
      railRight.position.z = -0.65;
      carGroup.add(railLeft, railRight);

      // Dual Projector Headlights
      const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 0.32), headlightMat);
      hlLeft.position.set(2.18, 0.65, 0.65);
      const hlRight = hlLeft.clone();
      hlRight.position.z = -0.65;
      carGroup.add(hlLeft, hlRight);

      // Wraparound Rear Taillights
      const tlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.35, 0.22), taillightMat);
      tlLeft.position.set(-2.2, 0.85, 0.72);
      const tlRight = tlLeft.clone();
      tlRight.position.z = -0.72;
      carGroup.add(tlLeft, tlRight);

      // Odisha Yellow Plates
      const frontPlate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.4), yellowPlateMat);
      frontPlate.position.set(2.23, 0.38, 0);
      const rearPlate = frontPlate.clone();
      rearPlate.position.set(-2.23, 0.42, 0);
      carGroup.add(frontPlate, rearPlate);

      // 4 Wheels
      const trackWidth = bodyWidth * 0.5;
      const frontWLeft = createWheel(wheelRadius, wheelWidth);
      frontWLeft.position.set(1.4, wheelRadius, trackWidth);
      const frontWRight = createWheel(wheelRadius, wheelWidth);
      frontWRight.position.set(1.4, wheelRadius, -trackWidth);
      const rearWLeft = createWheel(wheelRadius, wheelWidth);
      rearWLeft.position.set(-1.4, wheelRadius, trackWidth);
      const rearWRight = createWheel(wheelRadius, wheelWidth);
      rearWRight.position.set(-1.4, wheelRadius, -trackWidth);
      carGroup.add(frontWLeft, frontWRight, rearWLeft, rearWRight);
    } else if (normalizedType.includes("mini") || normalizedType.includes("bus") || normalizedType.includes("traveller")) {
      // ===== 4. MINI BUS / TEMPO TRAVELLER (Force Urbania, Tempo Traveller) =====
      // High roof van, length ~5.4, height ~2.2, 5 panoramic windows, roof AC pod
      const bodyWidth = 1.95;
      const bodyLength = 5.2;
      const wheelRadius = 0.42;
      const wheelWidth = 0.3;

      // Lower Van Body
      const lowerBodyGeo = new THREE.BoxGeometry(bodyLength, 0.9, bodyWidth);
      const lowerBody = new THREE.Mesh(lowerBodyGeo, bodyPaint);
      lowerBody.position.set(0, 0.8, 0);
      lowerBody.castShadow = true;
      carGroup.add(lowerBody);

      // Sloped High Van Front Cab
      const cabGeo = new THREE.BoxGeometry(1.2, 0.75, bodyWidth * 0.96);
      const cab = new THREE.Mesh(cabGeo, bodyPaint);
      cab.position.set(2.0, 0.95, 0);
      cab.rotation.z = -0.06;
      cab.castShadow = true;
      carGroup.add(cab);

      // High Roof Passenger Greenhouse (Extensive Windows)
      const cabinGeo = new THREE.BoxGeometry(3.8, 0.85, bodyWidth * 0.9);
      const cabin = new THREE.Mesh(cabinGeo, glassMat);
      cabin.position.set(-0.35, 1.65, 0);
      cabin.castShadow = true;
      carGroup.add(cabin);

      // High Roof Shell
      const roofGeo = new THREE.BoxGeometry(3.9, 0.16, bodyWidth * 0.92);
      const roof = new THREE.Mesh(roofGeo, bodyPaint);
      roof.position.set(-0.35, 2.12, 0);
      carGroup.add(roof);

      // Dual Roof-Mounted AC Compressor Unit Pod
      const acUnitGeo = new THREE.BoxGeometry(1.6, 0.22, bodyWidth * 0.6);
      const acUnit = new THREE.Mesh(acUnitGeo, chromeMat);
      acUnit.position.set(-0.2, 2.28, 0);
      carGroup.add(acUnit);

      // Large Chrome Commercial Grille
      const grilleGeo = new THREE.BoxGeometry(0.1, 0.5, bodyWidth * 0.85);
      const grille = new THREE.Mesh(grilleGeo, chromeMat);
      grille.position.set(2.62, 0.75, 0);
      carGroup.add(grille);

      // Headlights (Dual Vertical Stacks)
      const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.35, 0.3), headlightMat);
      hlLeft.position.set(2.58, 0.85, 0.72);
      const hlRight = hlLeft.clone();
      hlRight.position.z = -0.72;
      carGroup.add(hlLeft, hlRight);

      // Rear Commercial Taillights
      const tlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.6, 0.18), taillightMat);
      tlLeft.position.set(-2.62, 1.1, 0.78);
      const tlRight = tlLeft.clone();
      tlRight.position.z = -0.78;
      carGroup.add(tlLeft, tlRight);

      // Odisha Yellow Commercial Plates
      const frontPlate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.14, 0.48), yellowPlateMat);
      frontPlate.position.set(2.64, 0.45, 0);
      const rearPlate = frontPlate.clone();
      rearPlate.position.set(-2.64, 0.48, 0);
      carGroup.add(frontPlate, rearPlate);

      // 4 Heavy-duty Wheels
      const trackWidth = bodyWidth * 0.52;
      const frontWLeft = createWheel(wheelRadius, wheelWidth);
      frontWLeft.position.set(1.65, wheelRadius, trackWidth);
      const frontWRight = createWheel(wheelRadius, wheelWidth);
      frontWRight.position.set(1.65, wheelRadius, -trackWidth);
      const rearWLeft = createWheel(wheelRadius, wheelWidth);
      rearWLeft.position.set(-1.65, wheelRadius, trackWidth);
      const rearWRight = createWheel(wheelRadius, wheelWidth);
      rearWRight.position.set(-1.65, wheelRadius, -trackWidth);
      carGroup.add(frontWLeft, frontWRight, rearWLeft, rearWRight);
    } else {
      // ===== 5. SEDAN (DEFAULT / STANDARD) (Swift Dzire, Toyota Etios, Honda Amaze) =====
      // Classic 3-box sedan profile, sleek hood, low boot, elegant executive stance
      const bodyWidth = 1.7;
      const bodyLength = 4.2;
      const wheelRadius = 0.34;
      const wheelWidth = 0.25;

      // Lower Chassis
      const lowerBodyGeo = new THREE.BoxGeometry(bodyLength, 0.52, bodyWidth);
      const lowerBody = new THREE.Mesh(lowerBodyGeo, bodyPaint);
      lowerBody.position.set(0, 0.5, 0);
      lowerBody.castShadow = true;
      carGroup.add(lowerBody);

      // Elegant Front Hood (Engine Bay)
      const hoodGeo = new THREE.BoxGeometry(1.25, 0.38, bodyWidth * 0.96);
      const hood = new THREE.Mesh(hoodGeo, bodyPaint);
      hood.position.set(1.4, 0.6, 0);
      hood.rotation.z = -0.09;
      hood.castShadow = true;
      carGroup.add(hood);

      // Distinct Extended Rear Boot (Luggage Deck for 3 bags)
      const bootGeo = new THREE.BoxGeometry(0.9, 0.36, bodyWidth * 0.94);
      const boot = new THREE.Mesh(bootGeo, bodyPaint);
      boot.position.set(-1.6, 0.6, 0);
      boot.rotation.z = 0.05;
      boot.castShadow = true;
      carGroup.add(boot);

      // Executive Cabin (Swept-back aerodynamic glass)
      const cabinGeo = new THREE.BoxGeometry(2.1, 0.58, bodyWidth * 0.88);
      const cabin = new THREE.Mesh(cabinGeo, glassMat);
      cabin.position.set(-0.1, 1.05, 0);
      cabin.castShadow = true;
      carGroup.add(cabin);

      // Roof
      const roofGeo = new THREE.BoxGeometry(1.9, 0.08, bodyWidth * 0.86);
      const roof = new THREE.Mesh(roofGeo, bodyPaint);
      roof.position.set(-0.1, 1.35, 0);
      carGroup.add(roof);

      // Chrome Front Radiator Grille
      const grilleGeo = new THREE.BoxGeometry(0.08, 0.32, bodyWidth * 0.8);
      const grille = new THREE.Mesh(grilleGeo, chromeMat);
      grille.position.set(2.11, 0.48, 0);
      carGroup.add(grille);

      // Projector Headlights
      const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.14, 0.3), headlightMat);
      hlLeft.position.set(2.08, 0.6, 0.58);
      const hlRight = hlLeft.clone();
      hlRight.position.z = -0.58;
      carGroup.add(hlLeft, hlRight);

      // Rear Taillights
      const tlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.2, 0.22), taillightMat);
      tlLeft.position.set(-2.1, 0.68, 0.65);
      const tlRight = tlLeft.clone();
      tlRight.position.z = -0.65;
      carGroup.add(tlLeft, tlRight);

      // Odisha Yellow Commercial Plates
      const frontPlate = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.38), yellowPlateMat);
      frontPlate.position.set(2.13, 0.35, 0);
      const rearPlate = frontPlate.clone();
      rearPlate.position.set(-2.13, 0.38, 0);
      carGroup.add(frontPlate, rearPlate);

      // 4 Wheels
      const trackWidth = bodyWidth * 0.49;
      const frontWLeft = createWheel(wheelRadius, wheelWidth);
      frontWLeft.position.set(1.3, wheelRadius, trackWidth);
      const frontWRight = createWheel(wheelRadius, wheelWidth);
      frontWRight.position.set(1.3, wheelRadius, -trackWidth);
      const rearWLeft = createWheel(wheelRadius, wheelWidth);
      rearWLeft.position.set(-1.3, wheelRadius, trackWidth);
      const rearWRight = createWheel(wheelRadius, wheelWidth);
      rearWRight.position.set(-1.3, wheelRadius, -trackWidth);
      carGroup.add(frontWLeft, frontWRight, rearWLeft, rearWRight);
    }

    // Add car to scene
    scene.add(carGroup);

    // Initial angle (3/4 Isometric Perspective)
    carGroup.rotation.y = Math.PI * 0.28;

    // -------------------------------------------------------------
    // INTERACTION HANDLING (Mouse Drag / Touch Rotate)
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

      // Auto-rotation when not user-dragging
      if (autoRotate && !isDragging) {
        targetRotationY += 0.0035;
      }

      // Smooth damping interpolation
      carGroup.rotation.y += (targetRotationY - carGroup.rotation.y) * 0.08;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = typeof height === "number" ? height : container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount or type change
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

  // Fast angle preset buttons
  const setAngle = (angle: "iso" | "front" | "side" | "rear") => {
    setCurrentAngle(angle);
    if (!carGroupRef.current) return;
    const angles = {
      iso: Math.PI * 0.28,
      front: Math.PI * 0.5,
      side: 0,
      rear: Math.PI * 1.5,
    };
    carGroupRef.current.rotation.y = angles[angle];
  };

  return (
    <div className={`relative w-full overflow-hidden select-none group/3d ${className}`}>
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full cursor-grab active:cursor-grabbing flex items-center justify-center"
        style={{ height: typeof height === "number" ? `${height}px` : height }}
      />

      {/* Floating 3D Badge */}
      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[9.5px] font-bold shadow-md pointer-events-none">
        <RotateCw className="w-3 h-3 text-[#D9A52B] animate-spin" style={{ animationDuration: "10s" }} />
        <span>3D Studio Turntable</span>
      </div>

      {/* Drag Hint (Fades out when interacting) */}
      <div
        className={`absolute bottom-2.5 inset-x-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
          isInteracting ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] text-white/90 shadow-sm">
          <Eye className="w-3 h-3 text-[#D9A52B]" />
          <span>Drag to rotate 360°</span>
        </div>
      </div>

      {/* Angle Presets (Visible on hover) */}
      <div className="absolute top-2.5 right-2.5 flex items-center gap-1 opacity-0 group-hover/3d:opacity-100 transition-opacity">
        <button
          type="button"
          onClick={() => setAngle("iso")}
          className={`px-2 py-0.5 rounded-md text-[9px] font-bold backdrop-blur-md border transition cursor-pointer ${
            currentAngle === "iso"
              ? "bg-[#D9A52B] text-[#062F31] border-[#D9A52B]"
              : "bg-black/50 text-white/80 border-white/20 hover:text-white"
          }`}
        >
          3D
        </button>
        <button
          type="button"
          onClick={() => setAngle("side")}
          className={`px-2 py-0.5 rounded-md text-[9px] font-bold backdrop-blur-md border transition cursor-pointer ${
            currentAngle === "side"
              ? "bg-[#D9A52B] text-[#062F31] border-[#D9A52B]"
              : "bg-black/50 text-white/80 border-white/20 hover:text-white"
          }`}
        >
          Side
        </button>
        <button
          type="button"
          onClick={() => setAngle("front")}
          className={`px-2 py-0.5 rounded-md text-[9px] font-bold backdrop-blur-md border transition cursor-pointer ${
            currentAngle === "front"
              ? "bg-[#D9A52B] text-[#062F31] border-[#D9A52B]"
              : "bg-black/50 text-white/80 border-white/20 hover:text-white"
          }`}
        >
          Front
        </button>
      </div>
    </div>
  );
};
