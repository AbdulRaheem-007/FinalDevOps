# CI/CD Pipeline Setup Guide - Section B

## 📋 Overview
This guide covers the complete setup for Section B: CI/CD Automation using GitHub Actions.

---

## 🔧 Prerequisites

1. **GitHub Repository** - Code pushed to GitHub ✅
2. **Docker Hub Account** - For storing Docker images
3. **GitHub Account** - With repository access

---

## 🚀 Setup Instructions

### Step 1: Configure GitHub Secrets

GitHub Secrets are required for the pipeline to work. Add these secrets to your repository:

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

| Secret Name | Description | Example Value |
|------------|-------------|---------------|
| `DOCKER_USERNAME` | Your Docker Hub username | `yourusername` |
| `DOCKER_PASSWORD` | Your Docker Hub password or access token | `dckr_pat_xxxxx` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `KUBE_CONFIG` | Kubernetes config (base64 encoded) | *Add after Section C* |

#### How to get Docker Hub Access Token:
1. Login to Docker Hub
2. Go to **Account Settings** → **Security**
3. Click **New Access Token**
4. Copy the token and use it as `DOCKER_PASSWORD`

#### How to encode KUBE_CONFIG (for Section C):
```bash
# After setting up AKS cluster
cat ~/.kube/config | base64 -w 0
```

---

### Step 2: Update Docker Hub Image Names

The pipeline uses your Docker Hub username. Make sure your Docker Hub account has these repositories:
- `yourusername/devops-backend`
- `yourusername/devops-frontend`

Or create them automatically by pushing images (the pipeline will do this).

---

### Step 3: Verify Pipeline Files

Ensure these files exist in your repository:

```
sampletest/
├── .github/
│   └── workflows/
│       └── ci-cd-pipeline.yml       ✅ Main pipeline file
├── backendsample/
│   ├── tests/
│   │   └── api.test.js              ✅ Backend tests
│   ├── package.json                 ✅ Updated with test script
│   └── Dockerfile                   ✅ From Section A
├── frontendsample/
│   ├── src/
│   │   └── tests/
│   │       ├── App.test.tsx         ✅ Frontend tests
│   │       └── setup.ts             ✅ Test setup
│   ├── package.json                 ✅ Updated with test script
│   ├── vitest.config.ts             ✅ Vitest config
│   └── Dockerfile                   ✅ From Section A
└── k8s/
    ├── mongodb-deployment.yml       ✅ MongoDB K8s manifest
    ├── backend-deployment.yml       ✅ Backend K8s manifest
    └── frontend-deployment.yml      ✅ Frontend K8s manifest
```

---

### Step 4: Install Test Dependencies Locally (Optional)

To test locally before pushing:

**Backend:**
```bash
cd backendsample
npm install
npm test
```

**Frontend:**
```bash
cd frontendsample
npm install
npm test
```

---

### Step 5: Push Code to GitHub

```bash
git add .
git commit -m "Add CI/CD pipeline with automated tests"
git push origin main
```

---

### Step 6: Monitor Pipeline Execution

1. Go to your GitHub repository
2. Click on **Actions** tab
3. You should see the workflow running: "CI/CD Pipeline"
4. Click on the running workflow to see details

**Pipeline Stages:**
- ✅ **Build Applications** - Builds frontend and backend
- ✅ **Run Automated Tests** - Runs Jest and Vitest tests
- ✅ **Build and Push Docker Images** - Creates and pushes to Docker Hub
- ✅ **Deploy to Kubernetes** - Deploys to K8s (will skip until Section C)

---

## 📸 Screenshots Required for Submission

### Screenshot 1: Pipeline Overview
- Navigate to **Actions** tab
- Show the successful pipeline run
- Should display all 4 stages completed ✅

### Screenshot 2: Build Stage
- Click on the workflow run
- Expand "Build Applications" job
- Show successful build logs

### Screenshot 3: Test Stage
- Expand "Run Automated Tests" job
- Show test results passing

### Screenshot 4: Docker Build & Push Stage
- Expand "Build and Push Docker Images" job
- Show Docker images being pushed to Docker Hub

### Screenshot 5: Docker Hub Verification
- Login to Docker Hub
- Show the pushed images with tags (latest and commit SHA)

---

## 🔍 Pipeline Triggers

