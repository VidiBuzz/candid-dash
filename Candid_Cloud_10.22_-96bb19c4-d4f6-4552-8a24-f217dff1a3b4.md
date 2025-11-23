Private SmartCloud Dashboard Apps
### Complete SSO Architecture
**Date:** October 21, 2025
**Status:** 1 of 7 Applications Live
- Ryan 10-22
	Updates to KeyCloak:
	Modern, branded email templates with purple gradient design
	* Updated Dockerfile to include custom theme in build
	* Dashboard with Next.js (admin panel, user management)
	* Bulk import scripts for staff members
	* Login page styling with responsive design
	* Email verification templates (HTML and text versions)

	***PR for Keycloak-Vidi (Candid Gatekeeper)***
	[https://github.com/VidiBuzz/keycloak-vidi](https://github.com/VidiBuzz/keycloak-vidi)
	[login.candidstudios.net](login.candidstudios.net)
	[dashboard.candidstudios.net](dashboard.candidstudios.net)
	---
## 🏢 Central Authentication
**Candid GateKeeper: (Keycloak SSO Server):**
### **URL: **✅ login.candidstudios.net
*  [https://keycloak-production-4dfd.up.railway.app](https://keycloak-production-4dfd.up.railway.app)
* **Admin Console:** [https://keycloak-production-4dfd.up.railway.app/admin/](https://keycloak-production-4dfd.up.railway.app/admin/)
* **Custom Domain (Planned):** login.candidstudios.net
* **Realm:** CandidStudios
* **Users:** 32 Candid Studios users configured
* **Database:** PostgreSQL on Railway
---
## 🌐 7 Applications Using Keycloak SSO
### 1. ✅ media.candidstudios.net - R2 Explorer (LIVE)
* **Platform:** Cloudflare Workers R2 File Explorer
* **Auth Method:** OIDC (OpenID Connect)
* **Status:** DEPLOYED - Ready for production
* **Users:** All 32 Candid Studios users
* **Access:** 4 R2 buckets (scx, candid-studios, candidclients, vidir2)
* **Features:**
	* Browse/upload/download files
	* Individual user authentication
	* Secure session management
	* No shared passwords
### 2. 📋 www.candidstudios.net - Main WordPress Site (PLANNED)
* **Platform:** WordPress CMS
* **Auth Method:** SAML 2.0 or OIDC
* **Status:** Planning phase
* **Users:** Clients, photographers, admin staff
* **Access:** Public site with authenticated client portal
* **Features:**
	* Photography portfolio
	* Client galleries
	* Booking system
	* Blog/news
### 3. 📋 www.vidiblast.net - Nextcloud Community (PLANNED)
* **Platform:** Nextcloud AIO (All-in-One)
* **Auth Method:** OIDC (preferred over SAML)
* **Status:** Planning phase
* **Users:** Community members, collaborators
* **Access:** File sharing, collaboration hub
* **Railway Service:** nextcloud-vidi (already deployed)
* **Database:** PostgreSQL on Railway
* **Features:**
	* File storage and sharing
	* Calendar/contacts sync
	* Office document editing
	* Team collaboration
### 4. 📋 dash.candidstudios.net - Custom Dashboard (DEV is LIVE localhost private)
* **Platform:** React/Next.js or Vue.js
* **Auth Method:** OIDC
* **Status:** Planning phase
* **Users:** Internal staff, photographers, managers
* **Access:** Role-based access control
* **Features:**
	* Analytics and metrics
	* User management
	* System monitoring
	* Quick actions
### 5. 📋 app.candidstudios.net - Go High Level CRM 
* **Platform:** Go High Level (Third-party SaaS)
* **Auth Method:** SAML 2.0 or GHL SSO
* **Status:** Planning phase
* **Users:** Sales team, customer service, management
* **Access:** Internal staff only
* **Features:**
	* Customer relationship management
	* Sales pipeline
	* Marketing automation
	* Communication tracking
### 6. 📋 earn.candidstudios.net - Affiliate Program (BETA TEST)
* **Platform:** AffiliateWP or custom solution
* **Auth Method:** OIDC
* **Status:** Planning phase
* **Users:** Affiliates, partners, referrers
* **Access:** Public signup with affiliate tracking
* **Features:**
	* Referral link generation
	* Commission tracking
	* Payout management
	* Performance analytics
### 7. 🚧 voice.candidstudios.net - AI Voice Agent (IN-DEV)
* **Platform:** VAPI or LiveKit (custom implementation)
* **Auth Method:** OIDC
* **Status:** In development with Ryan
* **Users:** Internal staff, designated users
* **Access:** Authenticated users with voice agent access
* **Features:**
	* AI-powered voice interactions
	* Automated call handling
	* Voice-based workflows
	* Integration with CRM/other apps
---
## 🔐 Authentication Methods
### OIDC (OpenID Connect) - Modern Standard
**Used by:**
* ✅ media.candidstudios.net (R2 Explorer) - LIVE
* 📋 vidiblast.net (Nextcloud)
* 📋 dash.candidstudios.net (Dashboard)
* 📋 earn.candidstudios.net (Affiliate)
* 🚧 voice.candidstudios.net (AI Voice Agent)
**Why OIDC:**
* JSON-based (lightweight, modern)
* Built on OAuth 2.0
* Perfect for web apps and APIs
* Mobile-friendly
* Easier to implement
### SAML 2.0? - Enterprise Standard
**Used by:**
* 📋 candidstudios.net (WordPress)
* 📋 app.candidstudios.net (Go High Level CRM)
**Why SAML:**
* Mature, widely supported
* Built-in plugins for WordPress
* Enterprise SaaS platforms prefer it
* Rich attribute mapping
---
## 📊 Implementation Status
|Application|Domain|Platform|Auth|Status|
|---|---|---|---|---|
|R2 Explorer|media.candidstudios.net|Cloudflare Workers|OIDC|✅ LIVE|
|WordPress|candidstudios.net|WordPress CMS|SAML|📋 Planned|
|Nextcloud|vidiblast.net|Nextcloud AIO|OIDC|📋 Planned|
|Dashboard|dash.candidstudios.net|React/Next.js|OIDC|📋 Planned|
|CRM|app.candidstudios.net|Go High Level|SAML|📋 Planned|
|Affiliate|earn.candidstudios.net|AffiliateWP|OIDC|📋 Planned|
|AI Voice|voice.candidstudios.net|VAPI/LiveKit|OIDC|🚧 In Dev|
**Legend:**
* ✅ LIVE - Deployed and operational
* 📋 Planned - Documented, ready to implement
* 🚧 In Dev - Actively being developed
---
## 🚀 Rollout Plan
### Phase 1: Foundation (Complete)
* ✅ Deploy Keycloak to Railway
* ✅ Configure CandidStudios realm
* ✅ Add 32 users to Keycloak
* ✅ Set up branded email templates
* ✅ Deploy first application (R2 Explorer)
### Phase 2: File Management (In Progress)
* ✅ R2 Explorer OIDC integration (media.candidstudios.net)
* ⏳ Add custom domain in Cloudflare
* ⏳ Test with all 32 users
* 📋 Integrate Nextcloud OIDC (vidiblast.net)
### Phase 3: Public Websites (Next Week)
* 📋 WordPress SAML integration (candidstudios.net)
* 📋 Client portal configuration
* 📋 Test client access workflows
### Phase 4: Internal Tools (Next 2 Weeks)
* 📋 Custom Dashboard OIDC (dash.candidstudios.net)
* 📋 Go High Level CRM SAML (app.candidstudios.net)
* 📋 Role-based access control implementation
### Phase 5: Growth Tools (Next Month)
* 📋 Affiliate Program OIDC (earn.candidstudios.net)
* 🚧 AI Voice Agent OIDC (voice.candidstudios.net)
* 📋 Advanced analytics and reporting
---
## 👥 User Groups & Roles
**Keycloak Groups:**
1. **Administrators** - Full access to all systems
1. **Photographers** - Access to WordPress, Dashboard, CRM
1. **Clients** - Access to client portal, file sharing
1. **Community Members** - Nextcloud access
1. **Affiliates** - Affiliate program access
1. **CRM Users** - Sales team, customer service
1. **Voice Users** - AI voice agent access
**Role-Based Access:**
* `admin` - System administrators
* `photographer` - Professional photographers
* `client` - Photography clients
* `community_member` - Nextcloud users
* `affiliate` - Referral partners
* `sales_rep` - CRM sales team
* `support_staff` - Customer service
* `voice_user` - AI voice agent access
---
## 🔒 Security Features
**Implemented:**
* ✅ HTTPS only (all domains)
* ✅ HttpOnly secure cookies
* ✅ CSRF protection (SameSite cookies)
* ✅ JWT token validation
* ✅ Encrypted session storage
* ✅ OAuth 2.0 + OIDC standards
* ✅ Individual user accounts (no shared passwords)
**Planned:**
* 📋 Multi-factor authentication (MFA)
* 📋 IP-based access restrictions
* 📋 Audit logging and monitoring
* 📋 Automated security scanning
* 📋 Regular penetration testing
---
## 📈 Benefits of Unified SSO
### For Users:
* ✅ Single login for all 7 applications
* ✅ One password to remember
* ✅ Password reset from anywhere
* ✅ Profile managed in one place
* ✅ Session persists across apps
### For Administrators:
* ✅ Centralized user management
* ✅ Instant access revocation
* ✅ Role-based permissions
* ✅ Audit trail of all logins
* ✅ Automated user provisioning
### For Security:
* ✅ No shared passwords
* ✅ Industry-standard protocols
* ✅ Regular security updates
* ✅ Centralized monitoring
* ✅ Easy compliance reporting
---
## 🎯 Success Metrics
**Current (Week 1):**
* ✅ 1 of 7 applications integrated
* ✅ 32 users configured in Keycloak
* ✅ 0 security incidents
* ✅ 100% uptime (Keycloak)
**Target (Month 1):**
* 🎯 4 of 7 applications integrated
* 🎯 All 32 users actively using SSO
* 🎯 <5 second average login time
* 🎯 99.9% uptime across all apps
**Target (Quarter 1):**
* 🎯 All 7 applications integrated
* 🎯 MFA enabled for admin accounts
* 🎯 Audit logging fully implemented
* 🎯 Zero password-related support tickets
---
## 📞 Support & Resources
### Keycloak Admin:
* **Console:** [https://keycloak-production-4dfd.up.railway.app/admin/](https://keycloak-production-4dfd.up.railway.app/admin/)
* **Username:** admin
* **Password:** 2468VidiSmart.
### Current Live Application:
* **R2 Explorer:** [https://r2-explorer.ryanmayiras.workers.dev](https://r2-explorer.ryanmayiras.workers.dev)
* **Production URL (after domain setup):** [https://media.candidstudios.net](https://media.candidstudios.net)
### Documentation:
* `KEYCLOAK-SSO-ARCHITECTURE.md` - Complete architecture guide
* `READY-FOR-MEDIA-CANDIDSTUDIOS-NET.md` - R2 Explorer deployment
* `ADD-MEDIA-DOMAIN-STEPS.md` - Domain setup instructions
* `KEYCLOAK-SETUP-GUIDE.md` - Step-by-step Keycloak guide
---
## 🗺️ Architecture Diagram
```
┌─────────────────────────────────────────────────────────────────┐
│                 Keycloak SSO Server                             │
│         keycloak-production-4dfd.up.railway.app                 │
│         (Future: login.candidstudios.net)                       │
│                                                                 │
│  - 32 Candid Studios Users                                      │
│  - CandidStudios Realm                                          │
│  - PostgreSQL Database                                          │
└───────────────────────────┬─────────────────────────────────────┘
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                  │
    ┌────▼────┐      ┌─────▼─────┐      ┌────▼────┐
    │  SAML   │      │   OIDC    │      │  OIDC   │
    │ Clients │      │  Clients  │      │ Clients │
    └────┬────┘      └─────┬─────┘      └────┬────┘
         │                 │                  │
    ┌────▼────┐      ┌─────▼─────┐      ┌────▼────┐
    │WordPress│      │R2 Explorer│      │AI Voice │
    │  SAML   │      │✅ OIDC    │      │🚧 OIDC  │
    │candidstudios│  │media.     │      │voice.   │
    │.net     │      │candidstudios│    │candidstudios
    │📋      │       │.net (LIVE)│      │.net (DEV)│
    └─────────┘      └───────────┘      └─────────┘

    ┌─────────┐      ┌───────────┐      ┌─────────┐
    │GHL CRM  │      │ Nextcloud │      │Dashboard│
    │  SAML   │      │📋 OIDC    │      │📋 OIDC  │
    │app.     │      │vidiblast  │      │dash.    │
    │candidstudios│  │.net       │      │candidstudios
    │.net 📋 │       │           │      │.net     │
    └─────────┘      └───────────┘      └─────────┘

                     ┌───────────┐
                     │Affiliate  │
                     │📋 OIDC    │
                     │earn.      │
                     │candidstudios
                     │.net       │
                     └───────────┘
```
---
## ✅ Summary
**Total Applications:** 7
* **Live:** 1 (media.candidstudios.net)
* **In Development:** 1 (voice.candidstudios.net)
* **Planned:** 5 (all documented and ready)
**Authentication:**
* **OIDC:** 5 applications (preferred for modern apps)
* **SAML:** 2 applications (enterprise/legacy compatibility)
**Users:** 32 Candid Studios users configured in Keycloak
**Next Action:** Add custom domain `media.candidstudios.net` in Cloudflare dashboard (3 minutes)
---
**Last Updated:** October 21, 2025
**Maintained By:** Candid Studios DevOps Team

- CandidCloud Main Hub 
	(vidiblast.net)
	In addition to existing apps. The main Private Cloud (NextCloud) community page will also act as the visual knowledge base hub and answer engine for all corporate intelligence. With the following planned upgrades.
	## Integration of Apps into the window on the hub
	* Full Screen
	* With Left Bar or Top Bar
	* Vue 3.0 Custom Programming

- Private LLM - Real Time SmartSearch
	* Conversion to Visual KnowledgeGraph
	* Schema Conversion for Vector
	* Roundtrip Conversion back to structured data (Postgre)
	* Use cases for high-dimensional content
	* Answer engine output from vector 
## Indexing of all documents, images, video (multimodal)
* Smart Vector Embeds - Which Vector Db?
	* Weaviate
	* Qdrant
	* PGVector
	* Cohere
* Which Embedding Model
	* CLIP
	* _joint embedding space_
	Here are the top models and platforms that can do this, broken down by category.
	## 1. Specialized Video-First Platforms
	This category is led by the company you've already researched. These services are "video-native," meaning they are built from the ground up to understand video, audio, and text contextually, rather than just sampling frames.
	**Twelve Labs:** This is their core business. Their **Marengo** model (`Marengo-retrieval-2.7`) is designed specifically for this. It embeds video, images, and text into a single 1024-dimensional vector space, allowing for powerful cross-modal search (e.g., search with text, get a video segment; search with an image, get a matching video).

	## 2. Major Cloud Provider Models
	These are the direct competitors from the major cloud platforms, which you've also looked into.
	**Google Vertex AI:** Google has a model named **`multimodalembedding`**. This model explicitly accepts text, images, and video as input. It generates 1408-dimensional embeddings, placing all three modalities into the same semantic space. This is a direct competitor to Twelve Labs, offered as a managed API.
	***does not convert audio track with video
	**Amazon Bedrock:** Amazon's **Titan Multimodal Embeddings** model _currently only supports text and images_. According to their official workshop documentation, video search is a planned feature listed as "[Coming Soon]." This is a key difference from Google's offering.

	## 3. Open-Source Models
	`pgvector`
	**Meta's ImageBind:** This is likely the most famous open-source model that perfectly fits your request. **ImageBind** creates a single, joint embedding space for _seven_ modalities: **text, image/video, audio, depth, thermal, and IMU** (inertial measurement units). This means you can embed a video, a text string, or an image and compare them all directly. It's available on GitHub and also as a deployable model in Google's Vertex AI Model Garden.

		**The "DIY" Frame-Aggregation Method:**
		**Choose a Model:** Use a powerful, open-source text-image model like **CLIP** or the embedding component of a model like **Qwen-VL** or **InternVL, Qwen3-Omni**.
		**Embed Text & Images:** Pass text and still images through the model directly to get their vectors.
		**Embed Videos:** For each video, you extract keyframes (e.g., one frame per second), run each frame through the image embedder, and then "pool" or **average** all the frame vectors into a single vector that represents the whole video.
	This DIY method is less "video-native" than Twelve Labs (as it might miss some audio/temporal context), but it's very effective for visual similarity search and can be implemented with open-source tools on your own hardware.
