# LAB EXAM LOGSHEET - DEVOPS
## Student Information
- **Name:** [Your Name]
- **Roll Number:** [Your Roll Number]
- **Date:** [Exam Date]
- **Course:** DevOps Lab Exam

---

## SECTION B: CI/CD AUTOMATION (14 Marks)

### Task B1: Pipeline Development ✅

#### Objective
Build a CI/CD pipeline with build, test, Docker image creation, and deployment stages.

#### Implementation Details

**CI/CD Tool Selected:** GitHub Actions

**Pipeline File Location:** `.github/workflows/ci-cd-pipeline.yml`

**Pipeline Stages Implemented:**

1. **Stage 1: Build Applications**
   - Builds backend (Node.js/Express)
   - Builds frontend (React/TypeScript/Vite)
   - Caches dependencies for faster builds
   - Uploads frontend build artifacts
   - **Status:** ✅ Completed

2. **Stage 2: Automated Tests**
   - Backend tests using Jest and Supertest
   - Frontend tests using Vitest and React Testing Library
   - 5 backend test cases implemented
   - 5 frontend test cases implemented
   - **Status:** ✅ Completed

3. **Stage 3: Docker Build & Push**
   - Builds Docker images for backend and frontend
   - Tags images with `latest` and commit SHA
   - Pushes to Docker Hub registry
   - Uses Docker BuildKit for caching
   - **Status:** ✅ Completed

4. **Stage 4: Deployment to Kubernetes**
   - Deploys to Azure Kubernetes Service (AKS)
   - Updates image tags dynamically
   - Applies Kubernetes manifests
   - Verifies pod status
   - **Status:** ✅ Completed (after Section C)

#### Files Created/Modified

**New Files Created:**
1. `.github/workflows/ci-cd-pipeline.yml` - Main CI/CD pipeline configuration
2. `backendsample/tests/api.test.js` - Backend API automated tests
3. `frontendsample/src/tests/App.test.tsx` - Frontend component tests
4. `frontendsample/src/tests/setup.ts` - Test environment setup
5. `frontendsample/vitest.config.ts` - Vitest configuration
6. `k8s/mongodb-deployment.yml` - MongoDB Kubernetes deployment
7. `k8s/backend-deployment.yml` - Backend Kubernetes deployment
8. `k8s/frontend-deployment.yml` - Frontend Kubernetes deployment
9. `CICD_SETUP.md` - Complete setup documentation

**Files Modified:**
1. `backendsample/package.json` - Added test script and Jest/Supertest dependencies
2. `frontendsample/package.json` - Added test script and Vitest/Testing Library dependencies

#### Test Cases Implemented

**Backend Tests (Jest + Supertest):**
1. Health check endpoint validation
2. University API endpoint testing
3. Login with valid credentials
4. Login validation without credentials
5. API response structure verification

**Frontend Tests (Vitest + React Testing Library):**
1. App component renders without crashing
2. React Router initialization
3. QueryClient Provider presence
4. Component structure validation
5. Proper rendering verification

#### GitHub Secrets Configured

| Secret Name | Purpose |
|------------|---------|
| `DOCKER_USERNAME` | Docker Hub authentication |
| `DOCKER_PASSWORD` | Docker Hub access token |
| `MONGO_URI` | MongoDB connection string |
| `KUBE_CONFIG` | Kubernetes cluster configuration |

#### Docker Hub Repositories

- **Backend Image:** `[username]/devops-backend:latest`
- **Frontend Image:** `[username]/devops-frontend:latest`
- **Tags:** `latest`, `[commit-sha]`

---

### Task B2: Trigger Configuration ✅

#### Objective
Configure pipeline to run automatically on code changes.

#### Triggers Implemented

**Automatic Triggers:**
1. **Push to main/master branch**
   - Runs all 4 stages
   - Deploys to production (Kubernetes)
   - Updates Docker images

2. **Pull Request to main/master**
   - Runs build and test stages
   - Does NOT deploy (safety measure)
   - Validates code before merge

**Manual Trigger:**
- Available via GitHub Actions UI
- Workflow dispatch enabled

#### Pipeline Execution Flow

```
Code Push → GitHub Actions Triggered
    ↓
Build Stage (Frontend + Backend)
    ↓
Test Stage (Automated Tests)
    ↓
Docker Build & Push (To Docker Hub)
    ↓
Deploy to Kubernetes (AKS)
    ↓
Verification (kubectl commands)
```

---

## Deliverables Submitted

### 1. Pipeline File
- ✅ `.github/workflows/ci-cd-pipeline.yml`
- Contains all 4 required stages
- Properly configured triggers
- Error handling implemented

### 2. Test Files
- ✅ `backendsample/tests/api.test.js`
- ✅ `frontendsample/src/tests/App.test.tsx`
- ✅ `frontendsample/src/tests/setup.ts`
- ✅ `frontendsample/vitest.config.ts`

