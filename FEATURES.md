# 🌍 Turistio – Features Specification

This document outlines all required and planned features for Turistio—a full-stack tourism and social network web application focused on Spanish destinations and experiences.

---

## Core Features (MVP / Academic Requirements)

### 1. User Accounts & Authentication
- User registration (email, username, password with bcrypt hashing)
- Login, logout, and session management
- Email verification with verification code system
- Password reset (via email token)
- Avatar upload/URL, user bio, birthdate, privacy toggle
- User roles: **USER**, **MOD**, **ADMIN**
- Ban, soft-delete, and permaban functions for moderation
- Profile edit, view public/private profiles (permissions respected)
- Optional: Sign-in with Google (OAuth) in addition to required email/password

### 2. Friendships & Social Graph
- Send, accept, reject or cancel friend requests
- View your friends and incoming/outgoing requests
- Private profiles/diaries only visible to confirmed friends (or higher roles)

### 3. Geography & Attractions
- Regions → Provinces → Municipalities hierarchy (browse, search, filter)
- Municipalities and attractions with structured data (descriptions, images, coordinates, features, tariffs, etc.)
- Attractions categorized: **CULTURE, NATURE, BEACHES, RELIGION, ENTERTAINMENT, LIFESTYLE**
- Attraction status: draft, published, archived
- Map view for attractions (react-leaflet)
- Attraction favorites: users can save/unsave
- Attraction proposal system—users can submit new places, reviewed/approved by admin or mod

### 4. Reviews & Ratings
- Reviews: text + numeric rating (per user/attraction)
- Users can edit or delete their reviews
- Reviews can be liked, commented, and reported
- Average attraction rating auto-calculated

### 5. Diaries (Travel Logs) & Entries
- Create travel diaries, each with multiple diary entries
- Entry: title, text, image, date, and optionally linked attraction
- Diaries and entries can be liked, commented, and reported
- Option to display all (public) diary entries for a specific attraction, and see which friends have posted about it

### 6. Comments, Likes & Reports
- Comments: add to diaries, diary entries, reviews (never attractions)
- Likes: on diaries, diary entries, comments, reviews (not on attractions themselves)
- User can like/comment only once per content type
- Reports: any comment, diary, entry, or review can be reported for moderation
- Users are notified if their content is reported

### 7. Proposals (Crowdsourced Content)
- Users can propose new attractions
- Proposals can be reviewed, accepted/declined by admin/mod
- Users are notified of outcomes; can edit and resubmit declined proposals

### 8. Itineraries
- Users can create itineraries and invite collaborators
- Add city/attraction “items” to itineraries (set day/order/notes)
- Multiple collaborators (with roles, status)

### 9. Notifications
- Notifications for comments, likes, friend events, proposal status, and moderation actions
- Notifications delivered on page reload (no real-time required)
- Read/unread notification tracking

### 10. Admin & Moderator Dashboards
- **Admin:** full user/content management, assign roles, review reports, approve/reject proposals, archive/delete content, permaban users
- **Moderator:** most content/report tools, but cannot set roles or ban/restore users (beyond regular moderation powers)
- Access dashboards based on user role

### 11. Content Moderation
- Content (users, reviews, diaries, comments, proposals) can be soft-deleted, archived, recovered by admins/moderators
- Banned content or users cannot interact until reinstated by admin

### 12. Seeding & Data Import
- Spanish geography, attractions, and features seeded from OSM/GeoJSON and Wikipedia
- Admin tools for (re-)triggering seeds

---

## Planned / Stretch Features

- “Show all public diary entries about [Attraction]” page
- See which friends have visited (posted about) a place
- Analytics/Dashboard views for usage stats (admin/optional user)
- Future: Add direct user messaging (not in initial MVP)
- Optional: Multi-language support (future)

---

## Validation, Accessibility & Testing

- Robust data validation on both client and server (preferably with Zod)
- All destructive actions must confirm via modal (shadcn/ui or similar)
- Fully responsive UI (Tailwind CSS), accessible interface
- Testing (unit/integration/E2E) is a project principle for all business logic

---

## User Stories (Summary)
- “As a traveler, I want to search and save attractions, so I can plan my trip.”
- “As a user, I want to keep a diary of my travels and share entries with friends.”
- “As a user, I want to provide feedback (reviews/ratings) for places I visit.”
- “As a moderator, I want to review and manage reported content.”
- “As an admin, I want to manage all users and site data.”
- “As a content creator, I want to propose new attractions for the map.”
- “As a user, I want to reset my password and verify my account for security.”

---

**This file defines the scope for Turistio’s current development and academic delivery. Stretch goals and feature changes should be recorded/approved here before implementation.**