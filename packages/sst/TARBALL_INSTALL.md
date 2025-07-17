# SST Tarball Installation Guide

This guide explains how to install and use this private version of SST via tarball for CI/CD pipelines.

## Building the Tarball

To create a tarball for distribution:

```bash
cd packages/sst
npm run pack
```

This will:

1. Build the project with `npm run build`
2. Clean up the dist/package.json (remove devDependencies and unnecessary scripts)
3. Create a tarball from the dist directory
4. Place the tarball in the package root: `sst-2.49.2.tgz`

## Installation Options

### Option 1: Direct Tarball Installation

Install directly from the tarball file:

```bash
npm install /path/to/sst-2.49.2.tgz
```

### Option 2: GitHub Actions with Artifacts

In your GitHub Actions workflow:

```yaml
name: Build and Deploy
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      # Build the SST tarball
      - name: Build SST
        run: |
          cd packages/sst
          npm ci
          npm run pack
      
      # Upload tarball as artifact
      - uses: actions/upload-artifact@v3
        with:
          name: sst-tarball
          path: packages/sst/sst-*.tgz
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      # Download tarball
      - uses: actions/download-artifact@v3
        with:
          name: sst-tarball
          path: ./
      
      # Install SST from tarball
      - name: Install SST
        run: npm install ./sst-*.tgz
      
      # Use SST
      - name: Deploy
        run: npx sst deploy --stage prod
```

### Option 3: Store as GitHub Release Asset

1. Create a GitHub release
2. Upload the tarball as a release asset
3. Download and install in CI/CD:

```bash
# Download from release
curl -L -o sst.tgz "https://github.com/Bluestone-Health/sst-v2/releases/download/v2.49.2/sst-2.49.2.tgz"

# Install
npm install ./sst.tgz
```

## Usage Examples

### Basic Usage

```javascript
// Import constructs
import { Stack, Api, Function } from 'sst/constructs';

// Import Node.js clients
import { Config } from 'sst/node/config';
import { Bucket } from 'sst/node/bucket';
```

### CLI Usage

```bash
# After installation
npx sst dev
npx sst deploy --stage prod
npx sst remove --stage staging
```

## Common Issues and Solutions

### Issue: Module Resolution Errors

**Problem**: Import errors when using SST modules

**Solution**: Ensure your project uses ES modules:

```json
{
  "type": "module"
}
```

### Issue: CLI Not Found

**Problem**: `npx sst` command not found

**Solution**: Verify installation and check that the tarball includes the CLI:

```bash
# Check if SST is installed
npm list sst

# Check CLI availability
npx sst --help
```

### Issue: Missing Dependencies

**Problem**: Runtime errors about missing dependencies

**Solution**: The tarball includes all runtime dependencies. If you encounter missing deps, check that the build process completed successfully.

## Troubleshooting

### Verify Tarball Contents

Extract and inspect the tarball:

```bash
tar -tzf sst-2.49.2.tgz | head -20
```

### Test Installation

Create a test project:

```bash
mkdir test-sst && cd test-sst
npm init -y
echo '{"type": "module"}' > package.json
npm install ../path/to/sst-2.49.2.tgz

# Test imports
node -e "import { Stack } from 'sst/constructs'; console.log('✅ Success');"
```

## Package Structure

The tarball contains:

- `cli/` - SST CLI tools
- `constructs/` - CDK constructs
- `node/` - Node.js client libraries
- `support/` - Runtime support files
- `package.json` - Clean package configuration

## Version Management

The tarball version matches the package.json version (2.49.2). For CI/CD:

1. Update version in package.json
2. Run `npm run pack`
3. Use the new tarball in your pipeline

## Security Considerations

- Store tarballs in secure locations
- Verify checksums in CI/CD if needed
- Use GitHub releases for versioned distribution
- Consider using private npm registries for better security