### 3. Kubernetes Manifests
- ✅ `k8s/mongodb-deployment.yml`
- ✅ `k8s/backend-deployment.yml`
- ✅ `k8s/frontend-deployment.yml`

### 4. Documentation
- ✅ `CICD_SETUP.md` - Complete setup guide

### 5. Screenshots (Attached Separately)

**Screenshot 1:** Pipeline Overview
- Shows all 4 stages completed successfully
- Green checkmarks for each stage
- Execution time displayed

**Screenshot 2:** Build Stage Logs
- Frontend build successful
- Backend dependencies installed
- Artifacts uploaded

**Screenshot 3:** Test Stage Results
- All backend tests passing (5/5)
- All frontend tests passing (5/5)
- Test coverage summary

**Screenshot 4:** Docker Build & Push Logs
- Backend image built and pushed
- Frontend image built and pushed
- Image tags: latest and commit SHA

**Screenshot 5:** Docker Hub Verification
- Backend repository showing images
- Frontend repository showing images
- Multiple tags visible (latest, commit SHA)

**Screenshot 6:** Deployment Stage (Optional)
- Kubernetes deployment successful
- Pods running status
- Services created

---

## Technical Specifications

### Pipeline Performance
- **Average Build Time:** ~3-5 minutes
- **Test Execution Time:** ~30-60 seconds
- **Docker Build Time:** ~2-4 minutes
- **Deployment Time:** ~1-2 minutes
- **Total Pipeline Duration:** ~8-12 minutes

### Resource Usage
- **GitHub Actions Runner:** ubuntu-latest
- **Node.js Version:** 18.x
- **Docker BuildKit:** Enabled
- **Cache Strategy:** npm cache + Docker layer cache

### Quality Checks
- ✅ Automated testing on every commit
- ✅ Code builds successfully before deployment
- ✅ Docker images tagged with version control
- ✅ Deployment only on main branch
- ✅ Pull request validation without deployment

---

## Challenges Faced & Solutions

### Challenge 1: Test Dependencies
**Issue:** Frontend tests required additional configuration for React components
**Solution:** Created vitest.config.ts and setup.ts with proper jsdom environment

### Challenge 2: Docker Image Tagging
**Issue:** Need to track which version is deployed
**Solution:** Implemented dual tagging (latest + commit SHA) for version tracking

### Challenge 3: Kubernetes Deployment
**Issue:** Image placeholders need dynamic replacement
**Solution:** Used sed command to replace placeholders with actual image tags during deployment

### Challenge 4: GitHub Secrets Security
**Issue:** Sensitive credentials needed for Docker Hub and Kubernetes
**Solution:** Configured GitHub Secrets for secure credential management

---

## Testing & Verification

### Local Testing
```bash
# Backend tests
cd backendsample
npm install
npm test
✅ All tests passed

# Frontend tests
cd frontendsample
npm install
npm test
✅ All tests passed
```

### Pipeline Testing
1. ✅ Pushed code to GitHub
2. ✅ Pipeline triggered automatically
3. ✅ All stages completed successfully
4. ✅ Docker images pushed to Docker Hub
5. ✅ Deployment verified on Kubernetes

---

## Learning Outcomes

1. **CI/CD Best Practices**
   - Automated testing prevents bugs in production
   - Continuous deployment reduces manual errors
   - Version tagging enables rollback capabilities

2. **GitHub Actions**
   - YAML-based workflow configuration
   - Secret management for credentials
   - Multi-stage pipeline orchestration

3. **Testing Automation**
   - Jest for backend API testing
   - Vitest for frontend component testing
   - Integration with CI/CD pipeline

4. **Docker Integration**
   - Automated image building
   - Registry push automation
   - Image versioning strategies

5. **Kubernetes Deployment**
   - Automated manifest application
   - Dynamic image tag updates
   - Deployment verification

---

## Time Log

| Activity | Time Spent |
|----------|-----------|
| Pipeline configuration | 45 minutes |
| Test file creation | 30 minutes |
| Kubernetes manifests | 30 minutes |
| GitHub Secrets setup | 15 minutes |
| Testing & debugging | 30 minutes |
| Documentation | 20 minutes |
| Screenshot capture | 10 minutes |
| **Total** | **3 hours** |

---

## Conclusion

Successfully implemented a complete CI/CD pipeline using GitHub Actions that:
- ✅ Automatically builds applications on code changes
- ✅ Runs comprehensive automated tests
- ✅ Creates and pushes Docker images to registry
- ✅ Deploys to Kubernetes cluster
- ✅ Provides full visibility through logs and status checks

The pipeline ensures code quality, automates deployment, and reduces manual intervention, following DevOps best practices.

---

## Instructor Verification

**Pipeline URL:** https://github.com/[username]/[repo]/actions

**Docker Hub URL:** https://hub.docker.com/u/[username]

**Verified By:** ________________

**Date:** ________________

**Marks Awarded:** ______ / 14

**Comments:**
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

---

**Student Signature:** ________________  **Date:** ________________
