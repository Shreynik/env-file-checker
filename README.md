# env-file-checker

This module checks the env file in the repository with the mandatory variables list in package.json as -
package.json
{
  "mandatoryEnvironmentVariables": ["DevelopmentUrl", "ProductionUrl"]
}

So  .env file must contain(atleast all variables in mandatoryEnvironmentVariable key) :
DevelopmentUrl=https://your-development-url.com
ProductionUrl=https://your-production-url.com
