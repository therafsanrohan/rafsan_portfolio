# Rafsan Rohan – Portfolio System

Welcome to the **Rafsan Web** portfolio project. This repository holds a fully dynamic, cinematic, physics-driven web experience engineered to feel like a living visual system in deep space. 

It maintains a strict black and metallic silver design system, driven by complex 3D logic, while ensuring absolute responsiveness and high-performance delivery.

---

## 1. Project Overview

A highly optimized, system-focused portfolio website for Rafsan Rohan. Rather than static decorative features, this project treats the website environment as a cohesive, physics-driven universe. 

**Key Objectives Achieved:**
- **Leak-Free Engine:** Strict React garbage collection and active unmount cleanups guarantee zero memory leaks across 3D contexts and event listeners.
- **Cinematic Environment:** True depth physical camera transitions and global 3D atmospheric systems.
- **Lightning-Fast Metrics:** Leveraging strict lazy-loading and dynamic payloads.
- **Dynamic Capabilities:** V-Card generation directly from the UI.
- **Robust Security:** Java/Spring Boot backend architectural pairing protecting APIs.

---

## 2. Tech Stack

### Frontend Hub
- **Framework**: React / Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **3D Engine**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animation System**: Framer Motion

### Backend Engine
- **Framework**: Java Spring Boot (17+)
- **Architecture**: Spring MVC / REST Configuration
- **Database**: PostgreSQL / MySQL (Configurable via profiles)
- **Persistence**: Spring Data JPA / Hibernate

---

## 3. System Requirements

Ensure your local development environment supports the following strict stack:

- **Node.js**: v18.17.0 or higher
- **Package Manager**: npm or yarn
- **Java**: JDK 17 (Open JDK or Oracle)
- **Build Tool**: Maven Wrapper (`mvnw`) included in repo
- **Version Control**: Git

---

## 4. Project Structure

```text
rafsan-web/
├── frontend/
│   ├── src/
│   │   ├── app/           # Next.js App Router (Layouts, Legal, Error bindings)
│   │   ├── assets/        # Static media (Images, Vector files)
│   │   ├── components/    # Reusable UI Blocks (Navbar, Publications, etc)
│   │   │   └── canvas/    # WebGL / Three.js 3D System Modules
│   │   └── utils/         # Helpers & constants
│   ├── package.json
│   └── tailwind.config.ts
└── backend/
    ├── src/main/java/     # Spring Boot application context
    ├── src/main/resources/# Application configuration (.properties)
    └── pom.xml            # Maven configuration
```

---

## 5. How to Run the Website

You must run both the Frontend and Backend concurrently to experience full functionality (like the Contact Form API).

### Clone Repository
```bash
git clone <repo-link>
cd rafsan-web
```

### Launch Frontend
```bash
cd frontend
npm install
npm run dev
```
> The frontend will deploy on **http://localhost:3000**

### Launch Backend
Open a *separate* terminal window:
```bash
cd backend
./mvnw spring-boot:run
```
*(On Windows use `mvnw.cmd spring-boot:run`)*
> The backend server will initialize on **http://localhost:8080**

---

## 6. Environment Setup

Inside the `backend/src/main/resources/` directory, you will likely configure an `application.properties` (or `application-dev.yml`) file to expose API routing, CORS logic, and DB secrets.

Inside the `frontend/`, create a `.env.local` to securely feed public variables:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

---

## 7. Database Setup

Ensure your local SQL distribution is running.

**Example Implementation (MySQL):**
```sql
CREATE DATABASE rafsan_portfolio;
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON rafsan_portfolio.* TO 'admin'@'localhost';
```

**Application Configuration Bind (`application.properties`):**
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/rafsan_portfolio
spring.datasource.username=admin
spring.datasource.password=secure_password
spring.jpa.hibernate.ddl-auto=update
```

---

## 8. UI Design Guide

To maintain the exact "Design Heritage", strict compliance is required:

- **Color Theme**: Pure Black (`#000000`) acts as the absolute void. Metallic Silver surfaces (`#a1a1aa`, `#d4d4d8`) act as structural highlights. Do not use primary colors.
- **Typography hierarchy**: Use sharp, tracking-tight Sans fonts (Inter/Outfit). Headlines should be bold, subtext light and relaxed.
- **Spacing**: Fluid, large padding (`py-32`). Elements must have breathing room to replicate "deep space".
- **Animation Philosophy**: No random bouncing. All layout jumps must use `framer-motion` ease configurations (`easeOut`, `duration: 0.8`). Physics-based deceleration only.

