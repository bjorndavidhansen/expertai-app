# Updated Project Requirements Document (PRD)

## eXpert AI App

---

### Table of Contents

- [Introduction](#introduction)
- [Objectives and Goals](#objectives-and-goals)
- [User Stories](#user-stories)
- [Functional Requirements](#functional-requirements)
- [Non-functional Requirements](#non-functional-requirements)
- [Technical Requirements](#technical-requirements)
- [Milestones and Timeline](#milestones-and-timeline)
- [Assumptions and Dependencies](#assumptions-and-dependencies)
- [Risks and Mitigations](#risks-and-mitigations)
- [Financial Feasibility Assessment](#financial-feasibility-assessment)
- [Appendices](#appendices)

---

## Introduction

eXpert AI is a web application designed to transform passive engagement on X (formerly Twitter) into active learning experiences. By leveraging X API v2 and advanced language models, the app intelligently converts users' bookmarked and liked educational threads into structured, actionable learning paths. eXpert AI helps users organize, track, and convert their saved content into practical skills, building personalized curricula based on their interests and goals.

## Objectives and Goals

- **Optimize API Usage** by limiting data synchronization to once per week and caching previous data.
- **Select Educational Content** from bookmarks and likes using intelligent filtering.
- **Transform Content** into educational modules using Language Model (LLM) processing.
- **Implement Prompt Caching** to reduce latency and cost.
- **Organize**, **Track**, and **Personalize** learning experiences based on user interests and goals.

## User Stories

1. **As a user**, I want to import my recent bookmarks and likes weekly to organize them into learning modules.
2. **As a user**, I want the app to identify which posts are educational and relevant to my learning goals.
3. **As a user**, I want the app to transform saved threads into structured educational content.
4. **As a user**, I want to track my progress through each learning module to stay motivated.
5. **As a user**, I want to set milestones and completion targets to manage my learning schedule.

## Functional Requirements

### 1. User Authentication and Authorization

- **OAuth 2.0 Integration**: Users can log in using their X account credentials.
- **Secure Token Management**: Store and manage access tokens securely using industry best practices.

### 2. Data Import and Caching

- **Weekly Data Sync**: Limit data synchronization to once per week to optimize API usage.
- **Fetch Recent Bookmarks and Likes**: Retrieve only the most recent 100 bookmarks and 100 likes per user.
  - **Bookmarks**: Utilize `GET /2/users/:id/bookmarks`.
  - **Likes**: Utilize `GET /2/users/:id/liked_tweets`.
- **Data Caching**: Cache previous bookmarks and likes to avoid redundant API calls.
- **Change Detection**: Identify new items since the last sync to update the cache.

### 3. Educational Content Selection

- **Content Filtering**: Use a Language Model (LLM) to analyze fetched posts and determine educational value.
- **Selection Criteria**:
  - **Relevance**: Post relates to educational topics or skills.
  - **Quality**: Post contains substantive information or insights.
  - **Engagement**: High engagement metrics (e.g., likes, retweets) may indicate valuable content.
- **User Input**: Allow users to manually mark posts as educational or non-educational.

### 4. Content Transformation using LLM

- **Language Model Integration**: Use **OpenAI's gpt-4o-mini** to process and summarize threads into educational modules.
- **Module Creation**:
  - **Summarization**: Generate concise summaries of threads.
  - **Key Takeaways**: Highlight important points or concepts.
  - **Supplementary Material**: Suggest additional resources or exercises.
- **Customization**: Tailor the content transformation based on user preferences and learning goals.
- **Prompt Caching**: Structure prompts to take advantage of OpenAI's prompt caching to reduce latency and cost.

### 5. Content Organization

- **Learning Modules**: Users can create, edit, and delete learning modules.
- **Thread Categorization**: Assign processed threads to modules.
- **Tagging and Labeling**: Add tags or labels for easier navigation.

### 6. Progress Tracking

- **Module Progress**: Display completion percentage for each module.
- **Thread Status**: Mark threads as unread, in progress, or completed.
- **Dashboard Overview**: Provide an overview of total progress across all modules.

### 7. Milestones and Targets

- **Set Milestones**: Users can set start and end dates for modules.
- **Completion Targets**: Define goals for weekly progress.
- **Notifications**: Send reminders for upcoming milestones via email and in-app notifications.

### 8. User Interface and Experience

- **Responsive Design**: Ensure the app is mobile-friendly and accessible on various devices.
- **Intuitive Navigation**: Simple and clean UI with easy access to all features.
- **Dark Mode**: Option to switch between light and dark themes.

### 9. Security and Compliance

- **Data Privacy**: Comply with GDPR and other relevant data protection regulations.
- **API Compliance**: Adhere to X API usage policies and guidelines.
- **Secure Data Storage**: Encrypt sensitive data in transit and at rest.

## Non-functional Requirements

- **Performance**: Pages should load within 2 seconds under normal network conditions.
- **Scalability**: The system should handle growth in the number of users without performance degradation.
- **Reliability**: Achieve 99.9% uptime excluding scheduled maintenance.
- **Usability**: Achieve a high score in user satisfaction surveys post-launch.
- **Accessibility**: Comply with WCAG 2.1 AA standards.

## Technical Requirements

- **Front-end Framework**: **Next.js** for server-side rendering and optimal performance.
- **Programming Languages**: **TypeScript** for both front-end and back-end development.
- **Back-end Framework**: **Node.js** with **Express.js**.
- **Database**: **Supabase** (leveraging PostgreSQL) for scalable and real-time data management.
- **API Integration**: Utilize **X API v2** endpoints exclusively.
- **Hosting and Deployment**: Deploy the app using **Vercel** for seamless Next.js integration.
- **Version Control**: **Git** repository hosted on **GitHub**.
- **Continuous Integration/Continuous Deployment (CI/CD)**: Implement pipelines using **GitHub Actions**.
- **Testing**: Write unit tests using **Jest** and end-to-end tests using **Cypress**.
- **Monitoring**: Use **Sentry** for performance tracking and error logging.
- **Notifications**: Use **SendGrid** or **Mailgun** for email notifications.
- **Authentication and Security**: Use **Auth0** or **Firebase Authentication** for managing user authentication securely.
- **Language Model Integration**: Use **OpenAI's gpt-4o-mini** for content processing.
- **Prompt Caching**: Optimize prompts to leverage OpenAI's prompt caching feature for cost and latency reduction.

## Milestones and Timeline

| Milestone                                  | Timeline     |
|--------------------------------------------|--------------|
| **Project Kickoff and Planning**           | Week 1       |
| **Design and Prototyping**                 | Week 2-3     |
| **Authentication & API Integration**       | Week 4-5     |
| **Data Import and Caching Implementation** | Week 6       |
| **Content Filtering and LLM Integration**  | Week 7-8     |
| **Content Organization Module**            | Week 9       |
| **Progress Tracking Features**             | Week 10      |
| **Milestones and Notifications**           | Week 11      |
| **Testing and Quality Assurance**          | Week 12-13   |
| **Deployment and Launch**                  | Week 14      |
| **Post-Launch Support and Iteration**      | Ongoing      |

## Assumptions and Dependencies

- **X API Access**: Continued availability and stability of X API v2 endpoints.
- **OpenAI API Access**: Reliable access to OpenAI's API for LLM processing.
- **User Base**: Users are active on X and utilize bookmarks and likes for educational content.
- **Third-party Services**: Reliance on services like SendGrid for email notifications.
- **Technology Stack**: Availability and community support for Next.js, Supabase, and other chosen technologies.

## Risks and Mitigations

- **API Rate Limits**: Risk of hitting X API rate limits.

  - *Mitigation*: Limit data sync to once per week and fetch only recent items.

- **Data Privacy Concerns**: Handling personal data may raise privacy issues.

  - *Mitigation*: Ensure compliance with all data protection laws and obtain necessary user consents.

- **Dependency on X Platform**: Changes to X's API policies could affect app functionality.

  - *Mitigation*: Stay updated with X's developer communications and have contingency plans.

- **LLM Usage Costs**: Costs associated with using OpenAI's API may become significant.

  - *Mitigation*: Optimize LLM usage by processing only selected content, implement prompt caching, and explore cost-effective models.

- **Scalability Challenges**: Rapid user growth could strain resources.

  - *Mitigation*: Use scalable infrastructure like Supabase and perform load testing.

---

## Financial Feasibility Assessment

### X API Usage

#### Optimized API Calls

- **Sync Frequency**: Once per week.
- **Items Fetched**: Last 100 bookmarks and 100 likes per user.
- **API Calls per User per Sync**:
  - **Bookmarks**: 1 API call.
  - **Likes**: 1 API call.
  - **Total**: 2 API calls per user per week.

#### Monthly API Calls Calculation

- **Total Users**: 100 users.
- **Total API Calls per Month**: 100 users * 2 API calls * 4 weeks = **800 API calls per month**.

#### X API Pricing Tiers

1. **Free Tier**

   - **Reads**: 100 reads per month.
   - **Conclusion**: Not sufficient.

2. **Basic Tier**

   - **Reads**: 10,000 reads per month.
   - **Cost**: $200 per month.
   - **Conclusion**: Sufficient for current needs.

3. **Pro Tier**

   - **Reads**: 1,000,000 reads per month.
   - **Cost**: $5,000 per month.
   - **Conclusion**: Not necessary for current scale.

### OpenAI API Usage

#### Model Selection

- **Primary Model**: **gpt-4o-mini** for most content processing tasks due to its cost efficiency.
- **Specialized Tasks**: Consider using **o1-mini** for tasks requiring advanced reasoning (e.g., complex summarization), only if necessary.

#### Pricing for gpt-4o-mini

- **Input Tokens**:
  - **Standard Pricing**: $0.150 per 1M input tokens.
  - **Batch API Pricing**: $0.075 per 1M input tokens.
  - **Cached Input Tokens**: $0.075 per 1M cached input tokens.
- **Output Tokens**:
  - **Standard Pricing**: $0.600 per 1M output tokens.
  - **Batch API Pricing**: $0.300 per 1M output tokens.

#### Prompt Caching

- **Benefits**:
  - **Cost Reduction**: 50% less for cached input tokens.
  - **Latency Reduction**: Up to 80% faster responses.

#### Assumptions

- **LLM Model**: gpt-4o-mini.
- **Average Tokens per Thread**:
  - **Input**: 1,500 tokens (approximate length of a thread).
  - **Output**: 500 tokens (summary and key takeaways).
  - **Total Tokens per Thread**: 2,000 tokens.
- **Prompt Caching Efficiency**:
  - Assume 50% of input tokens are cached due to prompt structuring.

#### Monthly OpenAI API Costs

- **Educational Threads per User per Month**:
  - Posts Fetched per User per Month: 200 posts.
  - Educational Posts per User: 200 * 50% = 100 posts.
- **Total Threads Processed per Month**:
  - 100 users * 100 posts = 10,000 posts.

##### Token Calculation

- **Total Input Tokens**:
  - **Without Caching**: 10,000 posts * 1,500 tokens = 15,000,000 tokens.
  - **Cached Tokens**: 50% of input tokens = 7,500,000 tokens.
  - **Uncached Tokens**: 7,500,000 tokens.
- **Total Output Tokens**:
  - 10,000 posts * 500 tokens = 5,000,000 tokens.

##### Cost Calculation

- **Input Tokens Cost**:
  - **Cached Tokens**: (7,500,000 / 1,000,000) * $0.075 = **$0.56**.
  - **Uncached Tokens**: (7,500,000 / 1,000,000) * $0.075 = **$0.56**.
  - **Total Input Cost**: $0.56 + $0.56 = **$1.12**.
- **Output Tokens Cost**:
  - (5,000,000 / 1,000,000) * $0.300 = **$1.50**.
- **Total OpenAI API Cost per Month**:
  - **$1.12 (Input)** + **$1.50 (Output)** = **$2.62**.

#### Using o1-mini for Specialized Tasks

- **Higher Cost**: Only use for critical tasks due to higher pricing.
- **Assumed Usage**: 5% of total threads.
- **Additional Cost**:
  - **Input Tokens**: (10,000 posts * 5% * 1,500 tokens) = 750,000 tokens.
  - **Output Tokens**: (10,000 posts * 5% * 500 tokens) = 250,000 tokens.
- **Cost Calculation**:
  - **Input Tokens**: (750,000 / 1,000,000) * $3.00 = **$2.25**.
  - **Output Tokens**: (250,000 / 1,000,000) * $12.00 = **$3.00**.
- **Total Additional Cost**: $2.25 + $3.00 = **$5.25**.

#### Total OpenAI API Costs

- **gpt-4o-mini**: **$2.62**.
- **o1-mini**: **$5.25**.
- **Combined Total**: **$7.87** per month.

### Additional Costs

- **X API Basic Tier**: $200 per month.
- **OpenAI API Usage**: Approximately **$8** per month.
- **Supabase**: Free tier may suffice initially; paid plans start at $25 per month.
- **Vercel**: Hobby tier is free; Pro plan is $20 per month per user.
- **SendGrid/Mailgun**: Free tiers available; costs increase with email volume.
- **Sentry**: Free tier with limitations; paid plans available.

### Total Monthly Costs

- **X API**: $200
- **OpenAI API**: $8
- **Supabase**: $25 (estimated)
- **Vercel**: $20
- **Total**: **$253 per month**

### Revenue Streams

- **Subscription Model**: Charge users a monthly fee to cover costs.
  - **Example**: $5 per user per month.
  - **Total Revenue**: 100 users * $5 = $500 per month.
- **Advertisements**: Include non-intrusive ads within the app.
- **Sponsorships and Partnerships**: Collaborate with educational institutions or content creators.

### Conclusion

By optimizing API usage, leveraging prompt caching, and selecting cost-effective LLM models like **gpt-4o-mini**, the project is financially feasible under the **Basic Tier** of the X API at **$200 per month**. The total estimated monthly expenses are around **$253**, which can be covered by implementing a subscription model at **$5 per user per month**, generating **$500** in revenue.

---

## Appendices

### X API v2 Endpoints Utilized

- **Bookmarks**
  - `GET /2/users/:id/bookmarks`: Retrieve a user's bookmarked tweets.
- **Likes**
  - `GET /2/users/:id/liked_tweets`: Retrieve a user's liked tweets.

### OpenAI API Integration

- **Models Used**:
  - **gpt-4o-mini**: For general content processing tasks due to its cost efficiency.
  - **o1-mini**: For specialized tasks requiring advanced reasoning (e.g., complex summarization).
- **Prompt Caching**:
  - **Implementation**: Structure prompts to place static content at the beginning and dynamic content at the end.
  - **Benefits**: Reduces latency by up to 80% and cost by 50% for long prompts.

### Prompt Caching Best Practices

- **Structuring Prompts**:
  - Place static instructions and examples at the beginning.
  - Place variable user-specific content at the end.
- **Monitoring**:
  - Track cache hit rates and adjust prompts to maximize caching benefits.
- **Maintaining Cache**:
  - Keep a consistent stream of requests with the same prompt prefix to minimize cache evictions.

### Benefits of Using Selected Technologies

- **Next.js and Vercel**
  - **Performance**: Server-side rendering for faster load times and SEO benefits.
  - **Ease of Deployment**: Seamless integration with Vercel.
  - **Developer Experience**: Automatic code splitting and optimized builds.

- **Supabase**
  - **Scalability**: Built on PostgreSQL with real-time capabilities.
  - **Ease of Use**: Provides authentication, storage, and database services out of the box.
  - **Community and Support**: Active community and comprehensive documentation.

- **OpenAI's gpt-4o-mini**
  - **Cost-effective**: Lower costs compared to other models while providing high-quality output.
  - **Prompt Caching**: Supports caching to reduce costs and latency.

- **GitHub and GitHub Actions**
  - **Version Control**: Industry-standard platform for collaboration.
  - **CI/CD**: Integrated workflows for testing and deployment.

---

**Note**: This PRD is a living document and may be updated as the project progresses and new requirements emerge.