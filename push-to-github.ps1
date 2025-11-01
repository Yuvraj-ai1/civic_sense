# GitHub Push Script for Civic Quiz App
# This script will help you push your code to GitHub

Write-Host "🚀 GitHub Push Script for Civic Quiz App" -ForegroundColor Green
Write-Host "==========================================`n" -ForegroundColor Green

# Check if Git is available
$gitPath = $null
$gitCommands = @(
    "git",
    "C:\Program Files\Git\cmd\git.exe",
    "C:\Program Files (x86)\Git\cmd\git.exe",
    "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe"
)

foreach ($cmd in $gitCommands) {
    try {
        if ($cmd -eq "git") {
            $result = Get-Command git -ErrorAction SilentlyContinue
            if ($result) {
                $gitPath = "git"
                break
            }
        } else {
            if (Test-Path $cmd) {
                $gitPath = $cmd
                break
            }
        }
    } catch {
        continue
    }
}

if (-not $gitPath) {
    Write-Host "❌ Git is not found on your system!" -ForegroundColor Red
    Write-Host "`nPlease install Git from one of these options:" -ForegroundColor Yellow
    Write-Host "1. Download Git: https://git-scm.com/download/win" -ForegroundColor Cyan
    Write-Host "2. Or use GitHub Desktop: https://desktop.github.com/" -ForegroundColor Cyan
    Write-Host "`nAfter installing Git, run this script again.`n" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "✅ Git found at: $gitPath`n" -ForegroundColor Green

# Navigate to project directory
$projectDir = $PSScriptRoot
Set-Location $projectDir

Write-Host "📍 Current directory: $projectDir`n" -ForegroundColor Cyan

# Initialize git if not already initialized
if (-not (Test-Path ".git")) {
    Write-Host "🔧 Initializing Git repository..." -ForegroundColor Yellow
    & $gitPath init
    Write-Host "✅ Git repository initialized`n" -ForegroundColor Green
} else {
    Write-Host "✅ Git repository already initialized`n" -ForegroundColor Green
}

# Check git status
Write-Host "📊 Checking repository status..." -ForegroundColor Yellow
& $gitPath status
Write-Host ""

# Add all files
Write-Host "📦 Adding all files to Git..." -ForegroundColor Yellow
& $gitPath add .
Write-Host "✅ Files added`n" -ForegroundColor Green

# Create commit
$commitMessage = "Initial commit: Civic Awareness Quiz System with gamification features"
Write-Host "💾 Creating commit..." -ForegroundColor Yellow
& $gitPath commit -m $commitMessage
Write-Host "✅ Commit created`n" -ForegroundColor Green

# Check remote
Write-Host "🌐 Checking remote repository..." -ForegroundColor Yellow
$remoteCheck = & $gitPath remote -v 2>&1
if ($remoteCheck -match "origin") {
    Write-Host "✅ Remote repository already configured" -ForegroundColor Green
    & $gitPath remote -v
} else {
    Write-Host "🔗 Adding remote repository..." -ForegroundColor Yellow
    & $gitPath remote add origin https://github.com/Yuvraj-ai1/voting-right-.git
    Write-Host "✅ Remote repository added`n" -ForegroundColor Green
}

# Check current branch
$currentBranch = & $gitPath branch --show-current
Write-Host "`n📌 Current branch: $currentBranch" -ForegroundColor Cyan

# Rename branch to main if needed
if ($currentBranch -ne "main") {
    Write-Host "🔄 Renaming branch to 'main'..." -ForegroundColor Yellow
    & $gitPath branch -M main
    Write-Host "✅ Branch renamed to 'main'`n" -ForegroundColor Green
}

# Push to GitHub
Write-Host "🚀 Ready to push to GitHub!" -ForegroundColor Green
Write-Host "`n⚠️  You will need to authenticate with GitHub." -ForegroundColor Yellow
Write-Host "Options:" -ForegroundColor Cyan
Write-Host "1. Personal Access Token (recommended)" -ForegroundColor White
Write-Host "2. GitHub CLI (gh auth login)" -ForegroundColor White
Write-Host "3. SSH keys" -ForegroundColor White
Write-Host "`nPress Enter to attempt push (or Ctrl+C to cancel)..." -ForegroundColor Yellow
Read-Host

Write-Host "`n📤 Pushing to GitHub..." -ForegroundColor Yellow
$pushResult = & $gitPath push -u origin main 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "`n🎉 Your code is now on GitHub!" -ForegroundColor Green
    Write-Host "`nNext steps:" -ForegroundColor Cyan
    Write-Host "1. Go to: https://github.com/Yuvraj-ai1/voting-right-/settings/pages" -ForegroundColor White
    Write-Host "2. Set Source to 'GitHub Actions'" -ForegroundColor White
    Write-Host "3. Your site will be live at: https://yuvraj-ai1.github.io/voting-right-/" -ForegroundColor White
} else {
    Write-Host "`n❌ Push failed. This might be due to authentication." -ForegroundColor Red
    Write-Host "Output: $pushResult" -ForegroundColor Yellow
    Write-Host "`nPlease try one of these solutions:" -ForegroundColor Yellow
    Write-Host "1. Use GitHub Desktop (easiest)" -ForegroundColor Cyan
    Write-Host "2. Set up Personal Access Token" -ForegroundColor Cyan
    Write-Host "3. Configure SSH keys" -ForegroundColor Cyan
    Write-Host "`nCheck GITHUB_PUSH_GUIDE.md for detailed instructions.`n" -ForegroundColor Yellow
}

Write-Host "`nPress Enter to exit..."
Read-Host