The pipeline is configured to run on:
- **Push to main/master branch** - Automatic deployment
- **Pull requests to main/master** - Testing only (no deployment)

---

## 🧪 Testing the Pipeline

### Test 1: Make a small change
```bash
# Edit a file
echo "// Test change" >> backendsample/src/server.js

# Commit and push
git add .
git commit -m "Test CI/CD pipeline"
git push origin main
```

### Test 2: Create a Pull Request
1. Create a new branch
2. Make changes
3. Push and create PR
4. Pipeline should run tests but NOT deploy

---

## ✅ Verification Checklist

- [ ] GitHub Secrets configured (DOCKER_USERNAME, DOCKER_PASSWORD, MONGO_URI)
- [ ] Pipeline file exists at `.github/workflows/ci-cd-pipeline.yml`
- [ ] Test files created for backend and frontend
- [ ] package.json files updated with test scripts
- [ ] Code pushed to GitHub
- [ ] Pipeline runs successfully
- [ ] All 4 stages complete (Build, Test, Docker, Deploy)
- [ ] Docker images visible in Docker Hub
- [ ] Screenshots captured for submission

---

## 🐛 Troubleshooting

### Pipeline fails at Build stage
- Check Node.js version compatibility
- Verify package.json syntax
- Check for missing dependencies

### Pipeline fails at Test stage
- Run tests locally first: `npm test`
- Check test file syntax
- Verify test dependencies installed

### Pipeline fails at Docker stage
- Verify Docker Hub credentials in GitHub Secrets
- Check Dockerfile syntax
- Ensure DOCKER_USERNAME matches your actual username

### Pipeline fails at Deploy stage
- This is expected until Section C (AKS setup)
- The stage will skip if KUBE_CONFIG is not set
- Add KUBE_CONFIG secret after completing Section C

---

## 📝 What to Include in Logsheet

### Section B: CI/CD Automation

**Task B1: Pipeline Development**

**Files Created:**
1. `.github/workflows/ci-cd-pipeline.yml` - Main CI/CD pipeline
2. `backendsample/tests/api.test.js` - Backend API tests
3. `frontendsample/src/tests/App.test.tsx` - Frontend component tests
4. `frontendsample/src/tests/setup.ts` - Test setup configuration
5. `frontendsample/vitest.config.ts` - Vitest configuration
6. `k8s/mongodb-deployment.yml` - MongoDB Kubernetes manifest
7. `k8s/backend-deployment.yml` - Backend Kubernetes manifest
8. `k8s/frontend-deployment.yml` - Frontend Kubernetes manifest

**Files Modified:**
1. `backendsample/package.json` - Added test script and dependencies
2. `frontendsample/package.json` - Added test script and dependencies

**Pipeline Stages:**
1. ✅ Build Stage - Builds frontend and backend applications
2. ✅ Test Stage - Runs automated tests (Jest for backend, Vitest for frontend)
3. ✅ Docker Build & Push - Creates Docker images and pushes to Docker Hub
4. ✅ Deploy Stage - Deploys to Kubernetes cluster (AKS)

**Task B2: Trigger Configuration**

**Triggers Configured:**
- Automatic trigger on push to main/master branch
- Automatic trigger on pull requests to main/master branch
- Manual trigger option available via GitHub Actions UI

**Screenshots Submitted:**
1. Pipeline overview showing all stages completed
2. Build stage logs
3. Test stage results
4. Docker build and push logs
5. Docker Hub showing pushed images with tags

**Tools Used:**
- GitHub Actions for CI/CD
- Docker Hub for container registry
- Jest for backend testing
- Vitest for frontend testing
- kubectl for Kubernetes deployment

**Time Spent:** [Fill in your time]

**Challenges Faced:**
- [List any challenges you encountered]

**Solutions Implemented:**
- [How you solved the challenges]

---

## 🎯 Next Steps

After completing Section B:
1. Proceed to **Section C: Kubernetes on Azure (AKS)**
2. Set up AKS cluster
3. Add KUBE_CONFIG secret to GitHub
4. Re-run pipeline to deploy to AKS
5. Verify deployment with `kubectl get pods` and `kubectl get svc`

---

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs for detailed error messages
2. Verify all secrets are correctly configured
3. Test components locally before pushing
4. Review Docker Hub for image push status

---

**Good luck with your lab exam! 🚀**
