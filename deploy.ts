const { exec } = require('child_process');

exec('git pull', (error: any, stdout: string, stderr: string) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

exec('docker-compose up --build -d', (error: any,  stdout: string, stderr: string) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});