# Functionality Document

## eXpert AI App Functionality Document

---

### Table of Contents

- [Introduction](#introduction)
- [User Roles](#user-roles)
- [Functional Overview](#functional-overview)
- [Detailed Functionality](#detailed-functionality)
  - [1. User Authentication and Authorization](#1-user-authentication-and-authorization)
  - [2. Data Import and Synchronization](#2-data-import-and-synchronization)
  - [3. Content Filtering and Selection](#3-content-filtering-and-selection)
  - [4. Content Transformation](#4-content-transformation)
  - [5. Learning Module Management](#5-learning-module-management)
  - [6. Progress Tracking](#6-progress-tracking)
  - [7. Milestones and Notifications](#7-milestones-and-notifications)
  - [8. User Interface and Navigation](#8-user-interface-and-navigation)
  - [9. Personalization and Recommendations](#9-personalization-and-recommendations)
  - [10. Settings and Preferences](#10-settings-and-preferences)
  - [11. Help and Support](#11-help-and-support)
- [Non-functional Requirements](#non-functional-requirements)
- [Integration Points](#integration-points)
- [Error Handling and Validation](#error-handling-and-validation)
- [Security Considerations](#security-considerations)
- [Appendices](#appendices)

---

## Introduction

This functionality document outlines the detailed features and operations of the **eXpert AI** app, which transforms users' passive engagement on X (formerly Twitter) into active learning experiences. By leveraging X API v2 and advanced language models, the app converts users' bookmarked and liked educational threads into structured learning modules.

## User Roles

- **Registered User**: A user who has signed up and authenticated via their X account.
- **Guest User**: Limited access to public information and promotional content.
- **Administrator**: Manages the platform, user accounts, content moderation, and system settings.

## Functional Overview

- **Authentication**: Secure login via X OAuth 2.0.
- **Data Import**: Fetch and cache users' recent bookmarks and likes.
- **Content Filtering**: Analyze fetched posts to identify educational content.
- **Content Transformation**: Use language models to convert threads into educational modules.
- **Module Management**: Organize content into learning modules.
- **Progress Tracking**: Monitor user progress through modules.
- **Milestones and Notifications**: Set goals and receive reminders.
- **Personalization**: Tailor content based on user interests and goals.
- **User Interface**: Intuitive navigation and responsive design.
- **Settings**: Manage user preferences and account details.

## Detailed Functionality

### 1. User Authentication and Authorization

#### Features

- **X OAuth 2.0 Integration**:
  - Users can sign up and log in using their X credentials.
  - Secure token exchange and storage.
- **Session Management**:
  - Persistent sessions with options to log out.
  - Automatic session timeout after inactivity.

#### User Flows

- **Login Flow**:
  1. User clicks "Log in with X".
  2. Redirected to X's authorization page.
  3. Grants permissions to eXpert AI.
  4. Redirected back with authentication tokens.
  5. User lands on the Dashboard.

### 2. Data Import and Synchronization

#### Features

- **Weekly Data Sync**:
  - Automatic sync scheduled once a week.
  - Manual sync option (limited to once per week).
- **Fetch Recent Bookmarks and Likes**:
  - Retrieves the latest 100 bookmarks and 100 likes.
- **Data Caching**:
  - Stores fetched data to minimize API calls.
  - Detects changes since the last sync.

#### User Flows

- **Manual Sync**:
  1. User clicks "Sync Now".
  2. System checks sync eligibility.
  3. Fetches data from X API v2.
  4. Updates cache and notifies user.

### 3. Content Filtering and Selection

#### Features

- **Educational Content Detection**:
  - Utilizes **gpt-4o-mini** to analyze posts.
  - Filters content based on relevance and quality.
- **User Feedback Mechanism**:
  - Users can override system classifications.
  - Improves future filtering accuracy.

#### User Flows

- **Review Filtered Content**:
  1. User views categorized content.
  2. Marks any misclassified items.
  3. System updates classification and learns preferences.

### 4. Content Transformation

#### Features

- **Summarization and Key Takeaways**:
  - Generates concise summaries of threads.
  - Highlights essential points.
- **Supplementary Materials**:
  - Suggests related resources and exercises.
- **Prompt Caching Implementation**:
  - Optimizes prompts to reduce costs and latency.

#### User Flows

- **Access Transformed Content**:
  1. User selects a thread.
  2. Views summary, key takeaways, and additional materials.

### 5. Learning Module Management

#### Features

- **Create and Edit Modules**:
  - Users can create new modules with titles and descriptions.
  - Edit existing modules to update details.
- **Organize Content**:
  - Assign threads to modules.
  - Drag-and-drop interface for easy organization.
- **Delete Modules**:
  - Remove modules with confirmation prompts.

#### User Flows

- **Create a Module**:
  1. Clicks "New Module".
  2. Enters module information.
  3. Saves and begins adding content.

- **Add Content to Module**:
  1. Selects threads from filtered content.
  2. Assigns them to the desired module.

### 6. Progress Tracking

#### Features

- **Visual Progress Indicators**:
  - Progress bars for modules and overall learning.
- **Thread Status Updates**:
  - Mark threads as "Unread", "In Progress", or "Completed".
- **Dashboard Metrics**:
  - Overview of completed modules, threads, and milestones.

#### User Flows

- **Update Progress**:
  1. User reads a thread.
  2. Marks it as "Completed".
  3. Progress metrics update automatically.

### 7. Milestones and Notifications

#### Features

- **Set Milestones**:
  - Define start and end dates for modules.
  - Set specific learning goals.
- **Notification System**:
  - Email and in-app notifications for:
    - Upcoming milestones.
    - Inactivity reminders.
    - Achievements.
- **Reschedule Options**:
  - Modify milestones as needed.

#### User Flows

- **Set a Milestone**:
  1. Accesses module settings.
  2. Sets target dates and goals.
  3. Saves changes.

- **Receive Notifications**:
  1. System checks for upcoming milestones.
  2. Sends notifications accordingly.

### 8. User Interface and Navigation

#### Features

- **Responsive Design**:
  - Optimized for desktop, tablet, and mobile devices.
- **Intuitive Navigation**:
  - Clear menus and navigation paths.
- **Dark Mode Toggle**:
  - Switch between light and dark themes.
- **Accessibility Support**:
  - Keyboard navigation.
  - Screen reader compatibility.
  - High-contrast options.

#### User Flows

- **Navigate the App**:
  1. Uses the header menu to access different sections.
  2. Utilizes breadcrumbs for navigation context.

### 9. Personalization and Recommendations

#### Features

- **Interest Analysis**:
  - Analyzes content to determine user interests.
- **Customized Recommendations**:
  - Suggests new threads and modules.
- **Adjustable Preferences**:
  - Users can refine interests and control recommendations.

#### User Flows

- **Explore Recommendations**:
  1. Visits the "Recommendations" section.
  2. Reviews and adds suggested content.

### 10. Settings and Preferences

#### Features

- **Account Settings**:
  - Update personal information.
  - Manage connected accounts.
- **Notification Preferences**:
  - Control email and in-app notification settings.
- **Privacy Controls**:
  - Manage data sharing and visibility options.
- **Theme Selection**:
  - Choose between light and dark modes.

#### User Flows

- **Update Settings**:
  1. Accesses "Settings" from the profile menu.
  2. Adjusts preferences.
  3. Saves changes.

### 11. Help and Support

#### Features

- **Help Center**:
  - FAQs, guides, and tutorials.
- **Contact Support**:
  - Submit support tickets or feedback.
- **Community Forums**:
  - Engage with other users (potential future feature).

#### User Flows

- **Access Help**:
  1. Clicks on "Help" in the footer or menu.
  2. Searches for assistance or contacts support.

## Non-functional Requirements

- **Performance**:
  - Fast response times (<2 seconds per action).
- **Scalability**:
  - Supports growing user base without degradation.
- **Reliability**:
  - 99.9% uptime with minimal downtime.
- **Usability**:
  - Intuitive interface for all user levels.
- **Accessibility**:
  - Complies with WCAG 2.1 AA standards.
- **Security**:
  - Protects user data and complies with regulations.

## Integration Points

- **X API v2**:
  - For fetching bookmarks and liked tweets.
- **OpenAI API**:
  - For content analysis and transformation.
- **Supabase**:
  - Database and authentication services.
- **Email Services**:
  - SendGrid or Mailgun for email notifications.
- **Monitoring Tools**:
  - Sentry for error tracking and performance monitoring.

## Error Handling and Validation

- **User Input Validation**:
  - Client-side and server-side validation.
  - Clear error messages for invalid inputs.
- **API Error Handling**:
  - Graceful degradation when APIs fail.
  - Inform users of issues without exposing technical details.
- **Retry Mechanisms**:
  - Automatic retries for transient errors.
- **Logging**:
  - Comprehensive logs for debugging and auditing.

## Security Considerations

- **Data Protection**:
  - Encryption of data in transit (TLS) and at rest.
- **Authentication Security**:
  - Secure storage of tokens.
  - Regular token refresh and revocation mechanisms.
- **Compliance**:
  - Adherence to GDPR, CCPA, and other regulations.
- **Access Control**:
  - Role-based access controls (RBAC) for administrative functions.
- **Regular Audits**:
  - Security assessments and vulnerability scans.

## Appendices

### APIs Utilized

- **X API v2 Endpoints**:
  - `GET /2/users/:id/bookmarks`
  - `GET /2/users/:id/liked_tweets`

- **OpenAI API**:
  - Models:
    - **gpt-4o-mini** for general processing.
    - **o1-mini** for advanced reasoning tasks.

### Data Models

- **User**:
  - `user_id`
  - `name`
  - `email`
  - `x_user_id`
  - `preferences`
  - `created_at`
  - `updated_at`

- **Module**:
  - `module_id`
  - `user_id`
  - `title`
  - `description`
  - `progress` (percentage)
  - `start_date`
  - `end_date`
  - `created_at`
  - `updated_at`

- **Thread**:
  - `thread_id`
  - `module_id`
  - `content` (original thread)
  - `summary`
  - `key_takeaways`
  - `status` ("Unread", "In Progress", "Completed")
  - `created_at`
  - `updated_at`

- **Milestone**:
  - `milestone_id`
  - `module_id`
  - `title`
  - `due_date`
  - `completed` (boolean)
  - `created_at`
  - `updated_at`

### Glossary

- **Thread**: A series of connected posts on X.
- **Module**: A collection of threads organized around a specific topic.
- **LLM**: Large Language Model used for processing and transforming text.
- **Prompt Caching**: Technique to reduce LLM costs by reusing processed prompts.

### Third-party Services

- **Supabase**:
  - Database: PostgreSQL.
  - Authentication: User management and security.
- **Vercel**:
  - Hosting and deployment platform for Next.js applications.
- **SendGrid/Mailgun**:
  - Email delivery services for notifications.

### Technologies Used

- **Front-end**:
  - Next.js (React framework)
  - TypeScript
- **Back-end**:
  - Node.js with Express.js
  - Supabase for database and authentication
- **Testing**:
  - Jest for unit tests
  - Cypress for end-to-end tests
- **CI/CD**:
  - GitHub Actions for automated workflows
- **Monitoring**:
  - Sentry for error tracking

---

**Note**: This functionality document serves as a comprehensive guide to the features and operations of the eXpert AI app. It is intended for developers, designers, project managers, and stakeholders involved in the development and deployment of the application.