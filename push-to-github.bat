@echo off
echo ========================================
echo GitHub Push Script for Civic Quiz App
echo ========================================
echo.

cd /d "%~dp0"

REM Try to find git
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not found in PATH!
    echo.
    echo Please install Git from: https://git-scm.com/download/win
    echo Or use GitHub Desktop: https://desktop.github.com/
    echo.
    pause
    exit /b 1
)

echo Git found! Starting push process...
echo.

REM Initialize git if needed
if not exist ".git" (
    echo Initializing Git repository...
    git init
    echo.
)

REM Add all files
echo Adding all files...
git add .
echo.

REM Commit
echo Creating commit...
git commit -m "Initial commit: Civic Awareness Quiz System with gamification features"
echo.

REM Add remote if not exists
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo Adding remote repository...
    git remote add origin https://github.com/Yuvraj-ai1/voting-right-.git
    echo.
)

REM Rename branch to main
git branch -M main 2>nul

REM Push
echo ========================================
echo Ready to push to GitHub!
echo You may need to authenticate.
echo ========================================
echo.
pause

echo Pushing to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo SUCCESS! Code pushed to GitHub!
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Go to: https://github.com/Yuvraj-ai1/voting-right-/settings/pages
    echo 2. Set Source to "GitHub Actions"
    echo 3. Your site will be live at: https://yuvraj-ai1.github.io/voting-right-/
    echo.
) else (
    echo.
    echo ========================================
    echo Push failed - likely authentication issue
    echo ========================================
    echo.
    echo Try using GitHub Desktop or set up a Personal Access Token
    echo See GITHUB_PUSH_GUIDE.md for details
    echo.
)

pause
