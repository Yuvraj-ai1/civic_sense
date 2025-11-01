# 🚀 Quick Start - Push to GitHub

## ⚠️ Git Installation Required

**Git is not currently installed on your system.** You need to install it first to push to GitHub.

---

## 📥 Step 1: Install Git

### Option A: Install Git for Windows (Recommended)
1. **Download Git**: https://git-scm.com/download/win
2. **Run the installer** (use default settings)
3. **Restart your terminal/PowerShell** after installation
4. **Verify installation**: Open PowerShell and run `git --version`

### Option B: Use GitHub Desktop (Easier GUI)
1. **Download**: https://desktop.github.com/
2. **Sign in** with your GitHub account
3. **Skip to Step 3** below

---

## 🔧 Step 2: After Installing Git

Once Git is installed, you have **3 options**:

### Option 1: Run the Automated Script (Easiest)
Simply double-click:
- **`push-to-github.bat`** (Windows batch file)
- OR run in PowerShell: `.\push-to-github.ps1`

### Option 2: Manual Commands (If script doesn't work)
Open PowerShell in your project folder and run:

```powershell
cd C:\Users\yash1\OneDrive\Documents\cc2

git init
git add .
git commit -m "Initial commit: Civic Awareness Quiz System"
git remote add origin https://github.com/Yuvraj-ai1/voting-right-.git
git branch -M main
git push -u origin main
```

### Option 3: GitHub Desktop (Recommended for beginners)
1. Open GitHub Desktop
2. Click **File → Add Local Repository**
3. Browse to: `C:\Users\yash1\OneDrive\Documents\cc2`
4. Click **Add Repository**
5. Review changes and write commit message
6. Click **Commit to main**
7. Click **Publish repository** or **Push origin**

---

## ⚙️ Step 3: Enable GitHub Pages

After successfully pushing to GitHub:

1. **Go to your repository**: https://github.com/Yuvraj-ai1/voting-right-
2. **Click Settings** (top menu)
3. **Click Pages** (left sidebar)
4. **Under "Source"**, select **"GitHub Actions"**
5. **Click Save**

---

## ✅ Step 4: Your Site is Live!

After enabling GitHub Pages and the GitHub Actions workflow completes (2-5 minutes):

**Your website will be live at:**
🌐 **https://yuvraj-ai1.github.io/voting-right-/**

---

## 🔐 Authentication Issues?

If you get authentication errors when pushing:

### Solution 1: Use Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Give it a name (e.g., "Civic Quiz Push")
4. Select scope: **repo** (full control)
5. Click **Generate token**
6. **Copy the token** (you won't see it again!)
7. When Git asks for password, **paste the token** instead

### Solution 2: Use GitHub Desktop
GitHub Desktop handles authentication automatically - easiest option!

---

## 📋 What's Ready in Your Project

✅ **Frontend React App** - Complete with quiz, leaderboard, gamification  
✅ **GitHub Actions Workflow** - Auto-deploy on push  
✅ **Vite Configuration** - Base path set for GitHub Pages  
✅ **All Source Files** - Ready to commit  
✅ **.gitignore** - Configured to exclude unnecessary files  

---

## 🆘 Need Help?

- **Git Installation Guide**: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- **GitHub Desktop Guide**: https://docs.github.com/en/desktop
- **GitHub Pages Docs**: https://docs.github.com/en/pages

---

## 🎯 Checklist

- [ ] Install Git or GitHub Desktop
- [ ] Verify Git is working (`git --version`)
- [ ] Push code to GitHub (use script or manual)
- [ ] Enable GitHub Pages (Settings → Pages → GitHub Actions)
- [ ] Wait for deployment (2-5 minutes)
- [ ] Visit your live site!

---

**Once Git is installed, everything is ready to go! 🚀**
