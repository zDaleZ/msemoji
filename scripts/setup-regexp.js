#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path')

const fileDest = path.join(__dirname, 'build-regexp');
const fileUrl = 'https://github.com/s9e/RegexpBuilderCommand/releases/download/0.5.4/build-regexp.phar';

function main() {
  try {
    // 检查文件是否存在
    if (!fs.existsSync(fileDest)) {
      console.log(`Downloading thing to ${fileDest}...`);
      
      // 使用跨平台的 curl 命令
      execSync(`curl --silent --location --output "${fileDest}" "${fileUrl}"`, {
        stdio: 'inherit'
      });
      
      // 在非 Windows 系统添加执行权限
      if (os.platform() !== 'win32') {
        fs.chmodSync(fileName, 0o755); // rwxr-xr-x
      }
    }

    // 执行并打印版本
    if (os.platform() === 'win32') {
      // Windows 使用 PHP 解释器执行
      execSync(`php ${fileDest} --version`, { stdio: 'inherit' });
    } else {
      // Unix-like 系统直接执行
      execSync(`./${fileDest} --version`, { stdio: 'inherit' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();