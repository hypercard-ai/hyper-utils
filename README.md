# HyperAI Utilities (`@hypercard-ai/hyper-utils`)

This repository is the central source of truth for shared TypeScript types, utility functions, and constants used across Hypercard AI's projects. It is published as a private npm package to the GitHub Package Registry.

## ❗️ Action Required: Authenticate Your Local Environment

To install this private package, you must authenticate your local `npm` client with your GitHub account. This is a **one-time setup** on your machine that grants you access to download packages from the GitHub Package Registry.

The `.npmrc` file is already included in this project, so you just need to perform the following steps.

### Step 1: Generate a Personal Access Token (PAT)

1.  Navigate to the [Personal access tokens (classic)](https://github.com/settings/tokens?type=classic) page in your GitHub settings.
    *(Note: Use a "classic" token for compatibility with the `npm login` command line tool.)*

2.  Click **Generate new token** and select **Generate new token (classic)**.

3.  Give the token a descriptive name (e.g., `github-packages-access`).

4.  Set an expiration date for the token. A 90-day expiration is a good security practice.

5.  In the **Select scopes** section, check the box for **`read:packages`**. This is the only permission required to download the package.

6.  Scroll down and click **Generate token**.

7.  **Copy the generated token immediately.** You will not be able to see it again after you leave the page.

### Step 2: Log in to the GitHub Package Registry

Now, open your terminal and run the following command to log in:

```bash
npm login --registry=https://npm.pkg.github.com
```

You will be prompted for three things:
* **Username:** Enter your GitHub username.
* **Password:** Paste the **Personal Access Token (PAT)** you just generated.
* **Email:** Enter the email address associated with your GitHub account.

You are now authenticated! Your credentials will be stored in a global `.npmrc` file on your computer, so you won't have to do this again.

## Installation

After you have authenticated, you can install the package as usual in any project that has the correct `.npmrc` file.

```bash
npm install --save-dev @hypercard-ai/hyper-utils
```

---

## Usage

Once installed, you can import types and utilities directly from the package.

```typescript
import { SomeType, someUtilityFunction } from '@hypercard-ai/hyper-utils';

const data: SomeType = {
  // ...
};

const result = someUtilityFunction(data);
```

## Contributing

Changes to this repository affect multiple projects. Before merging any changes to `main`, you **must** increment the `version` in `package.json` according to Semantic Versioning (SemVer) rules.