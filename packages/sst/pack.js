#!/usr/bin/env node
import { execSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const packagePath = './package.json';
const distPackagePath = './dist/package.json';

console.log('📦 Building and packing SST...');

// Step 1: Clean and build
console.log('1. Building project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 2: Ensure dist/package.json has proper configuration
console.log('2. Configuring dist package.json...');
if (!existsSync(distPackagePath)) {
  console.error('❌ dist/package.json not found. Build may have failed.');
  process.exit(1);
}

const distPkg = JSON.parse(readFileSync(distPackagePath, 'utf8'));

// Clean up dist package.json for publishing
const cleanedPkg = {
  ...distPkg,
  // Remove development-only fields
  scripts: undefined,
  devDependencies: undefined,
  directories: undefined,
  // Update repository directory path
  repository: {
    ...distPkg.repository,
    directory: 'packages/sst'
  }
};

writeFileSync(distPackagePath, JSON.stringify(cleanedPkg, null, 2));

// Step 3: Pack from dist directory
console.log('3. Creating tarball...');
try {
  // Change to dist directory and pack
  process.chdir('./dist');
  
  const result = execSync('npm pack --pack-destination ../', { 
    stdio: 'pipe',
    encoding: 'utf8'
  });
  
  const tarballName = result.trim();
  console.log(`✅ Successfully created: ${tarballName}`);
  
  // Change back to original directory
  process.chdir('..');
  
  // Show tarball location
  console.log(`📁 Tarball location: ${join(process.cwd(), tarballName)}`);
  
} catch (error) {
  console.error('❌ Pack failed:', error.message);
  process.exit(1);
}

console.log('✅ Package ready for distribution!');