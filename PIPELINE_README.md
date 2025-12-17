# CI/CD Pipeline - Active

This repository has an active CI/CD pipeline configured with GitHub Actions.

## Pipeline Status

✅ **Workflow File**: `.github/workflows/ci-cd-pipeline.yml`  
✅ **Triggers**: Push to main/master/develop, Pull Requests  
✅ **Stages**: Build → Test → Docker → Deploy  

## View Pipeline

**GitHub Actions**: https://github.com/AbdulRaheem-007/FinalDevOps/actions

## Pipeline Stages

1. **Build & Test Backend** - Validates backend code and runs tests
2. **Build & Test Frontend** - Validates frontend code and runs tests  
3. **Build & Push Docker Images** - Creates and pushes Docker images to Docker Hub
4. **Deploy to Staging** - Deploys application using Docker Compose
5. **Send Notification** - Reports pipeline status

## Quick Commands

```bash
# View workflow status
gh workflow list

# View recent runs
gh run list

# Watch latest run
gh run watch
```

## Documentation

- **Full Documentation**: [CICD_PIPELINE_DOCS.md](CICD_PIPELINE_DOCS.md)
- **Quick Start**: [QUICK_START.md](QUICK_START.md)
- **Section B Status**: [SECTION_B_FINAL_STATUS.md](SECTION_B_FINAL_STATUS.md)

---

**Last Updated**: 2025-12-17  
**Status**: ✅ Active and Ready
