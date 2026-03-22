# Turistio (TFG DAW)

## 1. Overview
Turistio is a Full-Stack web application focused on tourism in Spain. It serves as a geolocated catalog of points of interest and a social network for travelers. The project follows an MVC architecture with robust validations and OOP principles while using modern JavaScript tooling.

## 2. Tech Stack
- **Core Framework:** Next.js (App Router). All code (Front and Back) resides in the `src/` directory.
- **Language:** JavaScript (strict TypeScript replaced with clear, self-explanatory code and JSDoc comments where needed).
- **Database:** PostgreSQL (hosted on Neon).
- **ORM:** Prisma (`@prisma/client` and `@prisma/adapter-pg`).
- **Authentication:** Custom or using libraries like Auth.js or custom JWT, with `bcryptjs`.
- **Validation:** Zod or other JS validation libraries (data validated on both client and server).
- **Frontend UI:** React, Tailwind CSS, and [shadcn/ui](https://ui.shadcn.com/) components.
- **Maps:** Leaflet (`react-leaflet`), rendered exclusively on the client.
- **Data Seeding:** Scripts can use OpenStreetMap (Overpass API / GeoJSON) and the Wikipedia API.

## 3. Architecture (Hybrid MVC in Next.js)
- **Model:** Defined in `prisma/schema.prisma`.
- **View:** React components in `src/app/` and `src/components/`.
- **Controller:** Static classes in `src/controllers/` (e.g., `AttractionController.js`, `AuthController.js`) for business logic and Prisma queries.
- **Server Actions:** Bridge frontend requests, validate input, and execute controller methods.
- **API Routes:** For client-only data fetching, use Next.js API route handlers.

## 4. Business Rules & Data Structure

### A. Static Data (Geography & Attractions)
- `Region` → `Province` → `Municipality` → `Attraction`
- Attractions are categorized with a strict enum (CULTURE, NATURE, BEACHES, RELIGION, ENTERTAINMENT, LIFESTYLE).

### B. Dynamic Data (Users & Community)
- **Travel Diaries:** Support comments and likes (no reviews).
- **Attractions:** Support reviews (text + rating).
- **User:** Uses string IDs for Auth compatibility; includes sessions per best practice.

## 5. Coding Standards
- **Strict Code Quality:** Use self-explanatory names. Document only complex/important code with brief comments.
- **Validation:** All data validated before entering DB, schemas kept in `src/validations/`.
- **Honest Technical Practices:** Follow MVC, optimize serverless functions, and warn if requirements or architecture are broken.

