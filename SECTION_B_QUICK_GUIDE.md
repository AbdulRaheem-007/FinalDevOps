# Section B: CI/CD Pipeline - Quick Reference

## ✅ What We Created

### 1. GitHub Actions Pipeline
**File:** `.github/workflows/ci-cd-pipeline.yml`
- 4 stages: Build → Test → Docker → Deploy
- Triggers on push and pull requests
- Automated deployment to Kubernetes

### 2. Test Files
**Backend:** `backendsample/tests/api.test.js`
- 5 test cases using Jest + Supertest

**Frontend:** `frontendsample/src/tests/App.test.tsx`
- 5 test cases using Vitest + React Testing Library

### 3. Kubernetes Manifests
- `k8s/mongodb-deployment.yml` - Database with persistent storage
- `k8s/backend-deployment.yml` - Backend API (2 replicas)
- `k8s/frontend-deployment.yml` - Frontend UI (2 replicas)

---

## 🚀 How to Use

### Step 1: Add GitHub Secrets
Go to: **GitHub Repo → Settings → Secrets → Actions**

Add these secrets:
- `DOCKER_USERNAME` - Your Docker Hub username
- `DOCKER_PASSWORD` - Your Docker Hub password/token
- `MONGO_URI` - Your MongoDB connection string
- `KUBE_CONFIG` - Your Kubernetes config (base64 encoded) *[Add after Section C]*

### Step 2: Push Code
```bash
git add .
git commit -m "Add CI/CD pipeline"
git push origin main
```

### Step 3: Monitor Pipeline
1. Go to GitHub → Actions tab
2. Watch the pipeline run
3. All 4 stages should complete ✅

### Step 4: Verify Docker Hub
1. Login to Docker Hub
2. Check for images:
   - `yourusername/devops-backend:latest`
   - `yourusername/devops-frontend:latest`

---

## 📸 Screenshots Needed

1. **Pipeline Overview** - All stages green ✅
2. **Build Stage** - Build logs
3. **Test Stage** - Test results passing
4. **Docker Stage** - Images pushed to Docker Hub
5. **Docker Hub** - Images visible with tags

---

## 📋 For Logsheet

**What to write:**
- Tool used: GitHub Actions
- Stages: Build, Test, Docker Build/Push, Deploy
- Tests: 5 backend + 5 frontend tests
- Triggers: Push to main, Pull requests
- Time spent: ~2-3 hours

**Files to mention:**
- Pipeline: `.github/workflows/ci-cd-pipeline.yml`
- Tests: `backendsample/tests/api.test.js`, `frontendsample/src/tests/App.test.tsx`
- K8s: `k8s/*.yml` (3 files)

---

## 🐛 Troubleshooting

**Pipeline fails?**
- Check GitHub Secrets are set correctly
- Verify Docker Hub credentials
- Run tests locally first: `npm test`

**Tests fail?**
- Install dependencies: `npm install`
- Check test files for syntax errors

**Docker push fails?**
- Verify DOCKER_USERNAME matches your actual username
- Check Docker Hub token is valid

---

## ✅ Checklist

- [ ] GitHub Secrets configured
- [ ] Code pushed to GitHub
- [ ] Pipeline runs successfully
- [ ] All 4 stages complete
- [ ] Docker images in Docker Hub
- [ ] Screenshots captured
- [ ] Logsheet filled

---

**Good luck! 🎉**
