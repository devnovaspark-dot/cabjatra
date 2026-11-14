"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export type TimeOfDay = "sunrise" | "day" | "sunset" | "night";
export type OdishaLocationId = "marine-drive" | "puri-dham" | "konark" | "chilika" | "airport";

interface Hero3DEnvironmentProps {
  timeOfDay: TimeOfDay;
  activeLocationId: OdishaLocationId;
}

/**
 * Photorealistic 3D Highway & Odisha Coastal Environment using Three.js
 * Features:
 * 1. Cinematic 3/4 front beauty tracking angle (sleek executive commercial sedan with
 *    chrome grille, projector LED headlamps, metallic paint reflections, spinning alloy wheels).
 * 2. Morphing environment featuring Odisha's iconic locations:
 *    - Marine Drive: Ocean surf waves, sand dunes, coastal breeze, lighthouse.
 *    - Puri Dham: Sacred Jagannath Temple shikhara with fluttering Patitapabana flag.
 *    - Konark: Colossal 13th-century stone chariot wheel with 8 carved spokes.
 *    - Chilika Lagoon: Serene water ripples, traditional wooden boats, jumping dolphins.
 *    - BBI Airport: Modern highway gantry, sleek streetlights, expressway infrastructure.
 * 3. Grounded 3D coconut palms & casuarina pines with wind-fluttering leaves (100% stationary trunks).
 * 4. Automatic real-time celestial lighting (Day, Sunset, Night with 1,400 twinkling stars & glowing moon, Sunrise).
 * 5. Upper 30% of viewport remains serene open sky (zero collision with navbar).
 * 6. Smooth 60 FPS animation loop with delta-time and interactive mouse parallax.
 */
