# 🚀 GitHub Push Guide - Civic Quiz App

## Step-by-Step Instructions to Push to GitHub

### Prerequisites
1. Make sure Git is installed on your system
2. If Git is not recognized, install it from: https://git-scm.com/download/win
3. Restart your terminal after installing Git

### Step 1: Open Git Bash or PowerShell
Open a new terminal/PowerShell window in your project directory:
```powershell
cd C:\Users\yash1\OneDrive\Documents\cc2
```

### Step 2: Initialize Git Repository (if not already done)
```bash
git init
```

### Step 3: Check Git Status
```bash
git status
```

### Step 4: Add All Files
```bash
git add .
```

### Step 5: Create Initial Commit
```bash
git commit -m "Initial commit: Civic Awareness Quiz System with gamification features"
```

### Step 6: Add Remote Repository
```bash
git remote add origin https://github.com/Yuvraj-ai1/voting-right-.git
```

If the remote already exists, use:
```bash
git remote set-url origin https://github.com/Yuvraj-ai1/voting-right-.git
```

### Step 7: Check Current Branch
```bash
git branch
```

### Step 8: Rename Branch to Main (if needed)
```bash
git branch -M main
```

### Step 9: Push to GitHub
```bash
git push -u origin main
```

If you get authentication errors, you may need to:
- Use a Personal Access Token instead of password
- Or set up SSH keys

---

## Alternative: Using GitHub Desktop

If command line Git doesn't work, you can use GitHub Desktop:

1. **Download GitHub Desktop**: https://desktop.github.com/
2. **Sign in** with your GitHub account
3. **Add Local Repository**:
   - File → Add Local Repository
   - Browse to: `C:\Users\yash1\OneDrive\Documents\cc2`
   - Click "Add Repository"
4. **Commit Changes**:
   - Review all changes
   - Write commit message: "Initial commit: Civic Awareness Quiz System"
   - Click "Commit to main"
5. **Push to GitHub**:
   - Click "Push origin"
   - Or: Repository → Push origin

---

## After Pushing: Enable GitHub Pages

1. **Go to Repository Settings**:
   - Visit: https://github.com/Yuvraj-ai1/voting-right-/settings

2. **Navigate to Pages**:
   - Click on "Pages" in the left sidebar

3. **Configure Source**:
   - Source: Select "GitHub Actions"
   - Click "Save"

4. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically build and deploy
   - Check Actions tab to see deployment progress

5. **Access Your Site**:
   - Your site will be live at: `https://yuvraj-ai1.github.io/voting-right-/`
   - This may take 2-5 minutes after the first push

---

## Troubleshooting

### If Git is not recognized:
- Install Git from: https://git-scm.com/download/win
- Restart your terminal/PowerShell

### If authentication fails:
- Use GitHub Personal Access Token
- Generate token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Use token as password when pushing

### If push is rejected:
- Pull first: `git pull origin main --allow-unrelated-histories`
- Then push again: `git push -u origin main`

### If GitHub Actions fail:
- Check the Actions tab in your repository
- Ensure the workflow file is in: `.github/workflows/deploy.yml`
- Verify `vite.config.js` has correct base path: `/voting-right-/`

---

## Quick Command Summary

```bash
cd C:\Users\yash1\OneDrive\Documents\cc2
git init
git add .
git commit -m "Initial commit: Civic Awareness Quiz System"
git remote add origin https://github.com/Yuvraj-ai1/voting-right-.git
git branch -M main
git push -u origin main
```

---

## ✅ Checklist

- [ ] Git is installed and working
- [ ] All files are added to git
- [ ] Initial commit is created
- [ ] Remote repository is added
- [ ] Code is pushed to GitHub
- [ ] GitHub Pages is enabled
- [ ] Site is accessible at https://yuvraj-ai1.github.io/voting-right-/

---

**Good luck! 🚀**
