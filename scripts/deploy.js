const fs = require("fs");
const path = require("path");
require("dotenv").config({
  path:
    process.env.NODE_ENV === "production" ? ".env.production" : ".env.local",
});

// Clean build directories
const cleanDirs = [".next", "out"];
cleanDirs.forEach((dir) => {
  const dirPath = path.join(__dirname, "..", dir);
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true });
    console.log(`Cleaned ${dir} directory`);
  }
});

// Ensure environment variables are set
const requiredEnvVars = ["NEXT_PUBLIC_API_URL", "MONGODB_URI", "JWT_SECRET"];

const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);
if (missingVars.length > 0) {
  console.error(
    "\x1b[31m%s\x1b[0m",
    `Error: Missing required environment variables: ${missingVars.join(", ")}`
  );
  console.log(
    "\x1b[33m%s\x1b[0m",
    `
Please ensure you have set up your environment variables:
1. For development: Create a .env.local file
2. For production: Create a .env.production file

Required variables:
- NEXT_PUBLIC_API_URL: Your API URL (e.g., http://localhost:4000 for development)
- MONGODB_URI: Your MongoDB connection string
- JWT_SECRET: Your JWT secret key
  `
  );
  process.exit(1);
}

// Validate environment variable formats
const validateEnvVars = () => {
  const errors = [];

  // Validate NEXT_PUBLIC_API_URL
  try {
    new URL(process.env.NEXT_PUBLIC_API_URL);
  } catch (e) {
    errors.push("NEXT_PUBLIC_API_URL must be a valid URL");
  }

  // Validate MONGODB_URI
  if (
    !process.env.MONGODB_URI.startsWith("mongodb://") &&
    !process.env.MONGODB_URI.startsWith("mongodb+srv://")
  ) {
    errors.push("MONGODB_URI must be a valid MongoDB connection string");
  }

  // Validate JWT_SECRET
  if (process.env.JWT_SECRET.length < 32) {
    errors.push(
      "JWT_SECRET should be at least 32 characters long for security"
    );
  }

  return errors;
};

const validationErrors = validateEnvVars();
if (validationErrors.length > 0) {
  console.error("\x1b[31m%s\x1b[0m", "Environment variable validation failed:");
  validationErrors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(
  "\x1b[32m%s\x1b[0m",
  "✓ Pre-deployment checks completed successfully"
);
console.log(
  "\x1b[36m%s\x1b[0m",
  `
Environment: ${process.env.NODE_ENV}
API URL: ${process.env.NEXT_PUBLIC_API_URL}
MongoDB: ${process.env.MONGODB_URI.replace(
    /\/\/([^:]+):([^@]+)@/,
    "//$1:****@"
  )}
`
);
