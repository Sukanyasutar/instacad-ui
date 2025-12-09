# ===========================================
# Script: Create File Names Only
# Creates empty files with proper names in existing folder structure
# ============================================

param(
    [string]$ProjectPath = "instacad-ui"
)

function Write-ColorOutput {
    param([string]$Message, [string]$Color = "White")
    Write-Host $Message -ForegroundColor $Color
}

function Create-EmptyFile {
    param([string]$FilePath)
    try {
        $directory = Split-Path $FilePath -Parent
        if (!(Test-Path $directory)) {
            New-Item -ItemType Directory -Path $directory -Force | Out-Null
        }
        
        # Create empty file
        $null = New-Item -ItemType File -Path $FilePath -Force
        Write-ColorOutput "  Created: $(Split-Path $FilePath -Leaf)" -Color Green
    } catch {
        Write-ColorOutput "  Failed: $(Split-Path $FilePath -Leaf) - $($_.Exception.Message)" -Color Red
    }
}

function Add-ContentToFile {
    param([string]$FilePath, [string]$Content)
    try {
        Set-Content -Path $FilePath -Value $Content -Encoding UTF8
        Write-ColorOutput "  Added content to: $(Split-Path $FilePath -Leaf)" -Color Green
    } catch {
        Write-ColorOutput "  Failed to add content: $(Split-Path $FilePath -Leaf)" -Color Red
    }
}

Write-ColorOutput "===========================================" -Color Cyan
Write-ColorOutput "   CREATING FILE NAMES IN FOLDER STRUCTURE   " -Color Cyan
Write-ColorOutput "===========================================" -Color Cyan

$projectPath = Join-Path (Get-Location) $ProjectPath

if (!(Test-Path $projectPath)) {
    Write-ColorOutput "Project folder not found at: $projectPath" -Color Red
    Write-ColorOutput "Please create the folder structure first!" -Color Yellow
    exit 1
}

Write-ColorOutput "Project location: $projectPath" -Color Green

# List of files to create
$files = @(
    # ========== TYPES ==========
    "src\types\index.ts",
    
    # ========== UTILS ==========
    "src\utils\constants.ts",
    
    # ========== HOOKS ==========
    "src\hooks\useMobileMenu.ts",
    
    # ========== STYLES ==========
    "src\styles\globals.css",
    "src\index.css",
    
    # ========== MAIN FILES ==========
    "src\App.tsx",
    "src\main.tsx",
    "src\vite-env.d.ts",
    
    # ========== LAYOUT COMPONENTS ==========
    "src\components\layout\Layout.tsx",
    
    # Header Components
    "src\components\layout\Header\Header.tsx",
    "src\components\layout\Header\DesktopMenu.tsx",
    "src\components\layout\Header\MobileMenu.tsx",
    
    # Footer Components
    "src\components\layout\Footer\Footer.tsx",
    
    # ========== SECTION COMPONENTS ==========
    # Hero Section
    "src\components\sections\Hero\HeroSection.tsx",
    
    # Products Section
    "src\components\sections\Products\ProductsSection.tsx",
    
    # Services Section
    "src\components\sections\Services\ServicesSection.tsx",
    
    # About Section
    "src\components\sections\About\AboutSection.tsx",
    
    # Contact Section
    "src\components\sections\Contact\ContactSection.tsx",
    
    # ========== PAGES ==========
    "src\pages\Home.tsx",
    "src\pages\Products.tsx",
    "src\pages\Services.tsx",
    "src\pages\About.tsx",
    "src\pages\Contact.tsx",
    
    # ========== CONFIGURATION FILES ==========
    "package.json",
    "tsconfig.json",
    "tsconfig.node.json",
    "vite.config.ts",
    "tailwind.config.js",
    "postcss.config.js",
    ".eslintrc.cjs",
    ".gitignore",
    "README.md",
    "index.html"
)

Write-ColorOutput "`nCreating files..." -Color Cyan

$totalFiles = 0
foreach ($file in $files) {
    $fullPath = Join-Path $projectPath $file
    Create-EmptyFile -FilePath $fullPath
    $totalFiles++
}

# Add basic content to key files
Write-ColorOutput "`nAdding basic content to key files..." -Color Yellow

# package.json
$packageJsonPath = Join-Path $projectPath "package.json"
if (Test-Path $packageJsonPath) {
    $packageJsonContent = @'
{
  "name": "instacad-ui",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
}
'@
    Add-ContentToFile -FilePath $packageJsonPath -Content $packageJsonContent
}

# tsconfig.json
$tsconfigPath = Join-Path $projectPath "tsconfig.json"
if (Test-Path $tsconfigPath) {
    $tsconfigContent = @'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
'@
    Add-ContentToFile -FilePath $tsconfigPath -Content $tsconfigContent
}

# tsconfig.node.json
$tsconfigNodePath = Join-Path $projectPath "tsconfig.node.json"
if (Test-Path $tsconfigNodePath) {
    $tsconfigNodeContent = @'
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
'@
    Add-ContentToFile -FilePath $tsconfigNodePath -Content $tsconfigNodeContent
}

# vite.config.ts
$viteConfigPath = Join-Path $projectPath "vite.config.ts"
if (Test-Path $viteConfigPath) {
    $viteConfigContent = @'
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
'@
    Add-ContentToFile -FilePath $viteConfigPath -Content $viteConfigContent
}

# tailwind.config.js
$tailwindConfigPath = Join-Path $projectPath "tailwind.config.js"
if (Test-Path $tailwindConfigPath) {
    $tailwindConfigContent = @'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        instacad: {
          blue: "#0099CC",
          red: "#dc1f1d",
          dark: "#2c3e50"
        }
      }
    }
  },
  plugins: []
}
'@
    Add-ContentToFile -FilePath $tailwindConfigPath -Content $tailwindConfigContent
}

# postcss.config.js
$postcssPath = Join-Path $projectPath "postcss.config.js"
if (Test-Path $postcssPath) {
    $postcssContent = @'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
'@
    Add-ContentToFile -FilePath $postcssPath -Content $postcssContent
}

# .eslintrc.cjs
$eslintPath = Join-Path $projectPath ".eslintrc.cjs"
if (Test-Path $eslintPath) {
    $eslintContent = @'
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
}
'@
    Add-ContentToFile -FilePath $eslintPath -Content $eslintContent
}

# .gitignore
$gitignorePath = Join-Path $projectPath ".gitignore"
if (Test-Path $gitignorePath) {
    $gitignoreContent = @'# Dependencies
node_modules/
.pnp
.pnp.js

# Production
dist/
build/

# Misc
.DS_Store
*.pem

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Editor
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
'@
    Add-ContentToFile -FilePath $gitignorePath -Content $gitignoreContent
}

# README.md
$readmePath = Join-Path $projectPath "README.md"
if (Test-Path $readmePath) {
    $readmeContent = @'# InstaCAD UI Project

React 19+ TypeScript application with Tailwind CSS.

## Getting Started

1. Install dependencies:
```bash
npm install