export const Hero3DEnvironment: React.FC<Hero3DEnvironmentProps> = ({
  timeOfDay,
  activeLocationId,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<OdishaLocationId>(activeLocationId);

  // Keep locationRef updated without triggering full WebGL teardown/rebuild
  useEffect(() => {
    locationRef.current = activeLocationId;
  }, [activeLocationId]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();

    // =========================================================================
    // 1. THEME LIGHTING CONFIGURATION
    // =========================================================================
    const THEME_CONFIG = {
      sunrise: {
        skyTop: 0x1a1638,
        skyBottom: 0xc45e12,
        fogColor: 0x8a4522,
        ambientColor: 0x8a523a,
        ambientIntensity: 1.4,
        sunColor: 0xffa858,
        sunIntensity: 3.4,
        sunPos: new THREE.Vector3(24, 18, -60),
        showSun: true,
        showMoon: false,
        showStars: false,
        headlightIntensity: 2.2,
        roadTone: 0x221817,
      },
      day: {
        skyTop: 0x063a40,
        skyBottom: 0x0c575e,
        fogColor: 0x0a4a50,
        ambientColor: 0xe0f2fe,
        ambientIntensity: 1.7,
        sunColor: 0xfffbeb,
        sunIntensity: 3.8,
        sunPos: new THREE.Vector3(26, 28, -65),
        showSun: true,
        showMoon: false,
        showStars: false,
        headlightIntensity: 1.0,
        roadTone: 0x1b2326,
      },
      sunset: {
        skyTop: 0x1b112c,
        skyBottom: 0xb54308,
        fogColor: 0x732813,
        ambientColor: 0x7d3725,
        ambientIntensity: 1.5,
        sunColor: 0xf97316,
        sunIntensity: 3.6,
        sunPos: new THREE.Vector3(20, 14, -55),
        showSun: true,
        showMoon: false,
        showStars: false,
        headlightIntensity: 2.6,
        roadTone: 0x241614,
      },
      night: {
        skyTop: 0x01080d,
        skyBottom: 0x041922,
        fogColor: 0x03141c,
        ambientColor: 0x0d2e3d,
        ambientIntensity: 0.95,
        sunColor: 0x93c5fd,
        sunIntensity: 1.4,
        sunPos: new THREE.Vector3(24, 25, -55),
        showSun: false,
        showMoon: true,
        showStars: true,
        headlightIntensity: 5.2,
        roadTone: 0x0e1518,
      },
    }[timeOfDay];

    scene.fog = new THREE.FogExp2(THEME_CONFIG.fogColor, 0.011);

    // Procedural Atmospheric Sky Background
    const skyCanvas = document.createElement("canvas");
    skyCanvas.width = 16;
    skyCanvas.height = 512;
    const skyCtx = skyCanvas.getContext("2d");
    if (skyCtx) {
      const grad = skyCtx.createLinearGradient(0, 0, 0, 512);
      const topColorStr = `#${THEME_CONFIG.skyTop.toString(16).padStart(6, "0")}`;
      const bottomColorStr = `#${THEME_CONFIG.skyBottom.toString(16).padStart(6, "0")}`;
      const fogColorStr = `#${THEME_CONFIG.fogColor.toString(16).padStart(6, "0")}`;
      grad.addColorStop(0, topColorStr);
      grad.addColorStop(0.58, bottomColorStr);
      grad.addColorStop(1, fogColorStr);
      skyCtx.fillStyle = grad;
      skyCtx.fillRect(0, 0, 16, 512);
    }
    const skyTexture = new THREE.CanvasTexture(skyCanvas);
    scene.background = skyTexture;

    // =========================================================================
    // 2. CAMERA (AUTOMOTIVE 3/4 FRONT BEAUTY ANGLE)
    // Framed with the car on the right side and wide open horizon on the left.
    // =========================================================================
    const camera = new THREE.PerspectiveCamera(44, width / height, 0.1, 400);
    const cameraBasePos = new THREE.Vector3(3.2, 1.85, 4.4);
    const cameraTarget = new THREE.Vector3(-0.4, 1.05, -3.8);
    camera.position.copy(cameraBasePos);
    camera.lookAt(cameraTarget);

    // =========================================================================
    // 3. RENDERER
    // =========================================================================
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.28;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.pointerEvents = "none";

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // =========================================================================
    // 4. LIGHTING RIG
    // =========================================================================
    const ambientLight = new THREE.AmbientLight(
      THEME_CONFIG.ambientColor,
      THEME_CONFIG.ambientIntensity
    );
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(
      THEME_CONFIG.sunColor,
      THEME_CONFIG.sunIntensity
    );
    mainLight.position.copy(THEME_CONFIG.sunPos);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 130;
    mainLight.shadow.camera.left = -22;
    mainLight.shadow.camera.right = 22;
    mainLight.shadow.camera.top = 22;
    mainLight.shadow.camera.bottom = -22;
    scene.add(mainLight);

    // Coastal Marine Rim Light
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.6);
    rimLight.position.set(-18, 9, 8);
    scene.add(rimLight);

    // Underbody Warm Gold Fill (CabJatra Golden Signature)
    const goldUnderLight = new THREE.DirectionalLight(0xd9a52b, 0.85);
    goldUnderLight.position.set(0, -2, 2);
    scene.add(goldUnderLight);

    // =========================================================================
    // 5. CELESTIAL ELEMENTS (SUN / MOON / STARS)
    // =========================================================================
    if (THEME_CONFIG.showStars) {
      const starGeo = new THREE.BufferGeometry();
      const starCount = 1400;
      const starPositions = new Float32Array(starCount * 3);
      const starColors = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount; i++) {
        const x = (Math.random() - 0.5) * 260;
        const y = Math.random() * 80 + 12;
        const z = -Math.random() * 150 - 20;
        starPositions[i * 3] = x;
        starPositions[i * 3 + 1] = y;
        starPositions[i * 3 + 2] = z;

        const tint = Math.random();
        if (tint > 0.8) {
          starColors[i * 3] = 1.0;
          starColors[i * 3 + 1] = 0.88;
          starColors[i * 3 + 2] = 0.65;
        } else if (tint > 0.4) {
          starColors[i * 3] = 0.8;
          starColors[i * 3 + 1] = 0.92;
          starColors[i * 3 + 2] = 1.0;
        } else {
          starColors[i * 3] = 1.0;
          starColors[i * 3 + 1] = 1.0;
          starColors[i * 3 + 2] = 1.0;
        }
      }
      starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
      starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

      const starMat = new THREE.PointsMaterial({
        size: 0.95,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        fog: false,
      });
      const starsPoints = new THREE.Points(starGeo, starMat);
      scene.add(starsPoints);
    }

    const orbGroup = new THREE.Group();
    orbGroup.position.copy(THEME_CONFIG.sunPos);

    if (THEME_CONFIG.showSun) {
      const sunCoreMat = new THREE.MeshBasicMaterial({ color: THEME_CONFIG.sunColor, fog: false });
      const sunCore = new THREE.Mesh(new THREE.SphereGeometry(3.2, 32, 32), sunCoreMat);
      orbGroup.add(sunCore);

      const coronaMat = new THREE.MeshBasicMaterial({
        color: THEME_CONFIG.sunColor,
        transparent: true,
        opacity: 0.38,
        fog: false,
      });
      const corona = new THREE.Mesh(new THREE.SphereGeometry(5.6, 24, 24), coronaMat);
      orbGroup.add(corona);
    } else if (THEME_CONFIG.showMoon) {
      const moonMat = new THREE.MeshBasicMaterial({ color: 0xfef9c3, fog: false });
      const moon = new THREE.Mesh(new THREE.SphereGeometry(3.0, 32, 32), moonMat);
      orbGroup.add(moon);

      const haloMat = new THREE.MeshBasicMaterial({
        color: 0x93c5fd,
        transparent: true,
        opacity: 0.25,
        fog: false,
      });
      const halo = new THREE.Mesh(new THREE.SphereGeometry(5.0, 24, 24), haloMat);
      orbGroup.add(halo);
    }
    scene.add(orbGroup);

    // Drifting Volumetric Clouds
    const cloudGroup = new THREE.Group();
    const cloudMat = new THREE.MeshStandardMaterial({
      color: timeOfDay === "night" ? 0x1e3a47 : timeOfDay === "sunset" ? 0xca7853 : 0xffffff,
      roughness: 0.95,
      metalness: 0.05,
      transparent: true,
      opacity: timeOfDay === "night" ? 0.35 : 0.65,
    });

    const clouds: THREE.Group[] = [];
    for (let c = 0; c < 6; c++) {
      const singleCloud = new THREE.Group();
      const puffs = 4 + Math.floor(Math.random() * 4);
      for (let p = 0; p < puffs; p++) {
        const r = 2.4 + Math.random() * 2.8;
        const puff = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 14), cloudMat);
        puff.position.set(
          (p - puffs / 2) * 2.6 + (Math.random() - 0.5) * 1.5,
          (Math.random() - 0.5) * 1.2,
          (Math.random() - 0.5) * 2.0
        );
        singleCloud.add(puff);
      }
      singleCloud.position.set(
        (c - 3) * 28 + (Math.random() - 0.5) * 10,
        18 + Math.random() * 8,
        -50 - Math.random() * 30
      );
      cloudGroup.add(singleCloud);
      clouds.push(singleCloud);
    }
    scene.add(cloudGroup);

    // =========================================================================
    // 6. HIGHWAY ROAD SURFACE & PAVEMENT
    // =========================================================================
    const ROAD_WIDTH = 7.6;
    const ROAD_LENGTH = 180;

    const roadMat = new THREE.MeshStandardMaterial({
      color: THEME_CONFIG.roadTone,
      roughness: 0.78,
      metalness: 0.14,
    });
    const roadGeo = new THREE.PlaneGeometry(ROAD_WIDTH, ROAD_LENGTH, 1, 60);
    const roadMesh = new THREE.Mesh(roadGeo, roadMat);
    roadMesh.rotation.x = -Math.PI / 2;
    roadMesh.position.set(0, 0, -40);
    roadMesh.receiveShadow = true;
    scene.add(roadMesh);

    // Shoulders
    const curbMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.9 });
    const leftCurb = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, ROAD_LENGTH), curbMat);
    leftCurb.position.set(-ROAD_WIDTH / 2 - 0.15, 0.05, -40);
    scene.add(leftCurb);

    const rightCurb = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, ROAD_LENGTH), curbMat);
    rightCurb.position.set(ROAD_WIDTH / 2 + 0.15, 0.05, -40);
    scene.add(rightCurb);

    // Solid Continuous White Shoulder Lines
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const leftLine = new THREE.Mesh(new THREE.PlaneGeometry(0.14, ROAD_LENGTH), lineMat);
    leftLine.rotation.x = -Math.PI / 2;
    leftLine.position.set(-ROAD_WIDTH / 2 + 0.35, 0.015, -40);
    scene.add(leftLine);

    const rightLine = new THREE.Mesh(new THREE.PlaneGeometry(0.14, ROAD_LENGTH), lineMat);
    rightLine.rotation.x = -Math.PI / 2;
    rightLine.position.set(ROAD_WIDTH / 2 - 0.35, 0.015, -40);
    scene.add(rightLine);

    // Moving Dashed Yellow Center Lane Dividers
    const yellowStripeMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
    const DASH_COUNT = 24;
    const DASH_LENGTH = 2.4;
    const DASH_GAP = 3.6;
    const centerDashes: THREE.Mesh[] = [];

    for (let i = 0; i < DASH_COUNT; i++) {
      const dash = new THREE.Mesh(
        new THREE.PlaneGeometry(0.18, DASH_LENGTH),
        yellowStripeMat
      );
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(0, 0.016, -i * (DASH_LENGTH + DASH_GAP));
      scene.add(dash);
      centerDashes.push(dash);
    }

    // Modern Highway Steel Guardrail (Right Shoulder Verge)
    const railMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.92,
      roughness: 0.22,
    });
    const guardrail = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.45, ROAD_LENGTH),
      railMat
    );
    guardrail.position.set(ROAD_WIDTH / 2 + 0.6, 0.5, -40);
    scene.add(guardrail);

    const postMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8 });
    for (let p = 0; p < 25; p++) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.65, 8), postMat);
      post.position.set(ROAD_WIDTH / 2 + 0.6, 0.28, -p * 6.5);
      scene.add(post);
    }

    // Retro-Reflective Amber Cat-Eye Studs along Road Shoulders
    const catEyeMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: timeOfDay === "night" ? 1.6 : 0.6,
      metalness: 0.3,
      roughness: 0.2,
    });
    for (let ce = 0; ce < 30; ce++) {
      const catEye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.08), catEyeMat);
      catEye.position.set(-ROAD_WIDTH / 2 + 0.45, 0.02, -ce * 5.2);
      scene.add(catEye);

      const catEyeRight = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.08), catEyeMat);
      catEyeRight.position.set(ROAD_WIDTH / 2 - 0.45, 0.02, -ce * 5.2);
      scene.add(catEyeRight);
    }

    // Golden Sand Dunes (Left Verge)
    const duneMat = new THREE.MeshStandardMaterial({
      color: timeOfDay === "sunset" ? 0x9a5822 : 0x78562c,
      roughness: 0.95,
      metalness: 0.02,
    });
    const duneGeo = new THREE.PlaneGeometry(16, ROAD_LENGTH, 16, 40);
    const posAttr = duneGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const u = posAttr.getX(i);
      const v = posAttr.getY(i);
      posAttr.setZ(i, Math.sin(u * 0.4) * 0.65 + Math.cos(v * 0.15) * 0.45);
    }
    duneGeo.computeVertexNormals();
    const duneMesh = new THREE.Mesh(duneGeo, duneMat);
    duneMesh.rotation.x = -Math.PI / 2;
    duneMesh.position.set(-ROAD_WIDTH / 2 - 8.2, -0.15, -40);
    duneMesh.receiveShadow = true;
    scene.add(duneMesh);

    // Bay of Bengal Ocean Surface (Left Horizon)
    const waterMat = new THREE.MeshStandardMaterial({
      color: timeOfDay === "night" ? 0x07222f : 0x0b545d,
      metalness: 0.9,
      roughness: 0.16,
    });
    const waterGeo = new THREE.PlaneGeometry(65, ROAD_LENGTH, 28, 40);
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.rotation.x = -Math.PI / 2;
    waterMesh.position.set(-ROAD_WIDTH / 2 - 44, -0.38, -40);
    scene.add(waterMesh);

    // Right Side Ground
    const rightTerrainMat = new THREE.MeshStandardMaterial({
      color: timeOfDay === "night" ? 0x051d1e : 0x073534,
      roughness: 0.92,
    });
    const rightTerrain = new THREE.Mesh(
      new THREE.PlaneGeometry(35, ROAD_LENGTH),
      rightTerrainMat
    );
    rightTerrain.rotation.x = -Math.PI / 2;
    rightTerrain.position.set(ROAD_WIDTH / 2 + 18, -0.05, -40);
    scene.add(rightTerrain);

    // =========================================================================
    // 7. REALISTIC 3D TREES WITH WIND-FLUTTERING LEAVES
    // Rooted trunks remain 100% stationary; only the fronds/foliage oscillate!
    // =========================================================================
    interface TreeRig {
      group: THREE.Group;
      leaves: THREE.Object3D[];
      type: "palm" | "casuarina";
      baseZ: number;
    }

    const treeRigs: TreeRig[] = [];

    const palmBarkMat = new THREE.MeshStandardMaterial({ color: 0x3d2719, roughness: 0.88 });
    const palmLeafMat = new THREE.MeshStandardMaterial({
      color: 0x0f5e55,
      roughness: 0.42,
      metalness: 0.08,
      side: THREE.DoubleSide,
    });
    const casuarinaBarkMat = new THREE.MeshStandardMaterial({ color: 0x271911, roughness: 0.92 });
    const casuarinaFoliageMat = new THREE.MeshStandardMaterial({ color: 0x0a4a44, roughness: 0.82 });

    const createPalmTree = (x: number, z: number, scale = 1.0) => {
      const treeGroup = new THREE.Group();
      treeGroup.position.set(x, 0, z);
      treeGroup.scale.set(scale, scale, scale);

      // Curved Smooth Rooted Trunk (Stationary)
      const trunkPoints: THREE.Vector3[] = [];
      const trunkHeight = 6.4;
      for (let i = 0; i <= 8; i++) {
        const t = i / 8;
        const curveX = Math.sin(t * Math.PI * 0.7) * 0.65;
        trunkPoints.push(new THREE.Vector3(curveX, t * trunkHeight, 0));
      }
      const trunkCurve = new THREE.CatmullRomCurve3(trunkPoints);
      const trunkGeo = new THREE.TubeGeometry(trunkCurve, 20, 0.22, 12, false);
      const trunkMesh = new THREE.Mesh(trunkGeo, palmBarkMat);
      trunkMesh.castShadow = true;
      treeGroup.add(trunkMesh);

      // Crown Coconuts
      const crownTop = trunkPoints[trunkPoints.length - 1];
      const nutMat = new THREE.MeshStandardMaterial({ color: 0x58310c, roughness: 0.8 });
      for (let n = 0; n < 4; n++) {
        const nut = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10), nutMat);
        nut.position.set(
          crownTop.x + (Math.random() - 0.5) * 0.35,
          crownTop.y - 0.25,
          crownTop.z + (Math.random() - 0.5) * 0.35
        );
        treeGroup.add(nut);
      }

      // Radiating 3D Palm Fronds
      const animatedFronds: THREE.Object3D[] = [];
      const FROND_COUNT = 8;
      for (let f = 0; f < FROND_COUNT; f++) {
        const frondPivot = new THREE.Group();
        frondPivot.position.copy(crownTop);

        const angle = (f / FROND_COUNT) * Math.PI * 2;
        frondPivot.rotation.y = angle;

        const stemCurve = new THREE.CubicBezierCurve3(
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(0, 0.45, 0.9),
          new THREE.Vector3(0, 0.2, 1.9),
          new THREE.Vector3(0, -0.65, 2.6)
        );
        const stemGeo = new THREE.TubeGeometry(stemCurve, 12, 0.04, 8, false);
        const stemMesh = new THREE.Mesh(stemGeo, palmBarkMat);
        frondPivot.add(stemMesh);

        // Curved organic leaf blade
        const bladeGeo = new THREE.PlaneGeometry(0.75, 2.3, 6, 10);
        const bladeMesh = new THREE.Mesh(bladeGeo, palmLeafMat);
        bladeMesh.rotation.x = Math.PI / 4;
        bladeMesh.position.set(0, -0.1, 1.35);
        bladeMesh.castShadow = true;
        frondPivot.add(bladeMesh);

        treeGroup.add(frondPivot);
        animatedFronds.push(frondPivot);
      }

      scene.add(treeGroup);
      treeRigs.push({ group: treeGroup, leaves: animatedFronds, type: "palm", baseZ: z });
    };

    const createCasuarinaTree = (x: number, z: number, scale = 1.0) => {
      const treeGroup = new THREE.Group();
      treeGroup.position.set(x, 0, z);
      treeGroup.scale.set(scale, scale, scale);

      const trunkGeo = new THREE.CylinderGeometry(0.14, 0.25, 7.6, 12);
      const trunk = new THREE.Mesh(trunkGeo, casuarinaBarkMat);
      trunk.position.y = 3.8;
      trunk.castShadow = true;
      treeGroup.add(trunk);

      const animatedTiers: THREE.Object3D[] = [];
      const TIERS = 4;
      for (let t = 0; t < TIERS; t++) {
        const tierHeight = 2.4 - t * 0.3;
        const tierRadius = 1.45 - t * 0.25;
        const coneGeo = new THREE.ConeGeometry(tierRadius, tierHeight, 14);
        const coneMesh = new THREE.Mesh(coneGeo, casuarinaFoliageMat);
        coneMesh.position.y = 3.8 + t * 1.5;
        coneMesh.castShadow = true;
        treeGroup.add(coneMesh);
        animatedTiers.push(coneMesh);
      }

      scene.add(treeGroup);
      treeRigs.push({ group: treeGroup, leaves: animatedTiers, type: "casuarina", baseZ: z });
    };

    // Plant roadside groves
    for (let i = 0; i < 9; i++) {
      const zPos = -i * 18 - 4;
      createPalmTree(-ROAD_WIDTH / 2 - 4.2 - (i % 2) * 1.8, zPos, 0.95 + (i % 3) * 0.15);
      createCasuarinaTree(ROAD_WIDTH / 2 + 3.4 + (i % 3) * 1.6, zPos - 6, 0.9 + (i % 2) * 0.2);
    }

    // =========================================================================
    // 8. PASSING AUTHENTIC INDIAN NATIONAL HIGHWAY MILESTONE PILLARS
    // =========================================================================
    interface MilestoneRig {
      mesh: THREE.Group;
      baseZ: number;
    }
    const milestones: MilestoneRig[] = [];

    const MILESTONE_DATA = [
      { code: "OD-SH", text: "Marine Drive", km: "35 KM" },
      { code: "NH 316", text: "Puri Dham", km: "60 KM" },
      { code: "NH 316A", text: "Konark", km: "65 KM" },
      { code: "NH 16", text: "Chilika", km: "105 KM" },
      { code: "BBI-AIR", text: "BBI Airport", km: "00 KM" },
    ];

    const createMilestoneMesh = (index: number, zPos: number) => {
      const data = MILESTONE_DATA[index % MILESTONE_DATA.length];
      const mGroup = new THREE.Group();
      mGroup.position.set(ROAD_WIDTH / 2 + 1.25, 0, zPos);

      const stoneGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.8, 16);
      const stoneMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85 });
      const stone = new THREE.Mesh(stoneGeo, stoneMat);
      stone.position.y = 0.4;
      stone.castShadow = true;
      mGroup.add(stone);

      const domeGeo = new THREE.SphereGeometry(0.24, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
      const yellowDomeMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.4 });
      const dome = new THREE.Mesh(domeGeo, yellowDomeMat);
      dome.position.y = 0.8;
      mGroup.add(dome);

      const mCanvas = document.createElement("canvas");
      mCanvas.width = 128;
      mCanvas.height = 128;
      const mCtx = mCanvas.getContext("2d");
      if (mCtx) {
        mCtx.fillStyle = "#ffffff";
        mCtx.fillRect(0, 0, 128, 128);
        mCtx.fillStyle = "#0f172a";
        mCtx.font = "bold 20px sans-serif";
        mCtx.textAlign = "center";
        mCtx.fillText(data.code, 64, 38);
        mCtx.font = "bold 22px sans-serif";
        mCtx.fillText(data.text, 64, 75);
        mCtx.fillStyle = "#b91c1c";
        mCtx.font = "bold 24px sans-serif";
        mCtx.fillText(data.km, 64, 110);
      }
      const labelTexture = new THREE.CanvasTexture(mCanvas);
      const labelMat = new THREE.MeshBasicMaterial({ map: labelTexture, transparent: true });
      const labelMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.35), labelMat);
      labelMesh.rotation.y = -Math.PI / 2;
      labelMesh.position.set(-0.25, 0.45, 0);
      mGroup.add(labelMesh);

      scene.add(mGroup);
      milestones.push({ mesh: mGroup, baseZ: zPos });
    };

    for (let m = 0; m < 5; m++) {
      createMilestoneMesh(m, -m * 32 - 10);
    }

    // =========================================================================
    // 9. LOCATION-SPECIFIC 3D ODISHA ENVIRONMENTS (MORPHING & DYNAMIC)
    // =========================================================================
    const stoneMaterial = new THREE.MeshStandardMaterial({
      color: 0x3d3935,
      roughness: 0.9,
      metalness: 0.1,
    });
    const goldOrnamentMat = new THREE.MeshStandardMaterial({
      color: 0xd9a52b,
      metalness: 0.85,
      roughness: 0.25,
    });

    // --- A. PURI DHAM (JAGANNATH TEMPLE) ---
    const puriGroup = new THREE.Group();
    puriGroup.position.set(-22, 0, -68);

    const shikharaGeo = new THREE.ConeGeometry(5.8, 18, 12);
    const shikhara = new THREE.Mesh(shikharaGeo, stoneMaterial);
    shikhara.position.y = 9;
    puriGroup.add(shikhara);

    const amalaka = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.4, 0.9, 16), goldOrnamentMat);
    amalaka.position.y = 18.2;
    puriGroup.add(amalaka);

    const kalasha = new THREE.Mesh(new THREE.SphereGeometry(0.8, 14, 14), goldOrnamentMat);
    kalasha.position.y = 19.3;
    puriGroup.add(kalasha);

    const flagGeo = new THREE.PlaneGeometry(2.4, 1.4);
    const flagMat = new THREE.MeshStandardMaterial({ color: 0xea580c, side: THREE.DoubleSide });
    const flagMesh = new THREE.Mesh(flagGeo, flagMat);
    flagMesh.position.set(1.2, 19.5, 0);
    puriGroup.add(flagMesh);
    scene.add(puriGroup);

    // --- B. KONARK SUN TEMPLE (CHARIOT WHEEL) ---
    const konarkGroup = new THREE.Group();
    konarkGroup.position.set(-20, 4.5, -62);

    const rimTorus = new THREE.Mesh(new THREE.TorusGeometry(6.2, 0.45, 16, 40), stoneMaterial);
    konarkGroup.add(rimTorus);

    const hubMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 1.1, 16), goldOrnamentMat);
    hubMesh.rotation.x = Math.PI / 2;
    konarkGroup.add(hubMesh);

    for (let s = 0; s < 8; s++) {
      const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 5.8, 8), stoneMaterial);
      sp.rotation.z = (s / 8) * Math.PI * 2;
      konarkGroup.add(sp);
    }
    scene.add(konarkGroup);

    // --- C. MARINE DRIVE LIGHTHOUSE ---
    const marineDriveGroup = new THREE.Group();
    marineDriveGroup.position.set(-26, 0, -58);

    const lighthouseTower = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 2.0, 14, 16),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.6 })
    );
    lighthouseTower.position.y = 7;
    marineDriveGroup.add(lighthouseTower);

    // Red stripes
    const redStripe = new THREE.Mesh(
      new THREE.CylinderGeometry(1.45, 1.65, 3.2, 16),
      new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.6 })
    );
    redStripe.position.y = 7.5;
    marineDriveGroup.add(redStripe);

    const lanternRoom = new THREE.Mesh(
      new THREE.CylinderGeometry(1.3, 1.3, 2.0, 16),
      new THREE.MeshStandardMaterial({ color: 0xfef08a, emissive: 0xfef08a, emissiveIntensity: 1.5 })
    );
    lanternRoom.position.y = 14.8;
    marineDriveGroup.add(lanternRoom);
    scene.add(marineDriveGroup);

    // --- D. CHILIKA DOLPHIN LAGOON (BOATS & JUMPING DOLPHINS) ---
    const chilikaGroup = new THREE.Group();
    chilikaGroup.position.set(-24, 0, -50);

    // Traditional Wooden Boat
    const boatBody = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.6, 4.5),
      new THREE.MeshStandardMaterial({ color: 0x3d2719, roughness: 0.85 })
    );
    boatBody.position.set(0, 0.1, 0);
    chilikaGroup.add(boatBody);

    const boatSail = new THREE.Mesh(
      new THREE.ConeGeometry(1.5, 3.5, 4),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, side: THREE.DoubleSide })
    );
    boatSail.position.set(0, 2.0, 0.4);
    chilikaGroup.add(boatSail);

    // Jumping Dolphin Silhouette
    const dolphinCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(0, 0, -1.8),
      new THREE.Vector3(0, 1.4, -0.6),
      new THREE.Vector3(0, 1.2, 0.8),
      new THREE.Vector3(0, 0, 1.8)
    );
    const dolphinGeo = new THREE.TubeGeometry(dolphinCurve, 16, 0.28, 8, false);
    const dolphinMesh = new THREE.Mesh(
      dolphinGeo,
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3, metalness: 0.5 })
    );
    dolphinMesh.position.set(6, 0, 6);
    chilikaGroup.add(dolphinMesh);
    scene.add(chilikaGroup);

    // --- E. BBI AIRPORT HIGHWAY GANTRY ---
    const airportGroup = new THREE.Group();
    airportGroup.position.set(0, 0, -38);

    const gantryBridge = new THREE.Mesh(
      new THREE.BoxGeometry(ROAD_WIDTH + 2.5, 0.45, 0.6),
      new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.9 })
    );
    gantryBridge.position.y = 4.8;
    airportGroup.add(gantryBridge);

    const gantryPostL = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 5.0, 8),
      new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.9 })
    );
    gantryPostL.position.set(-ROAD_WIDTH / 2 - 0.8, 2.4, 0);
    airportGroup.add(gantryPostL);

    const gantryPostR = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 5.0, 8),
      new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.9 })
    );
    gantryPostR.position.set(ROAD_WIDTH / 2 + 0.8, 2.4, 0);
    airportGroup.add(gantryPostR);

    // Airport Guidance Sign
    const signCanvas = document.createElement("canvas");
    signCanvas.width = 256;
    signCanvas.height = 64;
    const gantryCtx = signCanvas.getContext("2d");
    if (gantryCtx) {
      gantryCtx.fillStyle = "#047857";
      gantryCtx.fillRect(0, 0, 256, 64);
      gantryCtx.strokeStyle = "#ffffff";
      gantryCtx.lineWidth = 4;
      gantryCtx.strokeRect(4, 4, 248, 56);
      gantryCtx.fillStyle = "#ffffff";
      gantryCtx.font = "bold 22px sans-serif";
      gantryCtx.textAlign = "center";
      gantryCtx.fillText("BBI AIRPORT EXPRESSWAY", 128, 40);
    }
    const signTex = new THREE.CanvasTexture(signCanvas);
    const signMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(3.6, 0.9),
      new THREE.MeshBasicMaterial({ map: signTex })
    );
    signMesh.position.set(0, 4.8, 0.32);
    airportGroup.add(signMesh);
    scene.add(airportGroup);

    // =========================================================================
    // 10. FLYING SEAGULL FLOCK
    // =========================================================================
    const seagullGroup = new THREE.Group();
    seagullGroup.position.set(-15, 14, -35);

    interface SeagullRig {
      group: THREE.Group;
      leftWing: THREE.Mesh;
      rightWing: THREE.Mesh;
      phase: number;
    }
    const seagulls: SeagullRig[] = [];
    const birdMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let b = 0; b < 5; b++) {
      const bird = new THREE.Group();
      bird.position.set(b * 2.2, (b % 2) * 0.4, -b * 2.5);

      const body = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.7, 6), birdMat);
      body.rotation.x = Math.PI / 2;
      bird.add(body);

      const wingGeo = new THREE.PlaneGeometry(0.65, 0.22);
      const leftWing = new THREE.Mesh(wingGeo, birdMat);
      leftWing.position.set(-0.35, 0, 0);
      bird.add(leftWing);

      const rightWing = new THREE.Mesh(wingGeo, birdMat);
      rightWing.position.set(0.35, 0, 0);
      bird.add(rightWing);

      seagullGroup.add(bird);
      seagulls.push({ group: bird, leftWing, rightWing, phase: b * 0.7 });
    }
    scene.add(seagullGroup);

    // =========================================================================
    // 11. HIGH-FIDELITY EXECUTIVE 3D COMMERCIAL SEDAN (FRONT 3/4 BEAUTY POSE)
    // Positioned smoothly on the right cruising lane with front visible!
    // =========================================================================
    const carChassis = new THREE.Group();
    carChassis.position.set(1.2, 0, 0.4);
    carChassis.rotation.y = -0.08; // Subtle angle towards the viewer

    const carBodyPaint = new THREE.MeshPhysicalMaterial({
      color: 0x073b3a, // Deep emerald metallic
      metalness: 0.92,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      reflectivity: 0.96,
    });

    const carGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      metalness: 0.95,
      roughness: 0.05,
      transmission: 0.35,
      transparent: true,
      opacity: 0.92,
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.98,
      roughness: 0.08,
    });

    const goldBadgeMat = new THREE.MeshStandardMaterial({
      color: 0xd9a52b,
      metalness: 0.92,
      roughness: 0.18,
    });

    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.88,
      metalness: 0.08,
    });

    const alloyRimMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.95,
      roughness: 0.15,
    });

    // Lower Main Body
    const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(1.68, 0.44, 4.2), carBodyPaint);
    lowerBody.position.y = 0.42;
    lowerBody.castShadow = true;
    lowerBody.receiveShadow = true;
    carChassis.add(lowerBody);

    // Aerodynamic Sloped Hood
    const hood = new THREE.Mesh(new THREE.BoxGeometry(1.62, 0.32, 1.4), carBodyPaint);
    hood.position.set(0, 0.48, -1.35);
    hood.rotation.x = 0.08;
    hood.castShadow = true;
    carChassis.add(hood);

    // Chrome Front Grille
    const frontGrille = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.22, 0.08), chromeMat);
    frontGrille.position.set(0, 0.42, -2.06);
    carChassis.add(frontGrille);

    // Rear Trunk
    const trunk = new THREE.Mesh(new THREE.BoxGeometry(1.62, 0.34, 1.1), carBodyPaint);
    trunk.position.set(0, 0.5, 1.4);
    trunk.rotation.x = -0.06;
    trunk.castShadow = true;
    carChassis.add(trunk);

    // Cabin Glass
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.48, 0.58, 2.1), carGlassMat);
    cabin.position.set(0, 0.86, 0.05);
    cabin.castShadow = true;
    carChassis.add(cabin);

    // Roof
    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.44, 0.06, 1.95), carBodyPaint);
    roof.position.set(0, 1.16, 0.05);
    roof.castShadow = true;
    carChassis.add(roof);

    // Chrome Window Beltline
    const trim = new THREE.Mesh(new THREE.BoxGeometry(1.52, 0.03, 2.14), chromeMat);
    trim.position.set(0, 0.62, 0.05);
    carChassis.add(trim);

    // Side Mirrors
    const mirrorL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.12), chromeMat);
    mirrorL.position.set(-0.88, 0.72, -0.7);
    carChassis.add(mirrorL);

    const mirrorR = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.12), chromeMat);
    mirrorR.position.set(0.88, 0.72, -0.7);
    carChassis.add(mirrorR);

    // Door Crest
    const crestCanvas = document.createElement("canvas");
    crestCanvas.width = 256;
    crestCanvas.height = 128;
    const cCtx = crestCanvas.getContext("2d");
    if (cCtx) {
      cCtx.fillStyle = "#032021";
      cCtx.fillRect(0, 0, 256, 128);
      cCtx.strokeStyle = "#D9A52B";
      cCtx.lineWidth = 6;
      cCtx.strokeRect(8, 8, 240, 112);
      cCtx.fillStyle = "#D9A52B";
      cCtx.font = "bold 34px sans-serif";
      cCtx.textAlign = "center";
      cCtx.fillText("CABJATRA", 128, 58);
      cCtx.font = "bold 20px sans-serif";
      cCtx.fillStyle = "#FACC15";
      cCtx.fillText("ODISHA COMMERCIAL CAB", 128, 94);
    }
    const crestTexture = new THREE.CanvasTexture(crestCanvas);
    const crestMat = new THREE.MeshBasicMaterial({ map: crestTexture, transparent: true });

    const crestRight = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.36), crestMat);
    crestRight.rotation.y = Math.PI / 2;
    crestRight.position.set(0.85, 0.44, 0.0);
    carChassis.add(crestRight);

    const crestLeft = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.36), crestMat);
    crestLeft.rotation.y = -Math.PI / 2;
    crestLeft.position.set(-0.85, 0.44, 0.0);
    carChassis.add(crestLeft);

    // Odisha Yellow Commercial Number Plate ("OD 02 CJ")
    const plateCanvas = document.createElement("canvas");
    plateCanvas.width = 128;
    plateCanvas.height = 48;
    const pCtx = plateCanvas.getContext("2d");
    if (pCtx) {
      pCtx.fillStyle = "#FACC15";
      pCtx.fillRect(0, 0, 128, 48);
      pCtx.strokeStyle = "#000000";
      pCtx.lineWidth = 4;
      pCtx.strokeRect(2, 2, 124, 44);
      pCtx.fillStyle = "#000000";
      pCtx.font = "bold 22px monospace";
      pCtx.textAlign = "center";
      pCtx.fillText("OD 02 CJ", 64, 32);
    }
    const plateTex = new THREE.CanvasTexture(plateCanvas);
    const plateMat = new THREE.MeshBasicMaterial({ map: plateTex });

    const frontPlate = new THREE.Mesh(new THREE.PlaneGeometry(0.48, 0.18), plateMat);
    frontPlate.rotation.y = Math.PI;
    frontPlate.position.set(0, 0.34, -2.07);
    carChassis.add(frontPlate);

    const rearPlate = new THREE.Mesh(new THREE.PlaneGeometry(0.48, 0.18), plateMat);
    rearPlate.position.set(0, 0.38, 2.11);
    carChassis.add(rearPlate);

    // Glowing Dual Projector LED Headlights
    const headlightMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xfef08a,
      emissiveIntensity: 2.4,
      roughness: 0.1,
    });
    const headlightL = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.12, 0.08), headlightMat);
    headlightL.position.set(-0.62, 0.46, -2.05);
    carChassis.add(headlightL);

    const headlightR = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.12, 0.08), headlightMat);
    headlightR.position.set(0.62, 0.46, -2.05);
    carChassis.add(headlightR);

    // Volumetric Headlight Beams Casting Light on Asphalt
    const spotL = new THREE.SpotLight(0xfef08a, THEME_CONFIG.headlightIntensity, 45, Math.PI / 7, 0.45);
    spotL.position.set(-0.62, 0.46, -2.1);
    spotL.target.position.set(-0.62, 0, -22);
    carChassis.add(spotL);
    carChassis.add(spotL.target);

    const spotR = new THREE.SpotLight(0xfef08a, THEME_CONFIG.headlightIntensity, 45, Math.PI / 7, 0.45);
    spotR.position.set(0.62, 0.46, -2.1);
    spotR.target.position.set(0.62, 0, -22);
    carChassis.add(spotR);
    carChassis.add(spotR.target);

    // Red LED Taillights
    const taillightMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 2.2,
      roughness: 0.1,
    });
    const taillightL = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.06), taillightMat);
    taillightL.position.set(-0.64, 0.52, 2.11);
    carChassis.add(taillightL);

    const taillightR = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.06), taillightMat);
    taillightR.position.set(0.64, 0.52, 2.11);
    carChassis.add(taillightR);

    // Real Asphalt Contact Shadow
    const shadowGeo = new THREE.PlaneGeometry(2.4, 4.6);
    const contactShadowCanvas = document.createElement("canvas");
    contactShadowCanvas.width = 128;
    contactShadowCanvas.height = 128;
    const contactShadowCtx = contactShadowCanvas.getContext("2d");
    if (contactShadowCtx) {
      const grad = contactShadowCtx.createRadialGradient(64, 64, 10, 64, 64, 60);
      grad.addColorStop(0, "rgba(0,0,0,0.85)");
      grad.addColorStop(0.5, "rgba(0,0,0,0.45)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      contactShadowCtx.fillStyle = grad;
      contactShadowCtx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(contactShadowCanvas);
    const contactShadow = new THREE.Mesh(
      shadowGeo,
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.9 })
    );
    contactShadow.rotation.x = -Math.PI / 2;
    contactShadow.position.y = 0.01;
    carChassis.add(contactShadow);

    // 4 Precision 3D Wheels
    const spinningWheels: THREE.Group[] = [];
    const buildWheel = (x: number, z: number) => {
      const wGroup = new THREE.Group();
      wGroup.position.set(x, 0.32, z);

      const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.22, 24), tireMat);
      tire.rotation.z = Math.PI / 2;
      tire.castShadow = true;
      wGroup.add(tire);

      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.23, 16), alloyRimMat);
      rim.rotation.z = Math.PI / 2;
      wGroup.add(rim);

      const nut = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.24, 8), goldBadgeMat);
      nut.rotation.z = Math.PI / 2;
      wGroup.add(nut);

      carChassis.add(wGroup);
      spinningWheels.push(wGroup);
    };

    buildWheel(-0.82, -1.25);
    buildWheel(0.82, -1.25);
    buildWheel(-0.82, 1.25);
    buildWheel(0.82, 1.25);

    scene.add(carChassis);

    // =========================================================================
    // 12. ANIMATION LOOP (60 FPS BUTTERY SMOOTH WITH DELTA TIME)
    // =========================================================================
    let animationFrameId: number;
    let clock = new THREE.Clock();
    const SPEED = 22.0;

    // Interactive mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      mouseX = (e.clientX - halfW) / halfW;
      mouseY = (e.clientY - halfH) / halfH;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Camera subtle parallax
      const targetCamX = cameraBasePos.x + mouseX * 0.45;
      const targetCamY = cameraBasePos.y - mouseY * 0.25;
      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.lookAt(cameraTarget.x + mouseX * 0.15, cameraTarget.y, cameraTarget.z);

      // 1. Center Lane Dashed Stripes Flowing
      centerDashes.forEach((dash) => {
        dash.position.z += SPEED * delta;
        if (dash.position.z > 8) {
          dash.position.z -= DASH_COUNT * (DASH_LENGTH + DASH_GAP);
        }
      });

      // 2. Roadside Trees Passing & Wind Sway
      treeRigs.forEach((rig) => {
        rig.group.position.z += SPEED * delta;
        if (rig.group.position.z > 14) {
          rig.group.position.z -= 9 * 18;
        }

        if (rig.type === "palm") {
          rig.leaves.forEach((frond, idx) => {
            frond.rotation.z = Math.sin(elapsed * 3.5 + idx * 0.8) * 0.08;
          });
        } else if (rig.type === "casuarina") {
          rig.leaves.forEach((tier, idx) => {
            tier.rotation.z = Math.sin(elapsed * 2.8 + idx * 0.9) * 0.04;
          });
        }
      });

      // 3. Passing Milestones
      milestones.forEach((m) => {
        m.mesh.position.z += SPEED * delta;
        if (m.mesh.position.z > 12) {
          m.mesh.position.z -= 5 * 32;
        }
      });

      // 4. Wheels Spinning
      const wheelAngularSpeed = (SPEED / 0.32) * delta;
      spinningWheels.forEach((w) => {
        w.rotation.x -= wheelAngularSpeed;
      });

      // 5. Dynamic Vehicle Suspension Micro-Bounce & Roll
      carChassis.position.y = Math.sin(elapsed * 12) * 0.01;
      carChassis.rotation.z = -0.01 + Math.sin(elapsed * 3.5) * 0.006;
      carChassis.rotation.x = Math.sin(elapsed * 6) * 0.003;

      // 6. Flying Seagulls
      seagulls.forEach((bird) => {
        const flap = Math.sin(elapsed * 6.0 + bird.phase) * 0.45;
        bird.leftWing.rotation.z = flap;
        bird.rightWing.rotation.z = -flap;
      });
      seagullGroup.position.x = -15 + Math.sin(elapsed * 0.4) * 4;
      seagullGroup.position.z += delta * 1.5;
      if (seagullGroup.position.z > 20) seagullGroup.position.z = -45;

      // 7. Drifting Clouds
      clouds.forEach((cloud, idx) => {
        cloud.position.x += (0.4 + idx * 0.15) * delta;
        if (cloud.position.x > 80) cloud.position.x = -80;
      });

      // 8. Temple Flag Flutter
      flagMesh.rotation.y = Math.sin(elapsed * 8) * 0.25;

      // 9. Ocean Surface Water Specular Waves
      const waterPos = waterGeo.attributes.position;
      for (let i = 0; i < waterPos.count; i++) {
        const u = waterPos.getX(i);
        const v = waterPos.getY(i);
        const wave = Math.sin(u * 0.3 + elapsed * 1.5) * 0.12 + Math.cos(v * 0.2 + elapsed * 2.0) * 0.08;
        waterPos.setZ(i, wave);
      }
      waterGeo.computeVertexNormals();
      waterGeo.attributes.position.needsUpdate = true;

      // 10. Smooth Morphing / Visibility of Odisha Locations
      const activeLoc = locationRef.current;

      const targetScalePuri = activeLoc === "puri-dham" ? 1.0 : 0.001;
      puriGroup.scale.lerp(new THREE.Vector3(targetScalePuri, targetScalePuri, targetScalePuri), 0.08);

      const targetScaleKonark = activeLoc === "konark" ? 1.0 : 0.001;
      konarkGroup.scale.lerp(new THREE.Vector3(targetScaleKonark, targetScaleKonark, targetScaleKonark), 0.08);

      const targetScaleMarine = activeLoc === "marine-drive" ? 1.0 : 0.001;
      marineDriveGroup.scale.lerp(new THREE.Vector3(targetScaleMarine, targetScaleMarine, targetScaleMarine), 0.08);

      const targetScaleChilika = activeLoc === "chilika" ? 1.0 : 0.001;
      chilikaGroup.scale.lerp(new THREE.Vector3(targetScaleChilika, targetScaleChilika, targetScaleChilika), 0.08);

      const targetScaleAirport = activeLoc === "airport" ? 1.0 : 0.001;
      airportGroup.scale.lerp(new THREE.Vector3(targetScaleAirport, targetScaleAirport, targetScaleAirport), 0.08);

      // Lighthouse beacon sweep
      if (activeLoc === "marine-drive") {
        marineDriveGroup.rotation.y += delta * 0.8;
      }

      // Dolphin arch jump animation
      if (activeLoc === "chilika") {
        dolphinMesh.position.y = Math.max(0, Math.sin(elapsed * 2.4) * 2.0);
        dolphinMesh.rotation.z = Math.cos(elapsed * 2.4) * 0.6;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [timeOfDay]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden"
      aria-hidden="true"
    />
  );
};