---

## 9. Performance Optimization

- **Next.js Engine**: Uses strict `<Image>` tagging. `loading="lazy"` combined with `placeholder="blur"` defers visual blocking.
- **Code Splitting**: Heavy Canvas meshes (`Global3DBackground`, `SystemLoader`) are wrapped in `next/dynamic` to ensure Server-Side Rendering never stalls on WebGL hooks.
- **Memory Management (Leak-Free)**: Aggressive garbage collection compliance—intervals, listeners, and Three.js mounts are proactively unmounted. Zero persistent leaks within `useEffect` states.

---

## 10. Security & Threat Mitigation

- **DDoS Shielding (Backend)**: A custom Servlet Interceptor natively monitors concurrent IP-payloads in real-time, executing hard TCP drops (HTTP `429`) against brute-force/Denial of Service (DoS) attempts targeting contact endpoints.
- **Secure SMTP Mailer**: The Spring Boot backend natively hooks into `smtp.gmail.com` establishing encrypted `STARTTLS` transport.
- **Credential Isolation**: All sensitive runtime parameters (like SMTP App Passwords) are strictly bound to isolated backend `.env` paradigms and are structurally invisible to frontend bundles.
- **Frontend Source Cloaking**: The React/Next.js bundle is aggressively minimized upon build. Furthermore, `productionBrowserSourceMaps` is disabled preventing reverse-engineering via standard DevTools. Native contextual-menu suppression (`preventDefault`) acts as a first-layer deterrent against source scraping.
- **Data Validation & Sanitization**: Strict `@Valid` constraints alongside logical size restraints (`@Size(max=2000)`) execute server-side blocking massive buffer/spam payloads.

---

## 11. Deployment Architecture (Production Paradigm)

- **Frontend Environment (Vercel)**: The Next.js framework deploys instantly to Vercel capitalizing on global CDNs. React bundles are deeply compressed natively preventing unadulterated exposure of component structures.
- **Backend Environment (VPS/AWS/Heroku)**: The Java Spring Boot `.jar` executes strictly behind closed ports managing SMTP dispatches uniquely. Exposing the API safely requires enforcing localized reverse proxies (like NGINX mapping to localhost:8080) and CORS enforcement explicitly trusting the Vercel Origin domain. 

---

## 12. Key Features

- **Planetary Orbital System (Core Capabilities)**: A structurally authentic orbital hierarchy for skills. Capability cards seamlessly revolve around a central core traversing an actual physical `preserve-3d` tilted 3D plane. The system eliminates flat 2D projection physics (like overlap artifacts or fake scaling) and uses absolute spatial Z-depth calculations, allowing cards to move physically deeper into the monitor and scale automatically through the browser's native camera perspective.
- **3D Universe Loading Animation**: A true spatial load sequence. Planets orbit realistically; the camera physically travels depth across the Z-axis to clarify a locked focus state on the moon.
- **Dynamic V-Card QR System**: A physical "Generate Connect QR" button compiles string arrays into a high-fidelity image dynamically fetched from robust API layers—no bulky overhead required.
- **Shattered Impact Route (404)**: Offline states aren't static; they are physically simulated. An actual tiny meteor object strikes the lunar 3D grid and detonates a scaling dust cloud before freezing the frame entirely in silence.

---

## 13. Common Commands

**Frontend Lifecycle**
```bash
npm run dev     # Starts local server
npm run build   # Compiles production distribution
npm run start   # Deploys production bundle
```

**Backend Lifecycle**
```bash
./mvnw clean package   # Cleans and compiles .JAR architecture
./mvnw test            # Runs unit suites
```

---

## 14. Troubleshooting

- **Canvas Rendering Blank (SSR Failure)**: If you accidentally wrap a Three.js primitive without `'use client'` natively or dynamically, Next.js blocks it. Use `next/dynamic` heavily.
- **Port Conflicts**: If port `:8080` is busy, inject `server.port=8081` into the Spring Boot properties.
- **Missing Module Node Errors**: Simply delete the `node_modules` directory and `package-lock.json`, then execute a clean `npm install`.

---

## 15. Final Notes

The architecture of this site reflects intention.  
Visuals are not decorative—they are structural choices mimicking realistic physics. Maintain design consistency. Ensure new animations inherently mirror gravity, momentum, or focus shifts rather than arbitrary motion. Do not build "clutter". 
